import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpotifyContext } from './SpotifyContext';


function Provider({ children }) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const globalState = {
		user,
		setUser,
		password,
		setPassword,
		loading,
		setLoading,
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
