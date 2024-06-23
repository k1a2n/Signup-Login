import React, { useState } from 'react';
import './Body.css';
import welcomeImg from './welcomeimg.png';

const Body = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleCreateClick1 = () => {
    setIsSignUp(true);
  };
  const handleCreateClick2 = () => {
    setIsSignUp(false);
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className={`outerSlider ${isSignUp ? 'slide-left' : ''}`}>
            <div className={`innerSlider ${isSignUp ? 'slide-left' : ''}`}>
              <div className="title">{isSignUp ? 'Sign Up' : 'Login'}</div>
              <form action="./server">
                <div className="form-content">
                  <div className="input">
                    <div className="email">
                      <div className="label">
                        <div>Email</div>
                      </div>
                      <div className="innerInput">
                        <input type="email" id="email" name="email" />
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                    </div>
                    {isSignUp && (  // Render additional input only when isSignUp is true
                      <div className="username">
                        <div className="label">
                          <div>Username</div>
                        </div>
                        <div className="innerInput">
                          <input type="text" id="username" name="username" />
                          <i class="fa-regular fa-user"></i>
                        </div>
                      </div>
                    )}
                    <div className="password">
                      <div className="label">
                        <div>Password</div>
                      </div>
                      <div className="innerInput">
                        <input type="password" id="password" name="password" />
                        <i className="fa-solid fa-unlock-keyhole"></i>
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <button>{isSignUp ? 'Sign up' : 'Login'}</button>
                  </div>
                </div>
              </form>
              <div className="createForget">
                <div className="create" onClick={handleCreateClick1}>
                  {isSignUp ? '' : 'Create an account'}
                </div>
                <div className="forget" onClick={handleCreateClick2} >
                  {isSignUp ? 'Already have an account' : 'Forget password'}
                </div>
              </div>
            </div>
          </div>
          <div className={`imgSlider ${isSignUp ? 'slide-right' : 'slide-left'}`}>
            <img src={welcomeImg} alt="Welcome" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
