import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardMusic from '../Components/CardMusic';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { SpotifyContext } from '../Context/SpotifyContext';
import getMusics from '../Services/getMusic';

function PageAlbum() {

	const { loading, setLoading, musics, setMusics } = useContext(SpotifyContext);
	const { id } = useParams(); // recebe como string

	console.log(musics);

	useEffect(() =>{
		const requestMusics = async () => {
			const result = await getMusics(id);
			setMusics(result);
		};
		requestMusics();
		setLoading(false);
	}, []);

	return (
		loading ? <Loading />
			: (
				<div>
					<Header />
					{
						musics.length ? musics.map((M, index) => <CardMusic  key={index} data={M} />)
							: null							
					}
				</div>
			)
	);
}

export default PageAlbum;
