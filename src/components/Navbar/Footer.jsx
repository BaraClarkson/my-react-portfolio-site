import { Mail, Phone } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div` 
    /* width: 100vw; */
    height: 100%;
    background-size: cover;
    color: white;
    padding: 1rem 0px;
    @media only screen and (max-width: 360px){
   display: flex;
   flex-direction: column;
   width: 360px;
  }
`
const ContactSupport=styled.h3` 
    font-size: 15px;
    padding-bottom: 5px;
    @media only screen and (max-width: 360px){
    width: 100%;
    text-align: center;
  }
`
const ContactContainer=styled.div` 
    width: 500px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 360px){
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
`
const Contact=styled.div` 
    display: flex;
    align-items: center;
`
const Text = styled.p` 
    text-align: center;
    padding: 1%;
    font-size: 13px;
`
const Footer = () => {
  return (
    <Container>
        <ContactSupport>Contact Support: </ContactSupport>
        <ContactContainer>
            <Contact><Phone/> +2348157422503</Contact>
            <Contact><Phone/> +2348160013369</Contact>
            <Contact><Mail/> techclarksini@gmail.com</Contact>
        </ContactContainer>
        <Text>
            copyright &copy; 2022 all right reserverd
        </Text>
    </Container>
  )
}

export default Footer