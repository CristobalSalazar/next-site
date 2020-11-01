export function usePexels() {
  const videoUrl = "https://api.pexels.com/videos";
  const headers = {
    Authorization: process.env.PEXELS_KEY,
  };

  const getPopularVideos: any = async (opts?: {
    perPage?: number;
    page?: number;
    minHeight?: number;
    maxHeight?: number;
    durationInSeconds?: number;
    maxDurationInSeconds?: number;
  }) => {
    try {
      return await fetch(videoUrl + "/popular", {
        headers,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return {
    getPopularVideos,
  };
}
