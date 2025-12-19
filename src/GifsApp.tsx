import { useState } from "react";
import { GifsList, PreviouSearches } from "./gifs/components"
import { CustomHeader, SearchBar } from "./shared/components"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [Gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  const handleSearch = async (query: string) => {

    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms(prev => {
      const updated = [query, ...prev];
      if (updated.length > 8) {
        return updated.slice(0, 8);
      }
      return updated;
    });

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  
  }

  return (
    <>
      <CustomHeader title="Buscador de GIFS" description="Descubre y comparte el gif perfecto" />
      <SearchBar placeholder="Buscar gifs..." onQuery={ handleSearch } />

      <PreviouSearches searches={ previousTerms } onLabelClick={ handleTermClicked } />

      <GifsList gifs={ Gifs } />
    </>
  )
}
