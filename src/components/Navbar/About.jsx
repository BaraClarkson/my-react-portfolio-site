import React from 'react';
import styled from 'styled-components';
// import Services from '../components/Navbar/Services'
import ReactLogo from '../../images/React-icon.svg.png'
import Babel from '../../images/babel.jpg'
import BootsTrap from '../../images/Bootstrap.png'
import CSS3 from '../../images/CSS3_logo.svg.png'
// import GitHub from '../../images/GitHub.png'
import HTML from '../../images/html.png'
import JavaScript from '../../images/JavaScript.jpg'
import { Facebook, FormatQuote, FormatQuoteOutlined, FormatQuoteRounded, FormatQuoteTwoTone, GitHub, Instagram, WhatsApp } from '@material-ui/icons';


const Container = styled.div` 
    @media only screen and (max-width: 360px){
    width: 360px;
    padding: 0;
  }
    /* @media only screen and (max-width: 650px){
    width: 650px;
  } */
`
const AboutContainer = styled.div` 
    background-color: black;
    /* height: 40vh; */
    text-align: center;
    margin: 0;
     @media only screen and (max-width: 360px){
    width: 360px;
  }
` 
const TextContainer = styled.div` 
    height: 100%;
    width: 70%;
    margin: 0  auto;
    color: white;
    padding: 3% 0px;
     @media only screen and (max-width: 360px){
    width: 100%;
    margin: 0 ;
    padding: 0;
  }
    @media only screen and (max-width: 650px){
    height: 100%;
    padding: 7% 2%;
  }
`
const Title = styled.h1` 
    text-align: center;
    color: #fff;
    font-size: 2rem;
`
const IconRight=styled.div` 
    text-align: right;
`
const IconLeft=styled.div` 
    text-align: left;
     @media only screen and (max-width: 360px){
    padding: 0;
  }
`
const TextTop = styled.p` 
    color: #fff;
    text-align: left;
    padding: 0 4rem;
    line-height: 2rem;
     @media only screen and (max-width: 360px){
    width: 100%;
    margin: 0 ;
    padding: 0 7%;
  }
`
const ServicesContainer = styled.div` 
    text-align: center;
    /* background-color: lightgrey; */
    margin: 0;
    @media only screen and (max-width: 360px){
    /* width: 100%; */
    margin: 0 auto;
    padding: 3% 0;
  }
`
const Services = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
     @media only screen and (max-width: 650px){
    display: flex;
    flex-wrap: wrap;
  }
     @media only screen and (max-width: 360px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
  }
`
const Service = styled.div` 
    background-color: #fff;
    margin: 3% auto;
    width: 32%;
    position: relative;
     @media only screen and (max-width: 650px){
    width: 45%;
    /* margin: 0 2%; */
  }
    @media only screen and (max-width: 360px){
    width: 100%;
    flex: 1;
    padding: 4% 7%;
    margin-bottom: 1%;
  }

`

const Icon = styled.div` 
`
const SkillCat = styled.h3` 
    font-weight: 900;
    /* padding: 1px; */
`
const Text = styled.p` 
    text-align: left;
    padding: 1rem;
    line-height: 1.5rem;
    text-align: center;
`

const SkillsContainer = styled.div` 
    /* background-color: lightgrey; */
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`
const Image = styled.img` 
    width: 20%;
`
const Skills = styled.div` 
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    @media only screen and (max-width: 360px){
    width: 100%;
    padding: 4% 7%;
  }
`
const Skill = styled.div` 
    height: 50px;
    border-radius: 3px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 5px auto;
    padding: 12px;
`
const Name = styled.h3` 

`

const About = () => {
  return (
    <Container>
        <AboutContainer>
        <TextContainer>
            <Title>About Me</Title>
            <IconLeft><FormatQuoteRounded/></IconLeft>
            <TextTop>  I am a web developer who is passionated in programming and solving 
                    complex alogrithm into a simple solution and turns your design ideas into a 
                    live website to help your business grow faster using modern web technologies.
            </TextTop>
           <IconRight><FormatQuoteRounded/></IconRight>
        </TextContainer>
        </AboutContainer>
        <ServicesContainer>
         <Title>Services</Title>
           <Services>
                <Service>
                    <Icon>ICON</Icon>
                    <SkillCat>Web Development</SkillCat>
                    <Text>Implementaion of PSD design or figma design into a live website with cross browser compatibility.</Text>
                </Service>
                <Service>
                    <Icon>ICON</Icon>
                    <SkillCat>Responsive Design</SkillCat>
                    <Text>Design that aims to make web pages render well on variety of devices, mobile tablet and desktop. </Text>
                </Service>
                <Service>
                    <Icon>ICON</Icon>
                    <SkillCat>Template Editing</SkillCat>
                    <Text>Editing and optimizing an already created website web application that match your business needs. </Text>
                </Service>

           </Services>
        </ServicesContainer>
        <SkillsContainer>
            <Title>
                My Skills
            </Title>
             <Skills>
                <Skill>
                    <Image src={HTML}/>
                    <Name>HTML</Name>
                </Skill>
                 <Skill>
                    <Image src={CSS3}/>
                    <Name>CSS3</Name>
                </Skill>
                 <Skill>
                    <Image src={JavaScript}/>
                    <Name>JavaScript</Name>
                </Skill>
                 <Skill>
                    <Image src={ReactLogo}/>
                    <Name>Java</Name>
                </Skill>
                 <Skill>
                    <Image src={GitHub}/>
                    <Name>GitHub</Name>
                </Skill>
                 <Skill>
                    <Image src={Babel}/>
                    <Name>Babel</Name>
                </Skill>
                 <Skill>
                    <Image src={BootsTrap}/>
                    <Name>BootsTrap</Name>
                </Skill>
                 <Skill>
                    <Image src={ReactLogo}/>
                    <Name>HTML</Name>
                </Skill>
                 <Skill>
                    <Image src={ReactLogo}/>
                    <Name>HTML</Name>
                </Skill>
                 <Skill>
                    <Image src={ReactLogo}/>
                    <Name>HTML</Name>
                </Skill>
                 <Skill>
                    <Image src={ReactLogo}/>
                    <Name>HTML</Name>
                </Skill>
            </Skills>
        </SkillsContainer>
       
        
    </Container>
  )
}

export default About