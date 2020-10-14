import { BACKEND_URL } from "../config";

export function useGraphQl() {
  return {
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
}
