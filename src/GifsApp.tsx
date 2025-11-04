import { useState } from "react";
import { GifsList, PreviouSearches } from "./gifs/components"
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBar } from "./shared/components"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(["gatitos"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  }

  return (
    <>
      <CustomHeader title="Buscador de GIFS" description="Descubre y comparte el gif perfecto" />
      <SearchBar placeholder="Buscar gifs..." />

      <PreviouSearches searches={ previousTerms } onLabelClick={ handleTermClicked } />

      <GifsList gifs={ mockGifs } />
    </>
  )
}
