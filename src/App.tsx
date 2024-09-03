import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'typescript-cookie';
import './styles/App.css';
import Main from "./components/main";
import SecretCodeListener from './components/secret';

function App() {
  const [hasCookie, setHasCookie] = useState(false);

  // Set the state of whether there is a cookie or not
  useEffect(() => {
    if (getCookie('cookie') === 'hasCookie') {
      setHasCookie(true);
    }
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.id = 'svg1';
    link.rel = 'icon';
    link.type = 'image/svg+xml';

    if (hasCookie) {
      link.href = './alt.svg';
      document.title = "There's no one here";
    } else {
      link.href = './default.svg';
      document.title = 'Hey! Enjoy the fire';
      // Timeout for cookie, render happens to fast
      setTimeout(() => {
        setCookie('cookie', 'hasCookie', {sameSite: "None", secure: true});
        setCookie('token', 'Secret: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ', {sameSite: "None", secure: true})
      }, 1000);
    }

    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById('svg1');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, [hasCookie]);

  return (
    <div className='container'>
      { hasCookie ? 
      <SecretCodeListener/>
      : <>
          <img src="https://media1.tenor.com/m/5hQZxF2gzEsAAAAC/pixel-bonfire-pixel-fire.gif" alt="Campfire"></img>
          <Main/>
        </>}
      {/* {<div style={{background:"white", width:"1000px"}}>
        <audio id='audio' src='crackling-fire-14759.mp3' autoPlay loop>
          <svg></svg>
        </audio>
      </div>} */}
    </div>
  )
}

export default App
