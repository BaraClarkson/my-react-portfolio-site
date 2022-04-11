import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Search, Dehaze } from "@material-ui/icons";
import React from 'react';
import {NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.8); */
  height: 100%;
 
  @media only screen and (max-width: 360px){
  /* width: 360px; */
  }
  /* @media only screen and (max-width: 650px){
    width: 650px;
    margin-bottom: 0;
  } */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 360px){
    display: flex;
    flex-direction: column;
  }
     @media only screen and (max-width: 650px){
    display: flex;
    flex-direction: column; 
  } 
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 360px){
    
  }
`;

const Right = styled.div`
  flex: 1;  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 360px){
    display: none;
  }
`;

const Logo = styled.h1` 
  color: skyblue;
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: 360px){
   
  }
`;
const MenuItem=styled(Link)` 
  font-size: 18px;
  margin-left: 3rem;
  cursor: pointer;
  text-decoration: none;
  color: skyblue;
  padding: 1px;
  &:hover{
    background-color: lightgrey;
    color: teal;
    padding: 4px;
    border-radius: 1px 5px;
  }
  @media only screen and (max-width: 360px){
    
  }
`;


const Navbar = () => {
  return (
    <Container> 
      <Wrapper>
        <Left>
        <Logo>TNT. <Dehaze/></Logo>
        </Left>
        <Right>
          <MenuItem to='/Home'>Home</MenuItem>
          <MenuItem to='/'>About</MenuItem>
          <MenuItem to='/'>Projects</MenuItem>
          <MenuItem to='/'>Contact</MenuItem>
          <MenuItem to='/'>Services</MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;