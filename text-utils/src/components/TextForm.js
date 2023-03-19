import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpperClick=()=>{
        // console.log("Uppercase was clicked "+ text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLowerClick=()=>{

       let newText=text.toLowerCase()
        setText(newText)

    }

    const handleClearClick=()=>{

      let newText=""
       setText(newText)

   }

    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] =useState('');
  return (
    <>
<div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpperClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container my-3" >
  <h3>Your text summary</h3>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <p>{text.split(" ").length*0.008*60} seconds of reading time</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
