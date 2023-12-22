import axios from 'axios'
import React, { useState } from 'react'
import {saveAs} from 'file-saver'
function Check() {
  const [data,setData]=useState()
  const [fdata,setFdata] =useState()
  const rdata= async ()=>{
    // const datas= await fetch('https://replicate.delivery/pbxt/e1utUknUruRXT6BEJZXlAEHFkC3r7mk7Gksy8s4JACSrFICJA/out-0.png')
    // const blob=datas.blob
    // console.log(blob)
    await axios.get('https://replicate.delivery/pbxt/e1utUknUruRXT6BEJZXlAEHFkC3r7mk7Gksy8s4JACSrFICJA/out-0.png',{
      responseType:"blob"
    }).then(res=>{
      const blob=res.data
      console.log(blob)
      setData(URL.createObjectURL(blob))
      const link = URL.createObjectURL(blob)
      console.log(link)
      saveAs()

    })


  }
  const rdatafromserver=async ()=>{
    await axios.post('http://localhost:5000/').then(res=>{
      setData(res.data)
      console.log(res.data)
      // saveAs(res.data,'foo.png')
    })
  }


  return (
    <div>
      {/* <img src={`data:image/jpeg;base64,${Buffer.from(data).toString('base64')}`} alt='displayaa'></img> */}
      {/* <img src={`data:image/jpeg;base64,${data}`} alt='nothunig'></img> */}
      <img src={data}></img>
      <button onClick={rdatafromserver}>Data</button>

    </div>
  )
}

export default Check