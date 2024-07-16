import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(10);

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode(!darkMode);
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setDarkMode(!darkMode);
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" mode={mode} darkMode={darkMode} />} />
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" mode={mode} darkMode={darkMode} />} />
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" mode={mode} darkMode={darkMode} />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode} darkMode={darkMode} />} />
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" mode={mode} darkMode={darkMode} />} />
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" mode={mode} darkMode={darkMode} />} />
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" mode={mode} darkMode={darkMode} />} />
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" mode={mode} darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
