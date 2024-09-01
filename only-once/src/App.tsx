import { useState } from 'react'
import './styles/App.css'

function App() {

  const user: string = 'yes';

  return (
    <div>
      {/* Checks to see if the user has a cookie, if they do change the svg */}
      (user === "no" ? (<link id="svg1" rel="icon" type="image/svg+xml" href="/backpack.svg" />))
      <p>Hello</p>
    </div>
  )
}

export default App
