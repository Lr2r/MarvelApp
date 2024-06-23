import React from "react";


function Character({ character }) {
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
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
