import React from 'react'
import './App.css'

import { useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const [img,setImg] = useState(false)
    const [open, setOpen] = useState('открыть')
    const change = () => {
    setImg(!img)
    setOpen(img ? 'открыть' : 'закрыть')
    }


    console.log(num);
  
  return (
    <>
    
    <div className="box">
      <button onClick={change}>{open} фото</button>
      {img &&  <img src="https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" alt="" />}
     
    </div>

     <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>


    <div className="box">
      <h4>{num}</h4>
      <button onClick={() => setNum(num + 1)}>добавить число</button>
      <button onClick={() => setNum(num - 1)}>уменьшить число</button>
      <button onClick={() => setNum(num * 2)}>удвоить число</button>
      <button onClick={() => setNum(num / 2)}>разделить число</button>
      <button onClick={() => setNum(num * 0)}>обнулить число</button>
    </div>

   
    </>
  )
}

export default App