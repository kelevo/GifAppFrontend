import { GiphyResponse } from "../interfaces/giphy.response";
import { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

  const response = await giphyApi<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 12,
    }
  });

  return response.data.data.map( (gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: parseInt(gif.images.original.width, 10),
    height: parseInt(gif.images.original.height, 10),
  }));

}