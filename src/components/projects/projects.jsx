import './projects.css'
import webi from '../../assets/Web Designs-i-i.png'
import webii from '../../assets/Web Designs-i-ii.png'
import webiii from '../../assets/Web Designs-ii-i.png'
import webiv from '../../assets/Web Designs-ii-ii.png'
import webv from '../../assets/Web Designs-iii-i.png'
import webvi from '../../assets/Web Designs-iii-ii.png'

function Projects() {
    return (
        <section className='my-projects'>
            <h2>My Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium illo cumque! Quisquam labore aut eveniet sapiente placeat mollitia libero architecto possimus odio? Cum, placeat reprehenderit quod laudantium dolor porro.</p>
            <div className='my-projects-buttons'>
                <button className='projects-button'>All</button>
                <button className='projects-button'>UI/UX</button>
                <button className='projects-button-web-design'>Web Design</button>
                <button className='projects-button'>App Design</button>
                <button className='projects-button'>Graphic Design</button>
            </div>

            <div className='projects-holder'>
                <div className='project'>
                    <div className='projects'>
                        <img className='project-image-i' src={webi} alt="" />
                        <img className='project-image-ii' src={webii} alt="" />
                    </div>
                    <p className='design-header'>Web Design</p>
                    <h3 className='design-description'>AirCalling Landing Page Design</h3>
                </div>

                <div className='project'>
                    <div className='projects'>
                        <img className='project-image-i' src={webiii} alt="" />
                        <img className='project-image-ii' src={webiv} alt="" />
                    </div>
                    <p className='design-header'>Web Design</p>
                    <h3 className='design-description'>AirCalling Landing Page Design</h3>
                </div>

                <div className='project'>
                    <div className='projects'>
                        <img className='project-image-i' src={webv} alt="" />
                        <img className='project-image-ii' src={webvi} alt="" />                        
                    </div>
                    <p className='design-header'>Web Design</p>
                    <h3 className='design-description'>Ecom Web Page Design</h3>
                </div>


                
            </div>            
        </section>
    )
}

export default Projects