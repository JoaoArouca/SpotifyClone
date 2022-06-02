import React, { useContext, useEffect } from 'react';
import CardAlbum from '../Components/CardAlbum';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import SearchBar from '../Components/SearchBar';
import { SpotifyContext } from '../Context/SpotifyContext';

function PageSearch() {

	const { loading, setLoading, albums } = useContext(SpotifyContext);


	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		loading ? <Loading />
			: (
				<main>
					<Header />
					<SearchBar />
					<section className='container search-section'>
						{
							albums.length ? albums.map((A, index) => <CardAlbum key={index} data={A} />)
								: null
						}
					</section>		
				</main>
			)
	);
}

export default PageSearch;