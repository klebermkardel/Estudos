import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <ul>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )
}

export default Footer