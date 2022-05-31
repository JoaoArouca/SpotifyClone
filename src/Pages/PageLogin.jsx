import React, { useState } from 'react';
import { ReactComponent as Logo } from '../Icons/spotifyLogo.svg';
import { ReactComponent as Hide } from '../Icons/hide.svg';
import { ReactComponent as Check } from '../Icons/check.svg';
import { ReactComponent as GitHub } from '../Icons/gitHub.svg';
import { ReactComponent as Linkedin } from '../Icons/linkedin.svg';

function PageLogin() {
  const [hideNcheck, setHideNCheck] = useState('password'); 


  const toggleButton = () => {
    if (hideNcheck === 'password') {
      setHideNCheck('text');
    } else {
      setHideNCheck('password');
    }
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
            required
          />
        
          <div style={ {width: '100%', border: '1px solid black'} }>
            <input
            style={ {width: '470px', border: 'none', outline: 'none'} } 
            type={hideNcheck}
            placeholder='Password'
            required
          />
            {
              hideNcheck === 'password' ? <Check style={ {width: '20px'} } onClick={ toggleButton } /> : <Hide style={ {width: '20px'} } onClick={ toggleButton } />
            }
          </div>
          <button style={ {width: '100%'} }>Log in</button>
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
          <GitHub style={ { paddingLeft: '10px' } } />
        </a>
       
      
         <a
          href='https://www.linkedin.com/in/joaovictorarouca/'
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin style={ { paddingLeft: '10px' } } />
        </a>
       
      </div>
    </main>
  );
}

export default PageLogin;