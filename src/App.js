import React from 'react';
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
   <Contact name= 'Maurice HARPER' avatar= "https://randomuser.me/api/portraits/men/73.jpg" online/>
   <Contact name= 'Bonnie Sullivan' avatar= "https://randomuser.me/api/portraits/women/60.jpg"/>
   <Contact name= 'Monica Fowler' avatar= "https://randomuser.me/api/portraits/women/44.jpg" online/>
    </div>
  );
}

export default App;
