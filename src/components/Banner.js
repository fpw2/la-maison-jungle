import logo from '../assets/logo.png'
import '../styles/Banner.css'

const Banner = () => {
    const title = "La maison Jungle"
    return (
        <div className="banner">
            <img src={logo} className="logo" alt="La maison jungle"/>
            <h1 className = "title">{title}</h1>
        </div>
    )
}

export default Banner