import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Upper case is clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick =()=>{        
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log("Change");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
    // text = "New text"; // Wrong way to change the text
    // setText("");// correct way to cghange the text
    return (
        <>
        <div className='container'>            
            <h1>{props.heading}</h1>
            <div className="mb-3">             
                <textarea className="form-control" placeholder='Enter Text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>lowercase</button>
        </div>
        <div className="container my-4">
            <h1>Your text summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read </p>
            <h3> Preview </h3>
            <p>{text}</p>
        </div>
        </>
    )
}
