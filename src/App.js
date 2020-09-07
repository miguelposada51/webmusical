import React from "react";
import Particles from 'react-particles-js'; 

import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">  
     <MainComponent />    
      {/* <Particles
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />  */}
    </div>
  );
}

export default App;
