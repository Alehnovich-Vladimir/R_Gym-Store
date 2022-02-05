import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 16px;
    border: 2px solid #01634df4;
    border-radius: 8px;
    padding: 4px;
    cursor: pointer;

    &:hover{
        background-color: #01634df4;
        color: #fff;
    }
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 2px solid #01634df4;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 3px;
    ${mobile({ marginLeft: "10px", padding: "1px"})}
` 

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 18px;
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 48px;
    color: #000000c7;
    cursor: pointer;
    text-shadow: 4px -1px 3px grey;
    text-decoration: none;
    ${mobile({fontSize: "14px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 18px;
    color: #01634df4;
    cursor: pointer;
    margin-right: 20px;
    ${mobile({ fontSize: "12px", marginRight: "10px"})}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/> 
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>R-Gym Store</Logo>  
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
