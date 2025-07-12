import './footer.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/Facebook - Negative.png'
import Twitter from '../../assets/Twitter - Negative.png'
import Instagram from '../../assets/Instagram - Negative.png'
import Linkedin from '../../assets/Linkedin - Negative.png'

function Footer() {
    return (
        <section className='footer'>
            <img className='footer-logo' src={logo} alt="" />
            <div>
                <ul className='footer-links'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='contact-svgs'>
                <img className='contact-svg' src={facebook} alt="" />
                <img className='contact-svg' src={Twitter} alt="" />
                <img className='contact-svg' src={Instagram} alt="" />
                <img className='contact-svg' src={Linkedin} alt="" />
            </div>
            <div className='rights'>
                <p>2023 Mumair All Rights Reserved, Inc</p>
            </div>
        </section>
    )
}

export default Footer