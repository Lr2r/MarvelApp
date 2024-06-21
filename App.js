import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading]= useState(true); // 함수 실행시, component가 다시 render
  const [movies, setMovies] =useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229`
      )
      ).json();
      
      setMovies(json.data.resutls);
      setLoading(false);
    };
    
  useEffect(()=> {
    getMovies();
}, []);
  console.log(movies);
  
  return (
   <div>
    {loading ? <h1>Loading...</h1> : null}
    <h1>COYG!!!</h1>
    
    
   </div>
  );
}

export default App;
