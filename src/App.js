import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#000e22';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForm heading="Enter Text to analyze" mode={mode} />
        {/* <About></About> */}

      </div>

    </>

  );
}

export default App;
