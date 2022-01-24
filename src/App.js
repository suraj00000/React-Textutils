import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#000e22';
      showAlert("Dark mode hasbeen enabled","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode hasbeen enabled","success");
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading="Enter Text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About></About> */}

      </div>

    </>

  );
}

export default App;
