import { Checkbox } from '@material-ui/core';
import { Check, GitHub, LiveTv, Looks, PanoramaFishEye, RemoveRedEye, Web } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Portfolio from '../../images/portfolio.png';
import ParrotBox from '../../images/parrotbox.png';
import Ecommerce from '../../images/ecommerce.png';

const Container=styled.div`
  margin-bottom : 2%;
  @media only screen and (max-width: 360px){
    width: 360px;
    margin-bottom: 5%;

  }
`
const Title=styled.h2` 
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  padding: 1rem;
  margin: 2rem 2rem 0rem 2rem;
`
const ProjectList=styled.div` 
  width: 90%;
  display: flex;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 360px){
    /* width: 360px; */
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 650px){
    /* width: 360px; */
    display: flex;
    flex-direction: column;
  }
`
const Project=styled.div` 
  max-width: 60vh;
  margin: 0 auto;
  height: 100%;
  color: lightgrey;
  @media only screen and (max-width: 360px){
    float: 1;
    /* display: flex; */
    width: 80%;
    margin: 0 auto;
  }
`
const Image=styled.img` 
  width: 100%;
  height: 50%;
`
const Details=styled.div` 
  padding: 3%;
`
const Name=styled.h3` 

`
const Desc=styled.p` 
  padding: 5px 0px;
`
const ProjectLinks=styled.div` 
  display: flex;
  align-items: left;
  justify-content: space-between;
`
const ProjectLink=styled.div` 
  border : 1px solid teal;
  padding: 3px 6px;
  border-radius: 3px;
  width: 45%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-evenly;
  color: teal;
`
const Site=styled.a` 

`
const Clr=styled.span` 
  color: teal;
`


const MyProject = () => {
  return (
    <Container>
      <Title><Clr>My</Clr> Projects</Title>
      <ProjectList>
        <Project>
          <Image src={ParrotBox}/>
          <Details>
            <Name>Parot Box</Name>
            <Desc>Budget tracking web application</Desc>
            <ProjectLinks>
              <ProjectLink>
                <RemoveRedEye/>
                <Site href='https://baraclarkson.github.io/mySite/'>Live Site</Site>
              </ProjectLink>
              <ProjectLink>
                <GitHub/>
                <Site>GitHub Repo</Site>
              </ProjectLink>
            </ProjectLinks>
          </Details>
        </Project>
        <Project>
          <Image src={Portfolio}/>
          <Details>
            <Name>Tonte Clarkson's Portfolio</Name>
            <Desc>My personal portfolio website</Desc>
            <ProjectLinks>
              <ProjectLink>
                <RemoveRedEye/>
                <Site href='https://github.com/BaraClarkson/my-react-portfolio-site'>Live Site</Site>
              </ProjectLink>
              <ProjectLink>
                <GitHub/>
                <Site>GitHub Repo</Site>
              </ProjectLink>
            </ProjectLinks>
          </Details>
        </Project>
        <Project>
          <Image src={Ecommerce}/>
          <Details>
            <Name>Fresh Market</Name>
            <Desc>e-commerce web application</Desc>
            <ProjectLinks>
              <ProjectLink>
                <RemoveRedEye/>
                <Site href=''>Live Site</Site>
              </ProjectLink>
              <ProjectLink>
                <GitHub/>
                <Site>GitHub Repo</Site>
              </ProjectLink>
            </ProjectLinks>
          </Details>
        </Project>
        
      </ProjectList>
    </Container>
  )
}

export default MyProject;