import '../styles/Cart.css'
import { useState, useEffect } from 'react'

//premier methode sans le partage de state
/*function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    //const ivyPrice = 10
    //const flowerPrice = 15


    return isOpen ? (
        <div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>

            <div>
                <button onClick={() => updateCart(0)}>Vider le Panier</button>
            </div>
		
        
        {/*<ul>
        <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {ivyPrice}€</li>
         <li>Fleurs : {flowerPrice}€</li>
        </ul>
          Total : {monsteraPrice + ivyPrice + flowerPrice }€}

          </div>
          ) : (
            <div className='lmj-cart-closed'>
			    <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			    >   
				Ouvrir le Panier
			    </button>
		</div>
          )
}

export default Cart 
*/   

//avec le partage de state

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
    //alert(`J'aurai ${total}€ à payer 💸`)    
    /*useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total])*/
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                    {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart