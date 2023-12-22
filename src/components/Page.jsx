import React from 'react'
import { ScanSearch } from "lucide-react"
import { useNavigate } from "react-router-dom"
import './Page.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Imagegallery from '../image gallery/Imagegallery'
function Page() {
    const nav=useNavigate()
    
    const gotogenerate=()=>{
        nav('/generate')
    }
    return (
        <div className='fullpage'>

            
            <Navbar />
           

            <div className='mid-part'>



                <div className='mid-part-inside'> 
                    <h1>The world's most powerful AI photo generation engine.</h1>
                    <h1>What will you create?</h1>
                    <button onClick={gotogenerate}><ScanSearch className='scan'/>GENERATE</button>
                </div>
                
            </div>

            <Imagegallery />
            <Footer />
        </div>
    )
}

export default Page