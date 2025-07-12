import logo from '../../assets/logo.png';
import './navbar.css';
import hamburger from '../../assets/bars-solid.svg'


function Navbar() {
    return (
        <nav>
            <div className='left'>
                <img className='logo' src={logo} alt="Logo" width="100" />
            </div>
            <div className='right'>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li> Testimonials</li>
                    <li>Contact</li>
                    <li><button>Download CV</button></li>
                </ul>
            </div>
            <div className='off-canvas-holder' tabIndex={0}>
                <svg className='hamburger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30" fill="#fff">
                    <path d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM424 400H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
                </svg>
                <div className='off-canvas'>
                    <ul className='canvas-links'>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li> Testimonials</li>
                        <li>Contact</li>
                        <li><button>Download CV</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;