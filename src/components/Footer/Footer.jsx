import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <img className='imagen' src={logo} alt="logo" />
        </footer>
    )
}

export default Footer;