import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import './index.css';

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Checkout from "./pages/Checkout.jsx";
import ShippingAndReturns from "./pages/policyPages/ShippingAndReturns.jsx";
import PrivacyPolicy from "./pages/policyPages/PrivacyPolicy.jsx";
import FAQ from "./pages/policyPages/FAQ.jsx"

import ScrollToAnchor from "./components/ScrollToAnchor/ScrollToAnchor.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import CartSideBar from "./components/CartSideBar/CartSideBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Checkout") {
      setCartOpen(false);
    }
  }, [location.pathname]);

  const [candles, setCandles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCandles() {
      const snapshot = await getDocs(collection(db, "listings"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCandles(data);
      setLoading(false);
    }
    fetchCandles();
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id == product.id);
      if (exists) {
        return prev.map(item => 
          item.id == product.id ? { ...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, {...product, quantity:1}];
    });
  };

  const toggleQuantity = (id, delta) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity + delta};
        }
        return item;
      });
      return updatedCart.filter(item => item.quantity > 0);
    });
  }

  const total = cart.reduce((accumulate, item) => {
    return accumulate + (item.price * item.quantity);
  }, 0);

  const [filter, setFilter] = useState("all");

  const changeFilter = (newCollection) => {
    setFilter(newCollection);
  };

  return(
    <div>
        <ScrollToAnchor />
        <NavBar onCartClick={toggleCart}
                cart={cart}
                location={location}/>
        <CartSideBar toggleCart={toggleCart}
                      isOpen={cartOpen} 
                      cart={cart} 
                      toggleQuantity={toggleQuantity}
                      total={total}/>

        <Routes>
          <Route path="/" element={<Home  changeFilter={changeFilter}
                                          location={location}/>}/>
          <Route path="/Shop" element={<Shop  candles={candles} 
                                              loading={loading} 
                                              addToCart={addToCart} 
                                              filter={filter}
                                              changeFilter={changeFilter}/>}/>
          <Route path="/Checkout" element={<Checkout  total={total}
                                                      cart={cart}
                                                      toggleQuantity={toggleQuantity}
                                                      setCart={setCart}/>}/>
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/ShippingAndReturns" element={<ShippingAndReturns />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App