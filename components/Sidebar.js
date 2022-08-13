import { Avatar, Button, IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { Chat, SearchOff } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator";
import {useCollection} from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chati from './Chati';


function Sidebar() {
    const [user] =useAuthState(auth);
    const userChatRef =db.collection('chats').where('users','array-contains',user.email)
    const [chatsSnapshot] =useCollection(userChatRef);

    const createChat =()=>{
        const input = prompt('Please enter the email address of the user you want to chat with.');

        if (!input) return null;

        if(EmailValidator.validate(input)&&!chatAlreadyExists(input) &&input!=user.email){
            db.collection('chats').add({
                users:[user.email, input]
            })
            
        }

            
        
    }
    const chatAlreadyExists =(recipientEmail)=>
        !!chatsSnapshot?.docs.find(chat=>chat.data().users.find(user=>user=== recipientEmail)?.length>0);

    


    
    return (
        <Container>
            <Header>
                <UserAvatar src={user.photoURL} onClick={()=>auth.signOut()}/>
                
                <p>{user.email}</p>
            </Header>
            
            <h3>CHATS</h3>
            
            
            <SidebarButton onClick={createChat}>
                START A NEW CHAT
            </SidebarButton>

            {/* chats */}
            {chatsSnapshot?.docs.map(chat => (
                <Chati key={chat.id} id={chat.id} users={chat.data().users} />
            ))}

            {/* comments */}
            
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
flex: 0.45;
border-right: 1px solid whitesmoke;
height: 100vh;
min-width: 300px;
max-width: 350px;
overflow-y: scroll;
align-content: center;

::-webkit-scrollbar{
    display: none;
}

-ms-overflow-style: none;
scrollbar-width: none;


`;
const SidebarButton = styled(Button)`
 width: 100%;
 color: black;
 border-top: 1px solid whitesmoke;
 border-bottom: 1px solid whitesmoke;

 `;
 

const SeachInput = styled.input`
 outline-width: 0;
 border:none;
 flex: 1;

`;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: rgb(231,231,240);
background: linear-gradient(90deg, rgba(231,231,240,1) 0%, rgba(6,170,94,0.6671043417366946) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
  z-index: 1;
  
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  
>p{
    margin-left: 10px;
    font-size: large;
    font-weight: 500;
}

`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

 :hover{

    opacity: 0.8;
 }

`;
const IconsContainer = styled.div`

`;


const Search = styled.div`
 color: black;
 display: flex;
 align-items: center;
 padding: 20px;
 border-radius: 2px;
`;