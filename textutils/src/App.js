
import React, { useState } from 'react';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import './App.css';
import Alert from './componenets/Alert';
import About from './componenets/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
function App() {

  const [mode, setMode] = useState('light');// Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Utils" home="Home" about="About US" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={<About />} />

            <Route exact path="/home" element={
              <TextForm heading="Enter the text here to analyze:" mode={mode} showAlert={showAlert} placeholder="Enter your text here..." />} />

          </Routes>
        </div>
      </Router>

    </>
  );

}

export default App;
