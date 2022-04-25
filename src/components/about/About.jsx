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
            Its a long established fact that a reader will be distracted by the readable content
            </p>
            <p className='a-desc'>
                I am a web developer who is passionated in programming and solving
                 complex alogrithm in to a simple solution and turns your design 
                 ideas into a live website to help your business grow faster using 
                 modern technologies.
            </p>
            
        </div>
    </div>
  )
}

export default About