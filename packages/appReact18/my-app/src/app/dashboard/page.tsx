import styles from "./dashboard.module.scss";
import cssVar from "@/app/variables.module.scss";
import Error from "./error";
import ErrorBoundary from "../ErrorBoundary";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
//   const data = await getData();

  return (
    <ErrorBoundary fallback={<Error />}>
      <h1 className={styles.fontColor} style={{ color: cssVar.primaryColor }}>
        Hello, Dashboard Page!
      </h1>
    </ErrorBoundary>
  );
}
