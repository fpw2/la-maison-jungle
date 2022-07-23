import '../styles/Banner.css'

// dans App.js dans la balise Banner je laisse une place pour les balises enfants(children)
// les styles css seront aussi appliqué dans App quand j'import ici 
const Banner = ({children}) => { 
    return (
        <div className="banner">{children}</div>
    )
}

export default Banner