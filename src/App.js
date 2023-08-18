import './App.css';
import React ,{useState,useEffect}from 'react';

import Games from './Games';
import Welcome from './Welcome';

function App() {
  const[welcomeStatus,setWelcomeStatus]= useState(true);
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const imageWidth =  screenWidth; // Set the desired width
  const imageHeight =screenWidth<500? screenHeight/1.5:screenHeight; // Set the desired height
const img=screenWidth<500?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RwKfaJNiCgm-N97HiMa79fuCX9Mcs_W8Eg&usqp=CAU":"https://freepngimg.com/convert-png/17614-sri-ganesh-png"
  const body = {
    width: `${screenWidth}px`,
    height: `${screenHeight}px`,
     display: `flex`, 
     alignItems: `center`, 
     justifyContent:`center`,

  };
const page={
  background: `url(${img}) no-repeat center center fixed`,
  backgroundPosition: `center ${screenHeight / 2}px`,
  backgroundSize: `${imageWidth}px ${imageHeight}px`, 
   animation: 'scrollAnimation 5s linear infinite',
}
useEffect(() => {
  if (localStorage.getItem('key') === null)
  localStorage.setItem('key', JSON.stringify({id:null,userName:null,role:null}));

  setTimeout(() => {
    setWelcomeStatus(false);
     }, 5000);
}, []);

  return (
    <div>
      { welcomeStatus?
       <div style={page}>
        <div style={body}>
          <div style={{"padding":"5px"}}>
              <Welcome />
          </div>
        </div>
      </div> :
      <div>
      <Games />
      </div>
}
    </div>
  );
}

export default App;

