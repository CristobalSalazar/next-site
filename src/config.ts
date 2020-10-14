export const BACKEND_URL =
  process.env.BACKEND_URL ||
  process.env.DEV_BACKEND_URL ||
  "http://localhost:1337";

console.log("Backend url", BACKEND_URL);
