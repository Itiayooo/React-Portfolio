import './testimonials.css'
import profilei from '../../assets/profile-img-i.png'
import profileii from '../../assets/profile-img-ii.png'

function Testimonials() {
    return (
        <section className='testimonials'>
            <h2>Testimonials</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab tempore magnam, dolor sunt officiis nostrum cum! Magni, nostrum, minima consequuntur blanditiis adipisci, distinctio corporis.</p>

            <div className='testimonies'>
                <div className='testimony' style={{ backgroundColor: 'white'}}>
                    <div className='testimony-left'>
                        <img src={profilei} alt="" />
                    </div>
                    <div className='testimony-right'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia neque eius ad, esse sapiente dolorum temporibus iste doloremque sed quibusdam delectus blanditiis quam illum recusandae rem assumenda nobis accusantium?</p>
                        <div>
                            <p className='name'>Name</p>
                            <p className='CEO'>CEO</p>
                        </div>
                    </div>
                </div>

                <div className='testimony'>
                    <div className='testimony-left'>
                        <img src={profileii} alt="" />
                    </div>
                    <div className='testimony-right'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia neque eius ad, esse sapiente dolorum temporibus iste doloremque sed quibusdam delectus blanditiis quam illum recusandae rem assumenda nobis accusantium?</p>
                        <div>
                            <p className='name'>Name</p>
                            <p className='CEO'>CEO</p>
                        </div>
                    </div>
                </div>

                <div className='testimony'>
                    <div className='testimony-left'>
                        <img src={profilei} alt="" />
                    </div>
                    <div className='testimony-right'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia neque eius ad, esse sapiente dolorum temporibus iste doloremque sed quibusdam delectus blanditiis quam illum recusandae rem assumenda nobis accusantium?</p>
                        <div>
                            <p className='name'>Name</p>
                            <p className='CEO'>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Testimonials