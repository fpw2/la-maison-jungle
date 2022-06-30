/**
 * échelle de soins
 */
// const CareScale = (props) => { // props = {scaleValue: 1,2 ou 3}
//     const scaleValue = props.scaleValue // pour accèder à ma valeur 1,2 ou 3
//     on a donc scaleValue = 1,2 ou 3

const CareScale = ({scaleValue, careType}) => { // déclarer ici avec {} permet d'accéder directement à ma valeur scaleValue.scaleValue pareil careType.careType => light ou water
    const range = [1,2,3] // je créé un tableau de 1 à 3 pour comparé à mon paramètre dans datas qui va de 1 à 3
    console.log(careType)
    let scaleType = careType === "light" ? "😅" : "💧"

    return (
        <div>
            {range.forEach((rangeElt) => // je boucle 1,2,3 1,2,3 1,2,3 etc..
                // ex : scaleValue = 2 il est >= 2 fois donc sera affiché deux soleils
                scaleValue >= rangeElt ? <span key={String(rangeElt)}>{scaleType}</span> : null 
            )}
        </div>
    )
}


export default CareScale