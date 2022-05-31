import React, { useContext, useState } from 'react';
import { ReactComponent as Logo } from '../Icons/spotifyLogo.svg';
import { ReactComponent as Hide } from '../Icons/hide.svg';
import { ReactComponent as Check } from '../Icons/check.svg';
import { ReactComponent as GitHub } from '../Icons/gitHub.svg';
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg';
import { createUser } from '../Services/UserApi';
import { SpotifyContext } from '../Context/SpotifyContext';
import { useNavigate } from 'react-router-dom';

function PageLogin() {
	const [hideNcheck, setHideNCheck] = useState('password');
	const [disableButton, setButton] = useState(true);
	const { user, setUser, password, setPassword } = useContext(SpotifyContext);
	const navigate = useNavigate();


	const onUserChange = ({ target }) => {
		if (target.value.length < 3) {
			setButton(true);
		} else {
			setButton(false);
			setUser(target.value);
		}
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
		console.log(password);
		navigate('/search');
	};

	return (
		<main
			style={ {display: 'flex', flexDirection: 'column', width: '500px', alignItems: 'center'} }
		>
			<section
				style={ {display: 'flex', flexDirection: 'column', width: '500px', alignItems: 'center'} }
			>
				<Logo style={ {width: '150px', height: '100px'} } />
				<h2>Log in to continue</h2>
				<form
					style={ {display: 'flex', flexDirection: 'column', width: '500px', alignItems: 'center'} }
				>
					<input
						style={ {width: '500px'} } 
						stype='text'
						placeholder='Username'
						onChange={(e) => onUserChange(e)}
						required
					/>
        
					<div style={ {width: '100%', border: '1px solid black'} }>
						<input
							style={ {width: '470px', border: 'none', outline: 'none'} } 
							type={hideNcheck}
							placeholder='Password'
							onChange={(e) => onPasswordChange(e)}
							required
						/>
						{
							hideNcheck === 'password' ? <Check style={ {width: '20px'} } onClick={ toggleButton } />
								: <Hide style={ {width: '20px'} } onClick={ toggleButton } />
						}
					</div>
					<button
						onClick={handleClick}
						disabled={disableButton}
						style={ {width: '100%'} }
					>
            Log in
					</button>

				</form>
			</section>
			<span>______________________________________________________________</span>

			<div>
				<a
					id='github'
					target="_blank"
					rel="noreferrer"
					href='https://github.com/JoaoArouca'
				>
					<GitHub />
				</a>
       
      
				<a
					href='https://www.linkedin.com/in/joaovictorarouca/'
					target="_blank"
					rel="noreferrer"
				>
					<Linkedin />
				</a>
       
			</div>
		</main>
	);
}

export default PageLogin;
