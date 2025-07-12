import './services.css'
import web from '../../assets/Web-design.png'

function Services() {
    return (
        <section className='services'>
            <h2 className='services-header'>Services</h2>
            <p className='services-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam suscipit nobis iure perferendis quo ratione commodi animi nesciunt, eaque quidem laudantium alias labore, delectus beatae a! Provident, atque esse!</p>
            <div className='offerings'>

                <div className='box'>
                    <img src={web} alt="" />
                    <p>UI/UX</p>
                    <span>Lorem ipsum consectetur dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className='box'>
                    <img src={web} alt="" />
                    <p>UI/UX</p>
                    <span>Lorem ipsum consectetur dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className='box'>
                    <img src={web} alt="" />
                    <p>UI/UX</p>
                    <span>Lorem ipsum consectetur dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className='box'>
                    <img src={web} alt="" />
                    <p>UI/UX</p>
                    <span>Lorem ipsum consectetur dolor sit amet consectetur adipisicing elit.</span>
                </div>



            </div>
        </section>
    )
}

export default Services
