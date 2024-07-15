import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import { useHistory } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const history = useHistory();

  const getCharacters = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229`
    );
    const json = await response.json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleCharacterClick = (id) => {
    history.push(`/character/${id}`);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id} onClick={() => handleCharacterClick(character.id)}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
