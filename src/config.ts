export const BACKEND_URL =
  process.env.BACKEND_URL ||
  process.env.DEV_BACKEND_URL ||
  "http://localhost:1337";

if (process.env.NODE_ENV === "production")
  console.log("BACKEND_URL", BACKEND_URL);
