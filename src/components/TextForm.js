import React,{useState}from 'react'



export default function TextForm(props) {
   const handleUpClick=()=>{
     console.log("uppercase was clicked");
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to uppercase","success");
   }
   const handleLoClick=()=>{
    console.log("lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }

  const handleClearClick=()=>{
    let newtext="";
    setText(newtext)
  }
   const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
    
   }
   

   const handleCopy=()=>{
       const text=document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
   }



    const[text,setText]=useState("Enter text here");
    // setText("hello i am jazz");
  return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
  <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
  <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
  </div>

  <div className="container" my-3='true' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
   
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in textbox to preview"}</p>

  </div>
    </>
   
  )
}
