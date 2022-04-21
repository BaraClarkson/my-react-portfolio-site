import React from 'react'
import '../about/about.css'
import Me from "../../images/Tonte.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src={Me} alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            Its a long established fact that a reader will be 
            </p>
            <p className='a-desc'>
                Nearest-neighbor instance-based learning is simple and often works very
                well. In the method described previously each attribute has exactly the same
                influence on the decision, just as it does in the Naïve Bayes method. Another
                problem is that the database can easily become corrupted by noisy exemplars.
                One solution is to adopt the k-nearest-neighbor strategy, where some fixed
            </p>
            <div className='a-award'>
                <img src={Me} alt='' className='a-award-img'/>
                <div className='a-award-texts'>
                    <h4 className='a-award-title'>International Design</h4>
                    <p className='a-award-desc'>Well. In the method described previously each attribute has exactly the same
                    influence on the decision, just as it does in the Naïve Bayes method. Another
                    problem is that the database</p>
                
                </div>  
            </div>
        </div>
    </div>
  )
}

export default About