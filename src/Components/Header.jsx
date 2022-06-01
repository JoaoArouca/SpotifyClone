import React, { useEffect, useState } from 'react';
import { getUser } from '../Services/UserApi';
import { ReactComponent as ProfileLogo } from '../Icons/ProfileIcon.svg';
import { ReactComponent as SpotifyLogo } from '../Icons/spotifyLogo.svg';
import { Link } from 'react-router-dom';

function Header() {
	const [name, setName] = useState('');



	useEffect(() => {
		const requestUser = async () => {
			const user = await getUser();
			setName(user.name);
			return user;
		};
		requestUser();

	}, []);

	return (
		<header className='container header'>
			<section className='container'>
				<div>
					<ProfileLogo />{ name }
				</div>
				<SpotifyLogo style={ {width: '170px', height: '100px'} } />
			</section>
			<nav>
				<Link className='navbar-brand' to="/search">Search</Link>
				<Link className='navbar-brand' to="/favorites">Favorites</Link>
				<Link className='navbar-brand' to="/profile">Profile</Link>
			</nav>
		</header>
	);
}

export default Header;