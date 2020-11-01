import { BACKEND_URL } from "../config";

const grahpqlClient = {
  query: async (query: string) => {
    return await fetch(BACKEND_URL + "/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
      }),
    });
  },
};
export default grahpqlClient;
