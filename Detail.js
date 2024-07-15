import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const response = await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      );
      const json = await response.json();
      setCharacter(json.data.results[0]);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return <h1>Character not found</h1>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
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

export default Detail;
