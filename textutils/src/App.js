import './App.css';
import React,{useState} from "react";
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"


  function App() {
    const [mode, setMode] = useState('light'); // Wether Dark mode enabled or not
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark mode has been enabled","sucess")
        document.title = 'TextUtils - Dark Mode';
      }
 
      else{
        setMode('light');
        document.body.style.backgroundColor = '#ffffff';
        showAlert("Light mode has been enabled", "success")
        
      }
    }
  return(
  <>
{/* <Navbar  />   */}
{/* <Navbar  title="TextUtils2" aboutText="About TextUtils"/>   */}
<Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform heading="Enter the text to analyze below" showAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router>


{/* <About/> */}




  </>
    
  );
}

export default App;



