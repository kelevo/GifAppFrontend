interface Props {
  searches?: string[];
  onLabelClick: ( term: string ) => void;
}

export const PreviouSearches = ( { searches, onLabelClick }: Props ) => {

  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search, index) => (
          <li 
            key={index}
            onClick={ () => onLabelClick( search ) }
          >
              {search}
          </li>
        ))}
      </ul>
    </div>
  );

}
