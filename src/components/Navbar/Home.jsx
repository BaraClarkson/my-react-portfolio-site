import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

import styled from 'styled-components';
import { Facebook, GitHub, Instagram, WhatsApp } from '@material-ui/icons';
import Navbar from './Navbar';
import About from './About';
import Content from './Content';
import MyProject from './MyProject';
import GetInTouch from './GetInTouch';
import Footer from './Footer';


const Container = styled.div` 
  background: linear-gradient(rgba(24, 24, 24, 1)
  ,rgba(24, 24, 24, 0.6)), rgba(24, 24, 24, 1) center;
  background-size: cover;
  position: relative;
  @media only screen and (max-width: 360px){
    /* width: 360px; */
    
  }
`
const SocialMediaIcon = styled.div` 
  position: fixed;
  /* top: 50%; */
  right: 0;
  bottom: 40%;
   @media only screen and (max-width: 360px){
    /* margin: 0 ;
    padding: 0; */
  }
`

const SocialIcon = styled.div` 
    cursor: pointer;
`

const Home = () => {
  return (
    
      <Container>
       <Navbar/>
       <Content/>
       <About/>
       <MyProject/>
       <GetInTouch/>
       <Footer/>
       <SocialMediaIcon>
                    <SocialIcon color='3b5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='3b5999'>
                        <WhatsApp/>
                    </SocialIcon>
                    <SocialIcon color='3b5999'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='3b5999'>
                        <GitHub/>
                    </SocialIcon>
        </SocialMediaIcon>
        </Container>
    

  )
}

export default Home