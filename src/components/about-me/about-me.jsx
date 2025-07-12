import './about-me.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me-left'>
                <div className='circle'>
                </div>
            </div>
            <div className='about-me-right'>
                <h2>About Me</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae voluptatibus, eum dignissimos iure molestiae ea deserunt harum sapiente maxime laudantium, odit vel velit dolorum voluptatum obcaecati sunt nam aspernatur?</p>
                <ContextualExample />
            </div>
        </section>
    )
}

function ContextualExample() {
    return (
        <div>
            <p className='UX'>UX</p>
            <ProgressBar className='bar'  now={90} />
            <p className='UX'>Website Design</p>
            <ProgressBar className='bar' variant="danger" now={80} />
            <p className='UX'>App Design</p>
            <ProgressBar className='bar' variant="danger" now={95} />
            <p className='UX'>Graphics Design</p>
            <ProgressBar className='bar' variant="danger" now={90} />
        </div>
    );
}

export default AboutMe