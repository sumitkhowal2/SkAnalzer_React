import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');  // default false mode
  // const [labelText,setLabelText] = useState("Enable DarkMode");
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type) => {
     setAlert({
      msg: message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
  }
   const toggleMode = () =>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#081c34';
    // setLabelText("Enable LighMode");
    showAlert("Dark mode has been enabled" ,"success");
    document.title='SkAnalyzer-Dark Mode';
    setInterval(()=>{

     document.title='SkAnalyzer is Amazing Site';
    },2000);
   }
   
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    // setLabelText("Enable DarkMode");
    showAlert("Light mode has been enabled" ,"success");
    document.title='SkAnalyzer-Light Mode';
   }
   
   }
  return (
    <>
    {/* <Router> */}
   
    <Navbar title="SkAnalazer" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
{/* new update switch to routes */}
    {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route xact path="/" element={ <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} />
    </Routes> */}
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
          </Route>
      </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
