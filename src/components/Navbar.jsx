import React, { useState } from 'react'
import { Search, Github, Menu } from "lucide-react"
import logo from '../images/logo2.png'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
function Navbar() {
  const nav = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  const gotoexplore = () => {
    nav('/explore')
  }
  const gotohomepage = () => {
    nav('/')
  }
  const gotogithub = () => {
    window.open('https://github.com/sirilca', '_blank')
  }
  const imagegenerate = () => {
    nav('/generate')
  }

  const sidebarmove = () => {
    setSidebar(!sidebar)
  }
  const home = () => {
    nav('/')
  }
  return (
    <div>
      <div className='header'>

        <div className='first_part'>

          <div className='logo' onClick={gotohomepage}><img src={logo}></img></div>
          {/* <div className='name' onClick={gotohomepage} ><h1>GenAI</h1></div> */}
          <div className='explore' onClick={gotoexplore}><Search className='search' /><h2>Explore</h2></div>
          <div className='github' onClick={gotogithub}><span>Search on Github!</span><Github size={20} color='rgba(143, 146, 160, 0.938)' /></div>


        </div>

        <div onClick={gotogithub} className='projects'><button>Projects</button></div>

      </div>

      <div className='header_sm'>

        <Menu className='menu' onClick={sidebarmove} />
       
        <div className='head_sm'>
          
          <div className='logo' onClick={gotohomepage}><img src={logo}></img></div>
          {/* <div className='name' onClick={gotohomepage} ><h1>GenAI</h1></div> */}
        
        </div>

      </div>


      <div className={sidebar == true ? 'sidebar_sm' : "disable_sb"}>

        <Menu color='rgb(4,11,53)' className='menu' onClick={sidebarmove} />
        
        <div className="sidebar_icons">
          <div onClick={home}><span>Home</span></div>
          <div className='explore_sm' onClick={gotoexplore}><span>Explore</span></div>
          <div onClick={imagegenerate}><span>Generate Image</span></div>
          <div className='github_sm' onClick={gotogithub}><span>Github!</span><Github className='github_smm' size={15} style={{ marginLeft: "1.2vw" }} color='rgba(143, 146, 160, 0.938)' /></div>
          <div onClick={gotogithub} className='projects_sm'><span>Projects</span></div>
        
        </div>
      
      </div>
    </div>
  )
}

export default Navbar