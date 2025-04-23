import Banner from "./Banner";
import Cart from "./Cart";
import logo from '../assets/logo.png'
import ShoppingList from "./ShoppingList";
//import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import '../styles/Layout.css';
import { useState, useEffect } from 'react';

function App() {

    const savedCart = localStorage.getItem('cart')
	  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	  useEffect(() => {
		  localStorage.setItem('cart', JSON.stringify(cart))
	  }, [cart])
    
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )


  
  /*return (<div><Banner />
               <Cart /> 
               <ShoppingList />
               {<QuestionForm />
               <Footer />
          </div>)*/
          
} 


export default App;