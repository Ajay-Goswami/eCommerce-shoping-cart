// import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navigation from './components/navigation/Navigation';
import Products from './pages/product/Products';
import Cart from './pages/cart/Cart';

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
