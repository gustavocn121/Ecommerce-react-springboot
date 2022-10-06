import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import {Products, Navbar, Cart, Checkout} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(new Map())
  const [cartSize, setCartSize] = useState(0)

  const fetchProducts = async () =>{
    const { data } = await commerce.products.list();    
    setProducts(data)
    console.log(cartItems)
  }

  const handleAddToCart = (productId, quantity) => {
    const cart = cartItems;
    const newQuantity = (cartItems.get(productId) || 0) + quantity
    cart.set(productId, newQuantity)
    setCartItems(cart);
    console.log(cartItems)
    updateCartSize()
  }

  const updateCartSize= ()=>{
    var s =0
    cartItems.forEach(value => {
      s += value;
    });
    setCartSize(s)
  }

  useEffect(()=>{
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App" >
        <Navbar cartSize={cartSize}/>
        <Routes>
          <Route path='/' 
          element={<Products products={products} onAddToCart={handleAddToCart}/>}
          >
          </Route>
          <Route path='/cart'
            element={<Cart cart={cartItems} products={products} size={cartSize}/>}
            >
          </Route>
          <Route path='/checkout'
            element={<Checkout cart={cartItems} products={products}/>}
          ></Route>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
