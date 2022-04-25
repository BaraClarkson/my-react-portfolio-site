import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
// import Toggle from './components/toggle/Toggle';

const App = () => {
 
  return (
    <div style={{backgroundColor:'grey'}}>
      <Intro />
      <About/>
      <ProductList />
      <Contact />
    </div>
    
  );
}

export default App

