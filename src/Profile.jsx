// import React, { useEffect, useState } from 'react';
// import { UserResponce } from './apis/responce/UserResponce';
//  import UserService from './apis/service/UserService';
//  const userRepository=require('./apis/repository/UserRepository')

const Profile = ({ isOpen, onClose }) => {
  // const [userProfile, setUserProfile] = useState(new UserResponce());
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
 const userData = JSON.parse(localStorage.getItem('key'));
  const profile=userData.userName !== null? userData.userName.split(" ").slice(0, 2).map(name => name[0].toUpperCase()).join(""):"!";
      
  if (!isOpen) return null;

  const logOut=()=>{
    localStorage.setItem('key', JSON.stringify({id:null,userName:null}));
    window.location.reload();
    alert("Are you shore to LogOut!")
  }
const  box={
  position: `fixed`,
  backgroundColor: `white`,
  padding: `10px`,
  width: `${screenWidth/1.5}px`,  
} 
const body= {
  width: `${screenWidth}px`,
  height: `${screenHeight}px`,
  paddingTop: `70px`,
   display: `flex`, 
  position: `fixed`,
   backgroundColor: `rgba(0, 0, 0, 0.5)`,
}
const profileButton= {
  padding:`10px`,
  fontSize: `100%`, 
  fontWeight: `bold`,
  borderStyle:`solid `,
  borderRadius: '40%',
}
const closeButton={
  position: `absolute`,
  top: `10px`,
  right: `10px`,
  fontSize: `200%`, 
  color:"red",
  fontWeight: `bold`,
}
const h2={
backgroundColor:"gray"
}
  return (
    <div style={body}>
    <div style={box}>
        <div onClick={onClose} style={closeButton}> X </div><br />

        <h1><button style={profileButton}>{profile}</button> {userData.userName} </h1>

        <h2 style={h2} onClick={onClose}>Games</h2>
        <h2 onClick={logOut} style={h2}>  LogOut</h2>

    </div>
    </div>
  );
};

export default Profile;
