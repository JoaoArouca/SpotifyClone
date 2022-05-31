import React from 'react';
import PropTypes from 'prop-types';
import { SpotifyContext } from './SpotifyContext';


function Provider({ children }) {

  const globalState = {}

  return (
    <SpotifyContext.Provider value={ globalState }>
      { children }
    </SpotifyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default Provider;
