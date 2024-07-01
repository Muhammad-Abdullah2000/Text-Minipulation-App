import React, { useState } from "react";
import "./text.css";


function Input(props) {
  const Upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    console.log("UpperCase button is clicked");
  };
  const Lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    console.log("LowerCase button is clicked");
  };
  const change = (event) => {
    setText(event.target.value);
  };
  const Erased = ()=>{
    let newtext = '';
    setText(newtext);
    console.log("Erased button is clicked");
  }

  const [text, setText] = useState("");


 return (
    <>
 
      <div className="text" >
      <h1 id="heading" style={{color: props.mode==='dark'?'white':'black'}}>{props.title}</h1>
        <input type="Textarea" style={{backgroundColor: props.mode==='dark'?'gray':'white'}}  className="textarea" id="floatingInput" placeholder="Write your text here" value={text} onChange={change}  />
      </div>

      <button type="button" className="btn-btn-primary1" onClick={Upper}>
        Get Upper case
      </button>
      <button type="button" className="btn-btn-primary2" onClick={Lower}>
        Get Lower case
      </button>
      <button type="button" className="btn-btn-primary3" onClick={Erased}>
        Get erased
      </button>
      <p id="length" style={{color: props.mode==='dark'?'white':'black'}}>{text.length} characters, {text.split(" ").length} words</p>
      <h3 id="summary" style={{color: props.mode==='dark'?'white':'black'}}>Your text Summary</h3>
      <p id="result" style={{color: props.mode==='dark'?'white':'black'}}>{text}</p>
    </>
  );
}

export default Input;
