import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "Success")

    }
    const handleLowClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowecase" , "Success")

    }
    const handleClearClick = ()=>{
        console.log("Clear text was clicked")
        let newText = " "
        setText(newText)
        props.showAlert("Text Cleard" , "Success")

    }
    const handleonChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed" , "Success")

    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied" , "Success")

    }

    const [text, setText] = useState('Enter text here'); 
    // text = "new text";     // Worng way to change the state
    // settext("new text");     // Correct way to change the state
    return (
        <>
        <div>
            <h1 style={{ backgroundColor: props.mode=== 'dark'?'light':'dark'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode=== 'dark'?'light':'dark'}} id="myBox" rows="3"></textarea> 
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear text</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Handle Extra Spaces</button>  
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </> 
    )
}

