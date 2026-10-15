"use client";

// Inline <script> that runs only from the server HTML (during parsing, before
// paint). When React renders it on the client (e.g. switching between [lang]
// root layouts) it becomes inert text/plain, which also silences React's
// "Encountered a script tag" dev warning.
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
