import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { SpotifyContext } from '../Context/SpotifyContext';

function PageProfile() {

	const { loading, setLoading } = useContext(SpotifyContext);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		loading ? <Loading />
			: (
				<div>
					<Header />
				</div>
			)
	);
}

export default PageProfile;
