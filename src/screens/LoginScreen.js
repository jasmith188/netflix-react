import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://i.pinimg.com/originals/dc/53/44/dc534483cfdf7b27b55ad369865deb1a.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In to your Movie Screen Account
        </button>
        <div className="loginScreen__gradient" />

              <div className="loginScreen__body">
                  {signIn ? (
                      <SignupScreen />
                  ) : (
              <>
                <h1>Welcome to Movie Screen!</h1>
                    <h2>
                      A place to binge watch your favorite movies and television shows{' '}
                    </h2>
                    <h2>Watch Anywhere, cancel WHENEVER YOU WANT</h2>
                    <h4>
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </h4>
                    <div className="loginScreen__input">
                      <form>
                        <input type="email" placeholder="Email Address" />
                        <button onClick={()=> setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                      </form>
                    </div>
                  </> 
                  )}
          
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
