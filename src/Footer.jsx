import logo from "./assets/icons/logo.jpg";
import falinkedin from './assets/icons/linkedin.svg'
import fagithub from './assets/icons/github.svg'

function Footer() {
    return (
        <div className="copyright">
            <div>
                <img src={logo} alt="" height={"40px"} width={"40px"} />
                <span>© Developed and designed by Jacob Elbaz. 2022</span>
            </div>
            <div className="social">
            <a href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank" className='text-decoration-none'><img style={{filter: "invert(1)"}} src={falinkedin} alt="" /></a>
            <a href="https://github.com/JacobElbaz" target="_blank" className='text-decoration-none'><img style={{filter: "invert(1)"}} src={fagithub} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer;