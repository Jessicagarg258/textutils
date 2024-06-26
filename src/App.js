import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
         setAlert({
          msg:message,
          type:type,
         })
         setTimeout(()=>{
          setAlert(null);

         },1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
      {
         setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
        document.title='TextUtils-Dark Mode';
        setInterval(() => {
          document.title='TextUtils is amazing mode';
        }, 2000);
        
        setInterval(()=>{
          document.title='Install TextUtils Now';

        },1500);
      }
      else{
         setMode('light');
         document.body.style.backgroundColor='white';
         showAlert("light mode has been enabled","success");
         document.title='TextUtils-Light Mode';
      }
   
  }
  return (
    <>
  <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  {/* <Router>
        <Navbar title='TextUtils' aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route eaxct path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
       <Alert alert={alert} />
       <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
      </div>
  </>
  );
}

export default App;
