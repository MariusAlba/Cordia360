import './App.css';
import ColorSchemesExample from './components/navBar';
// import FormFileExample from './components/form';
import form , { FormFileExample, InputReadOnlyExample } from './components/form';
import Container from 'react-bootstrap/esm/Container';
import AccordionModul from './components/jumbotron';
import AboutTop from './components/AboutTop';
import BasicExample from './components/navBar';
import Footerr from './components/footerr';
import ListExample from './components/Foot';
import Slider from './components/Slider';
import HowItWorks from './components/HowItWorksLevel';
import WhatWeOffer from './components/WhatWeOffer';
import { HashRouter, Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Produ from './pages/produ';



import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/home">home </NavLink>
        </li>
        <li>
          <NavLink to="/produ">Produ </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default App;

