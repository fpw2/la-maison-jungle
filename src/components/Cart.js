import '../styles/Cart.css'
import { useState, useEffect } from 'react'

const Cart = ({cart, updateCart}) => {
    // const [cart, updateCart] = useState(0) // doit être initialisé sinon undefined => cart vaut 0
    const [isOpen, setIsOpen] = useState(true) // permet d'avoir deux affichages pour deux états(ouvrir,fermer le panier)
    // [true, f]
    
    //console.log(cart) // [{name: string, price: int, amount: int}]
    const total = cart.reduce((total, current) => {
        // current : {name: string, price: int, amount: int}
        return total + current.amount * current.price
    },0)

    useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])
    /**
     * se déclenche après le rendu de mon total
     * deuxième paramètre : []
     */
    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }, [total, activeCategory])

    return isOpen ? (
        <div className="cart">
            <button
                className='cart-toggle-button' 
                onClick={() => setIsOpen(false)}> 
                Fermer 
            </button> 
            {cart.length > 0 ? 
            (       
                <div> 
                    <h1>Panier</h1>
                    <ul>
                        {/* cart.map({name} =>) me permet directement d'accéder à la value .name */}
                        {/* équivaut à cart.map(plant.name =>)*/}
                        {cart.map(({ name, price, amount }, index) => ( 
                                <div key={`${name}-${index}`}>{name} {price}€ x {amount} </div>                 
                            ))}
                    </ul>

                    <h2>Total : {total}€</h2>
                    <button
                        className='cart-button'
                        onClick={() => updateCart([])}>
                        Vider le panier
                    </button>
                </div>
            ) :
            (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className="cart-closed">
            <button 
                className='cart-toggle-button'
                onClick={() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart