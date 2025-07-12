import profile from '../../assets/profile.png';
import './hero-section.css';

function HeroSection() {
    return (
        <section className='hero-section'>
            <div className='hs-left'>
                <div>
                    <p className='p-i'>Hi I am</p>
                    <p className='p-ii'>Muhammed Umair</p>
                    <div className='ui'>
                        <h1 className='ui-i'>UI & UX</h1>
                        <h1 className='designer'>Designer</h1>
                    </div>
                </div>
                <div className='lorem'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex hic quas, earum quia, atque ea suscipit eligendi culpa porro quisquam recusandae tempora quo modi nulla a magni, nihil facilis!
                </div>
                <div>
                    <button className='hire-me'>Hire Me</button>
                </div>
            </div>
            <div className='hs-right'>
                <div>                    
                    <img className='profile-img' src={profile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;