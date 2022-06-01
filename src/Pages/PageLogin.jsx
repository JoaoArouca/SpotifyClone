import React, { useContext, useState } from 'react';
import { ReactComponent as Logo } from '../Icons/spotifyLogo.svg';
import { ReactComponent as Hide } from '../Icons/hide.svg';
import { ReactComponent as Check } from '../Icons/check.svg';
import { ReactComponent as GitHub } from '../Icons/gitHub.svg';
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg';
import { createUser } from '../Services/UserApi';
import { SpotifyContext } from '../Context/SpotifyContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

function PageLogin() {
	const [hideNcheck, setHideNCheck] = useState('password');
	const { user, setUser, password, setPassword, loading, setLoading } = useContext(SpotifyContext);
	const navigate = useNavigate();


	const onUserChange = ({ target }) => {
		setUser(target.value);
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);
	};

	const toggleButton = () => {
		if (hideNcheck === 'password') {
			setHideNCheck('text');
		} else {
			setHideNCheck('password');
		}
	};

	const handleClick = () => {
		createUser({
			name: user,
		});
		setLoading(true);
		navigate('/search');
	};

	return (
		loading ? <Loading />
			: (
				<main className='login-main container'>
					<section className='login-top'>
						<Logo style={ {width: '170px', height: '100px'} } />
						<h2 className='login-title'>Log in to continue.</h2>
						<form>
							<input 
								className='login-input login-user'
								type='text'
								placeholder='Username'
								onChange={(e) => onUserChange(e)}
								required
							/>
						
							<div className='div-password' >
								<input
									className='login-input'
									type={hideNcheck}
									placeholder='Password'
									onChange={(e) => onPasswordChange(e)}
									required
								/>
								{
									hideNcheck === 'password' ? <Check onClick={ toggleButton } />
										: <Hide onClick={ toggleButton } />
								}
							</div>
							<button
								className='login-button'
								onClick={handleClick}
								disabled={user.length > 2 && password.length > 5 ? false : true}
							>
								Log in
							</button>
		
						</form>
					</section>
	
					<div className='div-bottom'>
						<a
							target="_blank"
							rel="noreferrer"
							href='https://github.com/JoaoArouca'
						>
							<GitHub className='login-icons' />
						</a>

						<a
							href='https://www.linkedin.com/in/joaovictorarouca/'
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin className='login-icons' /> 
						</a>
					</div>
					<span className='login-footer'>All Rigths Reserved for Spotify USA Inc.</span>
				</main>
			)
	);
}

export default PageLogin;
