import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { SpotifyContext } from '../Context/SpotifyContext';

function PageFavorites() {

	const { loading, setLoading } = useContext(SpotifyContext);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		loading ? <Loading />
			: (
				<main>
					<Header />
				</main>
			)
	);
}

export default PageFavorites;