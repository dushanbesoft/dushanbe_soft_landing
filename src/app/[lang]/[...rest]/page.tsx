import { notFound } from "next/navigation";

// Any URL that matches no route renders the localized [lang]/not-found page
// with a real 404 status instead of the framework's default English page.
export default function CatchAll() {
  notFound();
}
