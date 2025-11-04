import { useEffect, useState } from "react";

interface Props {
  type?: string;
  placeholder?: string;
  buttonText?: string;
  onQuery: ( query: string ) => void;
}

export const SearchBar = ( { type, placeholder, buttonText, onQuery }: Props ) => {

  const [query, setQuery] = useState("");

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      onQuery( query );
    }, 700)

    return () => {
      clearTimeout( timeoutId );
    };

  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery( query );
    setQuery("");
  }

  const handleKeyEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  }

  return (
    <div className="search-container">
      <input 
        type={ type ? type : "text" } 
        placeholder={ placeholder ? placeholder : "Buscar..." }
        value={ query }
        onChange={ (event) => setQuery(event.target.value) }
        onKeyDown={ (event) => handleKeyEnterDown(event) }
      />
      <button onClick={handleSearch}> { buttonText ? buttonText : "Buscar" } </button>
    </div>
  )
}
