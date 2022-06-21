import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"

const ShoppingList = () => {
    const categoryResult = plantList.map(plant => plant.category)
    const categories = [...new Set(categoryResult)]
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className="plant-list">
                {plantList.map((plant) => (
                    <li key={plant.id} className="plant-item">
                        {plant.name}
                        {plant.isBestSale ? <div className='sales'>Soldes</div> : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList