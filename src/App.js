
import './App.css';
import Header from './components/Layout/Header';
import { Fragment, useState } from 'react';
import Drinks from './components/Drinks/Drinks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartItemShown, setCartItemShown] = useState(false)
  
  const showCartHandler = () => {
    setCartItemShown(true)
  } 

  const hideCartHandler = () => {
    setCartItemShown(false)
  } 
 
  return (
    <CartProvider>
      {cartItemShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Drinks />
      </main>
    </CartProvider>
  )
}

export default App;
