import { useState } from "react"
import '../styles/Footer.css'

const Footer = () => {
    // init
    const [inputValue, setInputValue] = useState("")

    const handleInputEmail = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

    return (
        <div className="footer">
            <div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<label className='footer-elem'>Laissez-nous votre mail :</label>
            <input 
                placeholder="Entrez votre Email" 
                value={inputValue} 
                onChange={handleInputEmail}
                onBlur={handleBlur}
            />
          
        </div>
    )
}

export default Footer