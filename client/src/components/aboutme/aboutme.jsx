import './aboutme.css'
import avatar from '../../assets/test-avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub  } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <div className="main-page text-center">
            <h1 className="name-title">Sal Gonzalez</h1>
            <p className="para-title">I am a Full-Stack developer / Software Engineer / Data Engineer</p>
            <div className="about-me-p"> 
                <p className="text-para text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus, nesciunt laborum rerum doloremque porro pariatur velit non, cum magni magnam corporis modi consectetur quidem nostrum fugiat nemo recusandae fuga.</p>
            </div>
            
            <img src={avatar} className="rounded img-fluid mt-3" alt="avatar-image" style={{maxWidth: '200px', maxHeight: '100px'}} />
            <div className="mt-3">
                <a className="social-links mx-3" href="https://www.linkedin.com/in/sal-gonzalez-1988567a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="social-links" href="https://github.com/SalGonzalez151"><FontAwesomeIcon icon={faGithub} /></a>
                
            </div>
        </div>
    )
}

export default About;