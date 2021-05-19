import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Laissez-nous votre mail :');
    
    function handleBlur() {
        const isArobase = inputValue.includes('@');
        !isArobase && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                <input type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onBlur={handleBlur} />
            </div>
		</footer>
	)
}

export default Footer