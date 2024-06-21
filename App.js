import { useEffect, useState } from "react";

function App() {
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
            <div key={character.id}>
              <h2>{character.name}</h2>
              <img
                src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                alt={character.name}
                width="300"
              />
              <p>{character.description ? character.description : "No description available"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
