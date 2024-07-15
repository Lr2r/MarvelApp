import React from "react";
import { useHistory } from "react-router-dom";

function Character({ character }) {
  const history = useHistory();

  const handleTitleClick = () => {
    history.push(`/character/${character.id}`);
  };

  return (
    <div key={character.id}>
      <h2 onClick={handleTitleClick} style={{ cursor: "pointer", color: "blue" }}>
        {character.name}
      </h2>
      <img
        src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
        alt={character.name}
        width="300"
      />
      <p>{character.description ? character.description : ""}</p>
      <ul>
        {character.series.items.map((series) => (
          <li key={series.resourceURI}>{series.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Character;
