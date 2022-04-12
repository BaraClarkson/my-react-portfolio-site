import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react'
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route  path='/Home'  element={<Home/>} />
      </Routes>
    </Router>
    
  );
}

export default App

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path='/' element = {<Home />} />
//         <Route path='/Login' element = {<Login/>} />
//         <Route path='/Cart' element = {<Cart/>} />
//         <Route path='/Product' element = {<Product/>} />
//         <Route path='/ProductList' element = {<ProductList/>} />
//         <Route path='/Register' element = {<Register/>} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;