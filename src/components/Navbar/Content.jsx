import React from 'react'
import styled from 'styled-components'
import Vr from '../../images/Tonte.jpg'

const Container = styled.div` 
  background-color: rgba(0,0,0, 0.8); 
   @media only screen and (max-width: 360px){
    margin-bottom: 0;
  }
     @media only screen and (max-width: 650px){
    /* width: 650px; */
  }
`

const Image = styled.img` 
    height: 100%;
    width: 100%;
    border-radius: 50%;
     @media only screen and (max-width: 360px){
    width: 70%;
    margin: 0 auto;
    padding: 0;
  }
    
`
const SubContainer = styled.div` 
    margin: 0 100px;
    
    @media only screen and (max-width: 360px){
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 0;
    /* margin-bottom: 150px; */
  }
  @media only screen and (max-width: 650px){
   
  }
`

const InnerContainer = styled.div` 
    width: 80%;
    margin: 0 auto;
    display: flex;
    @media only screen and (max-width: 360px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  @media only screen and (max-width: 650px){
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0;
    
  }
`
const ContainerText = styled.div` 
    flex: 1;
    margin-top: 15%;
    margin-right: 20%;
     @media only screen and (max-width: 360px){
    /* display: flex; */
    width: 100%;
    margin: 5% auto;
    padding: 0;
  }
`
const Title1 = styled.h1` 
    font-weight: 200;
    font-size: 2.1rem;
     color: #ecec;
`
const Title2 = styled.h3` 
    font-size: 1.2rem;
    font-weight: 200;
     color: #ccc;
`
const Text = styled.p` 
    text-align: left;
    padding-right: 5rem;
    padding-top: 3%;
    line-height: 25px;
    font-size: 1.2rem;

    margin-bottom: 1rem;
     color: white;
`
const DownloadLink = styled.a` 
    background-color: skyblue;
    padding: 1rem;
    border-radius: 16px;
    cursor: pointer;
`

const ImageContainer = styled.div` 
    flex: 1;
    height: 100%;
     @media only screen and (max-width: 360px){
    width: 360px;
    margin: 7% auto;
    padding: 0;
  }
    @media only screen and (max-width: 650px){
    width: 90%;
    margin-top: 6%;
  }
`


const Content = ({item}) => {
  return (
    <Container>
    <SubContainer>
        <InnerContainer>
            <ContainerText>
                <Title1>Hi i'm Tonte Clarkson</Title1>
                <Title2>Web Developer | Computer Scientist</Title2>
                <hr/>
                <Text>
                A higly skilled and motivated web developer who deliver 
                best quality and scalable software for your business.
                </Text>
                <DownloadLink>Download Resume</DownloadLink>
            </ContainerText> 
            <ImageContainer>
                <Image src={Vr} alt=' gubpic'/>
            </ImageContainer>
        </InnerContainer>
        
    </SubContainer>
    </Container>
  )
}

export default Content