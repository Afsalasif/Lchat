import { Button } from '@mui/material';
import Head from 'next/head';
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import logo from '../utils/logo.png';


function Login() {
    const signIn =()=>{
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo

                    src='https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/297148398_743643416923398_1110144728236092661_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=vA6rUGx2zkgAX9a2WDI&_nc_ht=scontent-del1-1.xx&oh=00_AT_cgbO29lbS3-kNS0geCYl8ZJHuy6mg9Hxef2ybKU3gXQ&oe=62FC6A42'
                />
                <Button onClick={ signIn} >Sign in with Google</Button>

             </LoginContainer>

        </Container >
    )
}

export default Login

const Container = styled.div`

display: grid;
place-items: center;
height: 100vh;
background-color:whitesmoke;
`
const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo = styled.img`
height: 200px;
width: 350px;
margin-bottom: 50px;

`;