import { useEffect, useState } from 'react';

const useFetchEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((response) => {
        const {results} = response || {};
        if (results.length > 0) {
          setEpisodes(results);
          setIsLoading(false);
        }
      });
  }, []);

  return {
    episodes,
    isLoading
  };
};

export default useFetchEpisodes;