import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Our Survey</h1>
      <button className="start" onClick={onStart}>Start Survey</button>
    </div>
  );
}

export default WelcomeScreen;
