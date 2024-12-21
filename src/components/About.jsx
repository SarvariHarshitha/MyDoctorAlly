import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div className="about-section">
            <div className="about-text">
                <TypeAnimation
                    sequence={[
                        'Welcome to MyDoctorAlly',
                        1000,
                        'Your trusted partner in simplifying healthcare documentation.',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', color: '#7AB2D3', fontFamily: 'DynaPuff, system-ui' }}
                    repeat={Infinity}
                />
            </div>
            <div>
                <img src="hero.png" alt="Hero" />
            </div>
        </div>
    )
}

export default About;