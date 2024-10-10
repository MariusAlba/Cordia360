import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Produ from './pages/produ';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import CaseStudies from './pages/caseStudies';
import Podcast from './pages/podcasts';
import OurGlobalCommunity from './pages/ourGlobalCommunity';
import DieticianRegistraionForm from './pages/dieticianRegistraionForm';


// const root = ReactDOM.createRoot(
    
//     <React.StrictMode>       
//         <BrowserRouter>         
//         <Routes>           
//             <Route path="/" element={ <App /> }>           
//             </Route>         
//         </Routes>
//         </BrowserRouter>    
//         </React.StrictMode>,
    
//     document.getElementById('root')
// );




// ReactDOM.createRoot(     
//     <React.StrictMode>       
//         <BrowserRouter>         
//         <Routes>           
//             <Route path="/" element={ <App /> }>           
//             </Route>         
//         </Routes>
//         </BrowserRouter>    
//         </React.StrictMode>,    
//     document.getElementById('root')   
// );
// ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={ <App /> }>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div> 
//     <BrowserRouter>
//      <App />
//     </BrowserRouter>
// </div>
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path="/produ" element={<Produ />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/caseStudies" element={<CaseStudies />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/dieticianRegistraionForm" element={<DieticianRegistraionForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
