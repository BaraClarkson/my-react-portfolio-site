import React from 'react'
import styled from 'styled-components'

const Container=styled.div` 
    /* width: 100vw; */
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7)
    , rgba(0, 0, 0, 0.7)), rgba(0, 0, 0, 0.7) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 360px){
    width: 360px;
  }
`
const Wrapper=styled.div` 
    text-align: center;
    padding: 20px;
    width: 150vh;
    margin: 0 auto;
    @media only screen and (max-width: 400px){
       width: 75%;
    }
    color: white;
`
const Title=styled.h1` 
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 2rem;
`
const Form=styled.form` 
   
`
const Input=styled.input` 
    flex: 1;
    min-width: 100%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
    border-radius: 10px;
   
`
const Text=styled.textarea` 
    flex: 1;
    min-width: 100%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
    border-radius: 10px;
`
const Agreement=styled.span` 
    font-size: 15px;
    margin: 20px 0;
`
const Button=styled.button` 
    margin-top: 0.4em;
    width: 40%;
    border: none;
    border-radius: 4px;
    padding: 15px 20px;
    background-color: red;
    color: white;
    cursor: pointer;
    @media only screen and (max-width: 360px){
    width: 60%;
  }

`


const GetInTouch = () => {
  return (
    <Container>
        <Wrapper>
            <Title>GET IN TOUCH</Title>
             <Agreement>
                    Feel free to fill the required fields. I will reply as soon as possible.
                </Agreement>
            <Form>
                <Input placeholder='email address'/>
                <Input placeholder='mail subject'/>
                <Text placeholder='your message' />
               
                <Button>Send Message</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default GetInTouch