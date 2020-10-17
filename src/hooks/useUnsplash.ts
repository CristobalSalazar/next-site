const api = "https://source.unsplash.com";

export const useUnsplash = {
  getRandomSrc(width: number, height: number, terms?: string[]) {
    let query = "";
    if (terms) query = "?" + terms.join(",");
    return api + `/random/${width}x${height}${query}`;
  },
  getPhotoSrc(id: string, width: number, height: number) {
    return api + `/${id}/${width}x${height}`;
  },
};
