interface Props {
  type?: string;
  placeholder?: string;
  buttonText?: string;
}

export const SearchBar = ( { type, placeholder, buttonText }: Props ) => {
  return (
    <div className="search-container">
      <input type={ type ? type : "text" } placeholder={ placeholder ? placeholder : "Buscar..." } />
      <button> { buttonText ? buttonText : "Buscar" } </button>
    </div>
  )
}
