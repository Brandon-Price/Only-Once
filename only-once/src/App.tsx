import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {

  const user: string = 'hasCookie';

  // Logic that will roughly be used to handle the some of the pages elements
  useEffect(() => {
    if(user == 'hasCookie'){
      const link = document.createElement('link');
      link.id = 'svg1';
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = '/alt.svg';
      document.head.appendChild(link);

      document.title = 'Closed, Sorry';
    } 
    else {
      const link = document.createElement('link');
      link.id = 'svg1';
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = '/backpack.svg';
      document.head.appendChild(link);

      document.title = 'Welcome';
    }
  }, [user])

  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default App
