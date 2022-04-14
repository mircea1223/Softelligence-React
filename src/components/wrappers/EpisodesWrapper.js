import React from 'react';
import Episodes from '../Episodes';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import './EpisodesWrapper.css';

const EpisodesWrapper = () => {
  const { episodes, isLoading } = useFetchEpisodes();

  return (
    <div className="episodes-wrapper">
      {isLoading ? 'Loading in progress...' : ''}
      {
        !isLoading && <Episodes episodes={episodes} />
      }
    </div>
  );
};

export default EpisodesWrapper;