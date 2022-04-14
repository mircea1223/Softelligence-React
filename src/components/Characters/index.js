import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

const Characters = (props) => {
  const {characterList} = props;

  const classes = cn('characters-container');
  return (
    <div className={classes}>
      {
        characterList.map(({id, name, image}) => {
          return (
            <figure key={`character-${id}`}>
              <div className="character-name" title={name}>{name}</div>
              <div className="character-image">
                <img alt={`${name}'s logo`} src={image} />
              </div>
            </figure>
          );
        })
      }
    </div>
  );
};

Characters.propTypes = {
  characterList: PropTypes.array.isRequired
};

export default Characters;