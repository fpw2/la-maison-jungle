import '../styles/App.css'
import logo from '../assets/logo.png' // je nomme mon image logo
import Banner from './Banner.js'
import Cart from './Cart';
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState, useEffect } from 'react';


function App() {
  // pour utiliser mon état dans plusieurs composants
  // je l'initialise ici pour ainsi l'utliser
  // dans mon cart et ShoppingList qui sont dans une même div !
  const savedCart = localStorage.getItem('cart') // je récupere ce que j'ai dans mon panier
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []) // tableau d'objet pour ajouter des plantes avec les propriétés(prix, category, name, etc...)
  //console.log(cart) // [{name: string, price: int, amount: int}] j'ai remonté les infos de mon enfant
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)) // je stocke mes données
  },[cart]) // se déclenche une fois à chaque utlisation de cart // par défaut se déclenche à chaque rendu au début et à la fin
  
  return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='logo' />
				<h1 className='title'>La maison jungle</h1>
			</Banner>
      <div className='layout-basket'>
        {/* je mets les props en parametre de mes enfants*/}
        <Cart cart={cart} updateCart={updateCart}/> 
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
			<Footer />
		</div>
	)
}

export default App

