import PlantItem from "./PlantItem"
import Categories from "./Categories"
import "../styles/ShoppingList.css"
import { useState } from "react"
import { plantList } from "../datas/plantList"

const ShoppingList = ({cart, updateCart}) => {
    const categoryResult = plantList.map(plant => plant.category) // ['classique', 'classique', 'classique', 'classique', 'extérieur', 'extérieur', 'extérieur', 'plante grasse', 'plante grasse']
    const categories = [...new Set(categoryResult)] // ['classique', 'extérieur', 'plante grasse']
    
    const [activeCategory, setActiveCategory] = useState('')

    const addToCart = (name, price) => { // j'insère le nom et le prix
        const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
            console.log(currentPlantSaved)
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
    }

    return (
        <div className="shopping-list">
            <Categories
                categories={categories} // ['classique', 'extérieur', 'plante grasse']
                activeCategory={activeCategory} // ''
                setActiveCategory={setActiveCategory} // e.target.value
            />       
            <ul className="plant-list">
                {plantList.map(({ id, cover, name, water, light, price, category }) => // [tableau]
                    !activeCategory || activeCategory === category ? 
                    (
                        <div key={id}>
                            <PlantItem cover={cover} name={name} water={water} light={light} price={price}/>
                            <button onClick={() => addToCart(name, price,water)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList