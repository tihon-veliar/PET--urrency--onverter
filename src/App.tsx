// import { useState } from 'react'
import Slide from './components/Slides'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Slide count={1}  > </Slide>
        <Slide count={2} ></Slide>
        <Slide count={3} ></Slide>
      </div>
      
    </>
  )
}

export default App
5