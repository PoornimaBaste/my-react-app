import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" converted to Uppercase"," success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)//initially the text in the conatiner was not changing as value={text} but with event it is done
       
    }
    const handleLowClick=()=>{
        let newT=text.toLowerCase();
        setText(newT);
        props.showAlert(" converted to Lowercase","success");
    }
    const handleColor=()=>{
        let newColor="#"+Math.floor(Math.random()*16777215).toString(16);
        setTextColor(newColor);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
    }
    const handleCopy=()=>{
      //console.log("I am copy");
      //var text=document.getElementById("myBox");
     // text.select();
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      //text.setSelectionRange(0,9999);
      props.showAlert("Copied to Clipboard!","success");
    }
    const handleClearClick=()=>{
      let newText=' ';
      setText(newText);
      props.showAlert("Text Cleared!","sucsess");
    }
    const [text, setText] = useState('');//{/*important syntax*/// text is a state variable}
   // text="new Text"; {/*Wrong way to change the state */}
  //setText("new text");//correct way
    const[textColor,setTextColor]=useState("#000000");
    const isDarkMode = props.mode?.toLowerCase() === 'dark';
    const wordCount = text.trim().split(/\s+/).filter((word) => word.length !== 0).length;
  return (
    <>
    <div className='container' style={{color:isDarkMode?'white':'#042743'}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          {/*<label for="myBox" class="form-label">Example textarea</label>,in style 1 {} js ke liye aur dusra {} js objects ke liye*/}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color:textColor, backgroundColor:isDarkMode?'grey':'white'}} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleColor}>Change Color</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        
    </div>
    <div className="container my-3" style={{color:isDarkMode?'white':'#042743'}}>
        <h1 >Your text summary</h1>
        {/* <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008*wordCount).toFixed(2)} minutes to read</p> */}
        {/* OR */}
        <p>{text.split(/\s+/).filter((ele) => ele.length !== 0).length} words and {text.length} characters</p>
         <p>{0.008*text.split(" ").filter((ele) => ele.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
