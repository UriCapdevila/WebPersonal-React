import React, { useState } from 'react';

function App() {
  const [bongs, setBongs] = useState(0);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleGrantConsent = () => {
    setConsentGiven(true);
  };

  const handleBong = () => {
    setBongs(bongs + 1);
  };

  return (
    <div>
      <div id="consentement" hidden={consentGiven}>
        <p>Ce site nécessite une autorisation pour fonctionner.</p>
        <button id="demander" onClick={handleGrantConsent}>Demander l'autorisation</button>
      </div>
      <h1>Bong !</h1>
      <p>Nombre de bongs : <span id="bongs">{bongs}</span></p>
      <button id="bong" onClick={handleBong}>Bong !</button>
      <p>Made with ❤️ by <a href="https://www.google.com">the Google team</a></p>
    </div>
  );
}

export default App;
