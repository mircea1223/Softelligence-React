import React from 'react';
import PropTypes from 'prop-types';
import useFetchCharacters from '../hooks/useFetchCharacters';
import Characters from '../Characters';
import './styles.css';

const Episodes = (props) => {
  const {episodes} = props;
  const [{ isLoading, characters }, loadCharacters] = useFetchCharacters();

  const getId = (url) => url.split('/').pop();

  const onButtonClick = (episodeId) => {
    if (!episodeId) return;

    const currentEpisode = episodes.find(({id}) => id === episodeId);
    if (currentEpisode) {
      //[https://rickandmortyapi.com/api/character/28324, https://rickandmortyapi.com/api/character/1]
      //28324,1

      const {characters} = currentEpisode;
      const result = characters.reduce((prev, curr, idx) => {
        const idCharacter = getId(curr);
        return idx === 0 ? idCharacter : `${prev},${idCharacter}`;
      }, '');

      loadCharacters(result);
    }
  };

  return (
    <>
      <ul>
        {
          (episodes || []).map(({id, name, air_date: airDate, episode}) => {
            return (
              <li key={id}>
                {name}
                <button onClick={() => onButtonClick(id)}>View characters</button>
              </li>
            );
          })
        }
      </ul>
      {isLoading ? ('Loading...') : null}
      {
        (characters || []).length ? (<Characters characterList={characters} />) : null
      }
    </>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.array.isRequired
};

export default Episodes;