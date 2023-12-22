import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './Explore.css'
import axios from 'axios'
import { Download } from "lucide-react"
import { saveAs } from 'file-saver'
import gearblack from '../_gif/gearblack.svg'
import geargold from '../_gif/geargold.svg'
function Explore() {
    const [array, setArray] = useState()
    const [originaldata, setOriginaldata] = useState()
    const [classbtn, setClassbtn] = useState("recent_btn")
    useEffect(() => {
        imagedisplay()

    }, [])


    const imagedisplay = async () => {
        await axios.get('https://stylepixai.onrender.com/images').then(res => {
            const reverseddata = res.data.slice().reverse()
            setArray(reverseddata)
            setOriginaldata(reverseddata)
            // console.log(res.data)
        })
    }

    const take_topdata = () => {
        setArray(obj => { return (obj.slice().sort(() => Math.random() - 0.8)) })
        setClassbtn("top_btn")
    }

    const take_recent_data = () => {
        setArray(originaldata)
        setClassbtn("recent_btn")
    }

    const downloadimage = (name, urldata) => {
        const imagename = name.replace(/ /g, '_')
        // console.log(imagename)
        // console.log(urldata)
        saveAs(urldata, `${imagename}.png`)
    }
    return (
        <div>
            <Navbar />
            <div className='mainexplore'>

                <div className='explore1'>
                    <h1>Explore</h1>
                </div>

                <div className='topnrecent'>
                    <div className={`btn_t ${classbtn}`}>
                        <button onClick={take_topdata}>Top</button>
                    </div>
                    <div className={`btn_r ${classbtn}`}>
                        <button onClick={take_recent_data}>Recent</button>
                    </div>
                </div>


                <div className='allimages'>
                    {array ? array.map(obj => {
                        return (
                            <div key={obj._id}>
                                <div className='exploreimage'>

                                    <div className='expimg1'>

                                        <img src={obj.image_data} alt='nothing'></img>
                                    </div>

                                    <div className='expimg2'>

                                        <div className='expname'>
                                            <h1>{obj.iname}</h1>
                                        </div>

                                        <div className='expdown'>
                                            <button onClick={() => downloadimage(obj.iname, obj.image_data)}>Download<Download className='dwn' /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='expdown_sm'>
                                    <button onClick={() => downloadimage(obj.iname, obj.image_data)}>Download<Download className='dwn' /></button>
                                </div>

                            </div>
                        )
                    })
                        :
                        <div>
                            {/* took from generate without border .the css is arldy inbuilty come from generate.css*/}
                            <div className='image_loading'>
                                <div><h1>AI-crafted wonders loading. Your patience is valued...</h1></div>
                                <div className='loadingsvg '>
                                    <img src={gearblack}></img>
                                    <img src={geargold}></img>
                                </div>
                                <div className='loadingdivline'>
                                    <div className='loadingline'></div>
                                </div>
                            </div>
                        </div>}
                </div>

            </div>
        </div>
    )
}

export default Explore