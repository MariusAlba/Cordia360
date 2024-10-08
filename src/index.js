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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
