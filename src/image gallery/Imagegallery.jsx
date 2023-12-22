import React from 'react'
import a1 from '../image gallery/images/a1.jpg'
import a2 from '../image gallery/images/a2.jpg'
import a3 from '../image gallery/images/a3.jpg'
import a4 from '../image gallery/images/a4.jpg'
import a5 from '../image gallery/images/a5.jpg'
import a6 from '../image gallery/images/a6.jpg'
import a7 from '../image gallery/images/a7.png'
import a8 from '../image gallery/images/a8.jpg'
import a9 from '../image gallery/images/a9.png'
import './imagegallery.css'
import { ScanSearch } from 'lucide-react'
import overlay from '../image gallery/overlay.png'
import {useNavigate} from "react-router-dom"
function Imagegallery() {
  const nav=useNavigate()
  const gotoexplore = () => {
    nav('/explore')
  }


  return (
    <div className='maingallery'>
{/* This is for big screen ,find some gud ideas in the future maahn */}
      <div className='fullarea bigscreen'>
        <div className='area'>

          <img src={a7}></img>
          <img src={a1}></img>
          <img src={a2}></img>

        </div>

        <div className='area'>

          <img src={a4}></img>
          <img src={a5}></img>
          <img src={a9}></img>
          <img src={a1}></img>

        </div>

        <div className='area'>

          <img src={a3}></img>
          <img src={a8}></img>
          <img src={a6}></img>
          <img src={a5}></img>

        </div>

        <div className='overlay'>
          <img src={overlay}></img>
        </div>
        <div className='overlay half'>
          <img src={overlay}></img>
        </div>


        <div className='scansearch'>
          <button onClick={gotoexplore}><ScanSearch className='scan' />Go to Explore</button>
        </div>

      </div>

{/* this is only for small screen */}
      <div className='fullarea forsmallscrn'>
        <div className='area'>

          <img src={a7}></img>
          <img src={a1}></img>
          <img src={a2}></img>
          <img src={a4}></img>
          <img src={a5}></img>

        </div>

        <div className='area'>

          <img src={a9}></img>
          <img src={a1}></img>
          <img src={a3}></img>
          <img src={a8}></img>
          <img src={a6}></img>
          <img src={a5}></img>

        </div>


        <div className='overlay'>
          <img src={overlay}></img>
        </div>
        <div className='overlay half'>
          <img src={overlay}></img>
        </div>


        <div className='scansearch'>
          <button onClick={gotoexplore}><ScanSearch className='scan' />Go to Explore</button>
        </div>

      </div>










    </div>
  )
}

export default Imagegallery