// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Crud from './Crud';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Props from './Props';
import { useState } from 'react';
import Apifetch from './Apifetch';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/Crud" element={ <Crud/>} />
          <Route path="/props" element={<Props />}/>
          <Route path='/apifetch' element={<Apifetch/>}/>
        </Route>
      </Routes>
     </div>
    </div>
  );
}

export default App;
