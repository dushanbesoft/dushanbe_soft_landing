// Notify Yandex, Bing and other IndexNow engines about all sitemap URLs.
// Run after each deploy:  npm run indexnow
// The key file public/d417a4774a71a7d242247eba5de37177.txt must be reachable on the live site.
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbe-soft.tj").replace(/\/$/, "");
const KEY = "d417a4774a71a7d242247eba5de37177";

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`sitemap.xml: HTTP ${r.status}`);
  return r.text();
});
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`Found ${urls.length} URLs in sitemap`);

const host = new URL(SITE).host;
// Submit to the engines directly: the shared api.indexnow.org gateway can
// reject (403) a newly published key for a while, while engines accept it.
const ENDPOINTS = ["https://yandex.com/indexnow", "https://www.bing.com/indexnow"];

let failed = false;
for (const endpoint of ENDPOINTS) {
  // IndexNow accepts up to 10,000 URLs per request.
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: KEY,
        keyLocation: `${SITE}/${KEY}.txt`,
        urlList: urls.slice(i, i + 10000),
      }),
    });
    const body = (await res.text()).trim();
    console.log(`${endpoint} batch ${i / 10000 + 1}: HTTP ${res.status}${body ? ` ${body}` : ""}`);
    if (!res.ok) failed = true;
  }
}
if (failed) process.exitCode = 1;
