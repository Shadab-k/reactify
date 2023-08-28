import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      //  console.log("UpperCase was clicked " +text)
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick=()=>{
        //  console.log("UpperCase was clicked " +text)
          let newtext=text.toLowerCase();
          setText(newtext)
          props.showAlert("Converter to lowercase", "success")

      }
      const handleCopyText=()=>{
        //  console.log("UpperCase was clicked " +text)
    
          var text = document.getElementById("myBox")
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("Copied to Clipboard", "success")


      }
      const handleClearExtraSpacesText=()=>{
        //  console.log("UpperCase was clicked " +text)
          let newtext = text.split(/[ ]+/);
          setText(newtext.join(" "))
          props.showAlert("Extra Spaces Cleared", "success")

      }

    const handleOnChange = (event)=>{
       // console.log("Clicked on handle on Change")
        setText(event.target.value)
    }

    const handleClearText=()=>{
       let newtext="";
       setText(newtext)
       props.showAlert("Text Cleared", "success")

    }

    /*const handleTextareaChange = (event) => {
        setText(event.target.value);
      };
*/
    const [text , setText] = useState("");
   // setText("Write Here: //");

   console.log(text)
  
    return (
        <>   
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}  </h1>
        <div className="form-floating">
            <textarea className="form-control my-3 " style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#042743', width: '70%', height: '70%'}} value={text} placeholder={props.placeholder}  /*<onChange={handleTextareaChange}*/ onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3"onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3"onClick={handleClearText}>Clear</button>
            <button className="btn btn-primary mx-3"onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-3"onClick={handleClearExtraSpacesText}>Clear Spaces</button>

            
        </div>
        <div className="container my-2 ">
            <h1>Your Text Summary </h1>
            <p>{text.trim().split(" ").filter(word => word !== '').length} words and {text.replace(/\s/g, '').trim().length} characters</p>
            <p>Preview Your Text :</p>
            <h6>{text}</h6>

        </div>
        </div>
        
        </>
    )
}
