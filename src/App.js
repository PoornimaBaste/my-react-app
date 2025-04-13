
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link 
} from "react-router-dom";

function App() {
  
  const[mode,setMode]=useState(`light`);//whether darkmode is enabled or not
  const[alert,setAlert]=useState(null);//alert ek object hai

  const showAlert=(message,type)=>{//type 4 types... visit bootstrap
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
      },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has be activated","success")
      // document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },1000);
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has be activated","success")
      // document.title='TextUtils - Light Mode'
    }
    console.log("Mode after toggle:", mode);
  };
  return (
    <>
     {/* <Router> */}
    {/* <Navbar title="TextUtils" aboutText="Aboutus"/> */}
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >my-3 margin */}
    {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> */}
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mod={mode}/>
          <About About={About}/> */}
    {/* </Routes> */}
    {/* </div> */}
    {/* </Router> */}
   
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route
          exact  path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
   
    </>
  );
}

export default App;
