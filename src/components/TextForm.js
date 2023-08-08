import React ,{useState}from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
       //n console.log("uppercase was clicked : "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick =() =>{
      //n console.log("uppercase was clicked : "+text);
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase!","success");
   }
   const handleClClick =() =>{
    //n console.log("uppercase was clicked : "+text);
     let newText = '';
     setText(newText);
     props.showAlert("Iteam has been Cleared!","success");
 }
 const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard!","success");
 }
 const handleExtraSpace = () => {
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra space has been removed","success");
 }
 
 const handleOnChange =(event) =>{
        //console.log("On change");
        setText(event.target.value);
    }
const [text,setText] =useState('');

  return (
    <>
<div  className="container"  style={{color:props.mode==='dark'?'white':'#081c34'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" onChange={handleOnChange} value ={text} id="myBox" style={{backgroundColor:props.mode==='dark'?'#081c34':'white',color:props.mode==='dark'?'white':'#081c34'}} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear Text</button>
    <button className="btn btn-success mx-1 my-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-secondary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#081c34'}} >
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
  <p>{0.008 * text.split(" ").length} <b>Minutes</b> take to Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"You have to Enter something in the above TextBox."}</p>
</div>
</>
  )
}
