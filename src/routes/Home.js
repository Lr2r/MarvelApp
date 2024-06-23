import React, { useEffect, useState } from "react";
import Character from "./components/Character";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229`
    );
    const json = await response.json();
    console.log(json); // 응답 데이터를 콘솔에 출력
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
