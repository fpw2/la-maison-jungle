import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

/**
 * échelle de soins
 */
// const CareScale = (props) => { // props = {scaleValue: 1,2 ou 3}
//     const scaleValue = props.scaleValue // pour accèder à ma valeur 1,2 ou 3
//     on a donc scaleValue = 1,2 ou 3

const quantityLabel = (range, careType) => {
    let type
    const label = ["peu", "modérément", "beaucoup"]

    if(careType === "light"){
        type ="de lumière"
    } else if(careType === "water"){
        type = "d'arrosage"
    }
    alert (`Cette plante requiert ${label[range-1]} ${type}`)  
} 



const CareScale = ({scaleValue, careType}) => { // déclarer ici avec {} permet d'accéder directement à ma valeur scaleValue.scaleValue pareil careType.careType => light ou water
    const range = [1,2,3] // je créé un tableau de 1 à 3 pour comparé à mon paramètre dans datas qui va de 1 à 3
    let scaleType
    if(careType === "light"){
        scaleType = <img src={Sun} alt='sun-icon' />
    }             
    else {
        scaleType = <img src={Water} alt='water-icon' />
    }
        
    
    return (
        <div onClick={() => quantityLabel(scaleValue, careType)}>
            

            {range.map((rangeElt) => // je boucle 1,2,3 1,2,3 1,2,3 etc..
                // ex : scaleValue = 2 il est >= 2 fois donc sera affiché deux soleils
                scaleValue >= rangeElt ? <span className={careType} key={String(rangeElt)}>{scaleType}</span> : null 
            )}
        </div>
    )
}

export default CareScale