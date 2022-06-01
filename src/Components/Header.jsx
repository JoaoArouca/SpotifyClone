import React, { useEffect, useState } from 'react';
import { getUser } from '../Services/UserApi';
import { ReactComponent as ProfileLogo } from '../Icons/sasuke.svg';
import { ReactComponent as SpotifyLogo } from '../Icons/spotifyBlack.svg';
import { Link } from 'react-router-dom';

function Header() {
	const [name, setName] = useState('');


	useEffect(() => {
		const requestUser = async () => {
			const user = await getUser();
			setName(user.name);
		};
		requestUser();

	}, []);

	return (
		<header className='container header'>
			<section className='container header-section'>
				<SpotifyLogo className='header-logo' />
				<div className='header-profile'>
					<ProfileLogo />{ name }
				</div>
			</section>
			<nav className='header-nav container'>
				<Link className='header-links' to="/search">Search</Link>
				<Link className='header-links' to="/favorites">Favorites</Link>
				<Link className='header-links' to="/profile">Profile</Link>
			</nav>
		</header>
	);
}

export default Header;