import React, { useState,useEffect } from 'react';

import tambola_game from './gamesIcons/tambola_game.png';
import rangoli_game from './gamesIcons/rangoli_game.png';
import cricket_game from './gamesIcons/cricket_game.png';
import kabaddi_game from './gamesIcons/kabaddi_game.png';
import khokho_game from './gamesIcons/khokho_game.png';
import chairs_game from './gamesIcons/chairs_game.png';
import dance_game from './gamesIcons/Dance_game.png';
import song_game from './gamesIcons/song_game.png';
import volleyball_game from './gamesIcons/volleyball_game.png';

import Profile from './Profile';
import Athantication from './Athantication';

const Games = () => {

    const userData = JSON.parse(localStorage.getItem('key'));
    const profile=userData.userName !== null ? userData.userName.split(" ").slice(0, 2).map(name => name[0].toUpperCase()).join(""):"!";

    const [isAthanticationVisible, setIsAthanticationVisible] = useState(false);

    const screenWidth = window.innerWidth;
    // const screenHeight = window.innerHeight;
const note=" hi to all good morning ";
const [games, setGames] = useState([
    {
        id:1,
        name:'cricket_game',
        img:cricket_game,
        prices:["Winer's Team","Runner's Team"]

    },
    {
        id:2,
        name:'volleyball_game',
        img:volleyball_game,
        prices:["Winer's Team","Runner's Team"]

    },
    {
        id:3,
        name:'kabaddi_game',
        img:kabaddi_game,
        prices:["Winer's Team","Runner's Team"]

    },
    {
        id:4,
        name:'khokho_game',
        img:khokho_game,
        prices:["Winer's Team","Runner's Team"]

    }, 
    {
        id:5,
        name:'tambola_game',
        img:tambola_game,
        prices:[
            "First 5 numbers collect",
            "First row numbers collect",
            "Second row numbers collect",
            "Third row numbers collect",
            "Full house collect"]
    }, 
    {
        id:6,
        name:'rangoli_game',
        img:rangoli_game,
        prices:["First price","Second price","Third price"]

    }, 
    {
        id:7,
        name:'chairs_game',
        img:chairs_game,
        prices:["First price","Second price","Third price"]
    },
    {
        id:8,
        name:'song_game',
        img:song_game,
        prices:["First price","Second price","Third price"]
    },
    {
        id:9,
        name:'dance_game',
        img:dance_game,
        prices:["First price","Second price","Third price"]
    },
    // {
    //     id:10,
    //     name:'song_game',
    //     img:song_game,
    //     prices:["First price","Second price","Third price"]
    // },

]);


useEffect(() => {
    setTimeout(() => {
        if(userData.userName === null && userData.id === null)
        {
            setIsAthanticationVisible(true);
        }
    },1000);
  }, []);

const header={
    backgroundColor: `rgb(126, 96, 235, 0.925)`,
    padding:`10px`,
    width:`100%`,
    position: `fixed`,
    height: `50px`,


}
const body={
    paddingTop: `70px`,
 
}
const happy={
    paddingTop:`20%`,
    fontSize: `120%`, 
    fontWeight: `bold`,
}
const profileButton= {
    padding:`10px`,
    fontSize: `150%`, 
    fontWeight: `bold`,
    borderStyle:`solid `,
    borderRadius: '40%',
  }
  const notebox={
    padding:`10px`,
    fontWeight: `bold`,
  }
const gridContainer={
    display: `grid`,
    gridTemplateColumns:`${screenWidth<500? "":"repeat(4, 1fr)"}` , /* Creates 3 columns with equal width */
    gap: `10px`,
}
const grid={
    backgroundColor: `#f2f2f2`,
    borderStyle:`solid`,
    // borderColor: `green`,
    padding: `5px`,
}

const center={
    textAlign: `center`,
    padding: `10px`,
}
const button={
    backgroundColor: `LawnGreen`,
    padding: `5px`,
    width: `60%`,
}

const [profileOpen, setProfileOpen] = useState(false);

const openProfile = () => {
    if(userData.userName === null && userData.id === null)
    {
        setIsAthanticationVisible(true);
    } 
    else{
    profileOpen? setProfileOpen(false): setProfileOpen(true);
    }
};
const closeProfile = () => {
    setProfileOpen(false);
  };


  const showAthentication = () => {
    setIsAthanticationVisible(true);
  };

  const closeAthentication = () => {
    setIsAthanticationVisible(false);
  };
  const registerGameHandler=(game)=>{
    if(userData.userName === null && userData.id === null)
    {
        setIsAthanticationVisible(true);
    } 
    else{
        alert("hi "+userData.userName+" sucessfully register "+game.name+" game")
    }
 }

    return (
        <div>
             {isAthanticationVisible && (
                    <div className="overlay">
                    <div className="modal">
                        <Athantication isOpen={showAthentication} onClose={closeAthentication}  />
                    </div>
                    </div>
               )}
            <div>
                <div>
                    <div style={header}>
                    <button onClick={openProfile} style={profileButton}>{profile}</button>
                    <label style={happy}> 25<sup>th</sup>  వినాయక చవితి శుభాకాంక్షలు</label>
                    </div>
                    <Profile isOpen={profileOpen} onClose={closeProfile} />
                </div>
            </div>
            <div style={body}>
            <div style={notebox}>
                <lable style={{"color":"red"}}>{note}</lable>
            </div>
            <div style={gridContainer}>

            {games.map((game) => (
                <div key={game.id} style={grid}>
                    <img src={game.img} alt={game.name} width="100%" />
                    <div>
                        <h4>Prices</h4>
                        {game.prices.map((price, index) => (
                            <div key={index}> * {price} </div>
                        ))}
                    </div>
                    <div style={center}>
                        <button style={button} onClick={() => registerGameHandler(game)}>REGISTER</button>
                    </div>
                </div>
            ))}
            </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default Games;
