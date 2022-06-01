import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpotifyContext } from './SpotifyContext';


function Provider({ children }) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [albums, setAlbums] = useState([]);

	const globalState = {
		user,
		setUser,
		password,
		setPassword,
		loading,
		setLoading,
		search,
		setSearch,
		albums,
		setAlbums
	};

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
