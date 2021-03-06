import { Link } from 'react-router-dom'
import Logo from '../images/Callum.png'

function Nav() {
    return (
            <div className="nav1" id="navLoad">
                <div className="identity">
                    <Link to="/"><img src={Logo} alt="Callum McGuigan" className="logo" /></Link>
                </div>
                <div className="links">
                    {/* <Link to="/about" className="link">About</Link> */}
                    <Link to="/projects" className="link">Projects</Link>
                    <Link to="/Contact" className="link">Contact</Link>
                    
                </div>
            </div>
    );
}

export default Nav;