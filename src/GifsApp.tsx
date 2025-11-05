import { useState } from "react";
import { GifsList, PreviouSearches } from "./gifs/components"
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(["gatitos"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  const handleSearch = (query: string) => {

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
  
  }

  return (
    <>
      <CustomHeader title="Buscador de GIFS" description="Descubre y comparte el gif perfecto" />
      <SearchBar placeholder="Buscar gifs..." onQuery={ handleSearch } />

      <PreviouSearches searches={ previousTerms } onLabelClick={ handleTermClicked } />

      <GifsList gifs={ mockGifs } />
    </>
  )
}
