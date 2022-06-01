import React, { useContext } from 'react';
import { SpotifyContext } from '../Context/SpotifyContext';
import { ReactComponent as MusicWhite } from '../Icons/musicWhite.svg';
import { ReactComponent as MusicBlack } from '../Icons/musicBlack.svg';
import searchAlbumsAPI from '../Services/getAlbum';

function SearchBar() {

	const { search, setSearch, setAlbums, setLoading } = useContext(SpotifyContext);

	const onInputChange = ({ target }) => {
		setSearch(target.value);

	};

	const handleClick = async () => {
		setLoading(true);
		const result = await searchAlbumsAPI(search);
		setAlbums(result);
		setLoading(false);
	};

	return (
		<form className='search-form'>
			<button
				className='search-button'
				type="button"
				disabled={ search.length > 2 ? false : true }
				onClick={handleClick}
			>
				{
					search.length > 2 ? <MusicBlack /> : <MusicWhite />
				}
			</button>
			<input  className='search-input' onChange={ (e) => onInputChange(e) } type="text" />
		</form>
	);
}

export default SearchBar;