import React from 'react'
import './App.css'
import Page from './components/Page'
import { Route,Routes} from 'react-router-dom'
import Generate from './_routers/Generate'
import Check from './Check'
import Explore from './_routers/Explore'


function App() {

  return (
    <div className='All'>

      <Routes>
        <Route path='/generate' element={<Generate/>}></Route>
        <Route path='/' element={<Page/>}></Route>
        <Route path='/check' element={<Check />}></Route>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
 
    </div>
  )
}

export default App