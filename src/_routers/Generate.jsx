import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Generate.css'
import { Search, Download } from 'lucide-react'
import axios from 'axios'
import { saveAs } from 'file-saver'
import gearblack from '../_gif/gearblack.svg'
import geargold from '../_gif/geargold.svg'
import { ScanSearch } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Generate() {
    const [question, setQuestion] = useState()
    const [output_image, setOutput_image] = useState()
    const [valuecheck, setValuecheck] = useState(false)
    const [loadingtime, setLoadingtime] = useState(false)
    const nav = useNavigate()

    const addtext = (e) => {
        setQuestion(e.target.value)
        if (e.target.value) {
            setValuecheck(false)
        }
    }

    const gotoexplore = () => {
        nav('/explore')
    }

    const send_question = async () => {
        if (question == null || question == "") {
            setValuecheck(true)
        }

        else {
            setValuecheck(false)
            setOutput_image(null)
            setLoadingtime(true)
            // console.log("there is value")
            await axios.post('https://stylepixai.onrender.com/saveimage', { question }).then(response => {
                // console.log(response.data)
                setOutput_image(response.data)
                setLoadingtime(false)
            })

        }

        // for test purpose else

        // else {
        //     console.log(loadingtime)
        //     setLoadingtime(true)
        //     setOutput_image(null)
        //     setTimeout(() => {
        //         setOutput_image('https://replicate.delivery/pbxt/y4Uh8wbym35MGVqbk72cGbOG37k0KoPHDjyEyigjw6yPUOhE/out-0.png')
        //         setLoadingtime(false)
        //     }, 4000)

        // }


    }

    const download_image = () => {
        const words = question.replace(/ /g, '_')
        // console.log(output_image, words)
        if (words.length > 0) {

            saveAs(output_image[0], words)
        }
        else {
            saveAs(output_image[0], 'Newimage.png')
        }
    }

    return (
        <div>
            <Navbar />

            <div className='textsearch'>
                <input type='text' placeholder='Share your thoughts and let your creativity shine!'
                    onChange={e => addtext(e)} />
                <button onClick={send_question} ><Search className='searchicon' /></button>
            </div>

            {valuecheck ?

                <div className='valuecheck'>
                    <label>You should write something</label>

                </div> : <></>
            }

            {/* "output_image"*/}
            {output_image ?
                <div className='imagedisplay'>
                    <div className='image_border'>

                        <img src={output_image} alt='NO IMAGE TO DISPLAY'></img>
                    </div>
                    <button className='imagedown' onClick={download_image}> Download<Download className='downloadicon' /></button>

                    <div className='scansearch_generate'>
                        <div className='scansearch_div'>
                            <button onClick={gotoexplore}><ScanSearch className='scan' />Go to Explore</button>
                        </div>
                    </div>

                </div>
                :
                <div >
                    {loadingtime == true ?
                        <div className='loadingtime'>
                            <div className='loading_border'>
                                <div><h1>Your image is on a journey to perfection. Almost there!</h1></div>
                                <div className='loadingsvg'>
                                    <img src={gearblack}></img>
                                    <img src={geargold}></img>
                                </div>
                                <div className='loadingdivline'>
                                    <div className='loadingline'></div>
                                </div>
                            </div>
                        </div>
                        :
                        <></>

                    }
                </div>
            }

        </div>
    )
}

export default Generate