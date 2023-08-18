import React ,{useState}from 'react';

const Athantication = ({ isOpen, onClose }) => {
    const [users,setUsers]= useState([]);

    const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const[user,setUser]=useState({name:"",phoneNumber:"",eMail:"",password:"",DOB:"",gender:""});

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
const[createAccountStatus,setCreateAccountStatus]=useState(false);


const forgotPasswordAction=()=>{
    alert("this service not working \n\n please conntact administrator! \n Ph No:7093419328")
}
const LoginHandler=()=>{
    const fatchUser = users.find(user => user.name === userName);
try {
    if(password === fatchUser.password)
    {
            localStorage.setItem('key', JSON.stringify({id:1,userName:userName,role:"USER"}));
            onClose();
    }
    else{
        alert("UserName And password incorrect ")
    }
} catch (error) {
alert("user not present please create account")
}
}
const userNameHandler=(value)=>{
    setUserName(value);
}
const userpasswordHandler=(value)=>{
    setPassword(value);
}
const createAccountButtonHandler=()=>{
    setCreateAccountStatus(true);
}
// register
const nameHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, name: value }));
  };
  
  const phoneNumberHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, phoneNumber: value }));
  };
  
  const eMailHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, eMail: value }));
  };
  
  const dobHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, DOB: value }));
  };
  
  const passwordHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, password: value }));
  };
  
  const genderHandler = (value) => {
    setUser((prevUser) => ({ ...prevUser, gender: value }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };
  const validateEmail = (email) => {
    return /\S+@gmail\.com$/.test(email);
  };

const registerSubmitHandler=()=>{
     // Validate all fields before submitting
     if (!user.name || !user.phoneNumber || !user.eMail || !user.password || !user.DOB || !user.gender) {
        alert("All fields are mandatory.");
        return;
      }
  
      if (!validatePhoneNumber(user.phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
      if (!validateEmail(user.eMail)) {
        alert("Please enter a valid email address ");
        return;
      }
      
      setUsers((prevUsers) => [...prevUsers, user]);
      alert("account crete sucess")
      setCreateAccountStatus(false);

    }
const backButtonHandler=()=>{
    setCreateAccountStatus(false);

}
    const body= {
        width: `${screenWidth}px`,
        height: `${screenHeight}px`,
         display: `flex`, 
         alignItems: `center`, 
         justifyContent:`center`,
        position: `fixed`,
         backgroundColor: `rgba(0, 0, 0, 0.5)`,
      }
      const box={
      backgroundColor: `white`,
      padding: '0% 2% 5% 5%', 
      borderRadius: `5px`,
    }
    const input={
        fontSize: `130%`, 
    }
    const label={
        fontWeight: `bold`,
        fontSize: `120%`, 
    }
    const loginForgotDiv={ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',  padding: `2%`,
    }
    const submitButton={
        marginLeft: 'auto',  
        fontSize: `100%`, 
        fontWeight: `bold`,
        padding: `2%`,
        backgroundColor: `green`,
    }
    
    const forgotPasswordButton={
        color:"red",
    }
    const backButton={
        color:"red",
    }
    const createAccountDiv={
        textAlign: 'center',
    }
    const createAccountButton={
        fontSize: `120%`, 
        padding: '0% 10% 0% 10%', 
    }
    const closeButton={
        marginLeft: 'auto',  
        fontSize: `100%`, 
        color:"red",
        fontWeight: `bold`,
      }

    return (
        <div>
            <div style={body}>
                <div style={box}>
                    <div style={loginForgotDiv}>
                         <div onClick={onClose} style={closeButton}> X </div> 
                    </div>
                    {!createAccountStatus?
                    <div>
                        <label style={label}>UserName</label> <br />  
                        <input type="text" value={userName} onChange={(e)=>{userNameHandler(e.target.value)}} style={input} placeholder="-enter userName-" /><br />
                        <label style={label}>Password</label> <br />  
                        <input type="password" value={password} onChange={(e)=>{userpasswordHandler(e.target.value)}} style={input} placeholder="-enter password-" /><br />
                        <div style={loginForgotDiv}>
                            <label onClick={forgotPasswordAction} style={forgotPasswordButton}>Forgot Password</label>
                            <button style={submitButton} onClick={LoginHandler}>Login</button>
                        </div>
                        <hr />
                        <p>Don't have an account? </p>
                        <div style={createAccountDiv}>
                        <button style={createAccountButton} onClick={createAccountButtonHandler} >Create Account</button>
                        </div>
                    </div>
                    :
                    <div>
                        <label style={label}>UserName</label> <br />  
                        <input type="text" value={user.name} onChange={(e) => nameHandler(e.target.value)} style={input} placeholder={user.name} /><br />
                        
                        <label style={label}>PhoneNumber</label> <br />  
                        <input type="text" value={user.phoneNumber} onChange={(e) => phoneNumberHandler(e.target.value)} style={input} placeholder={user.phoneNumber} /><br />
                        
                        <label style={label}>e-Mail</label> <br />  
                        <input type="text" value={user.eMail} onChange={(e) => eMailHandler(e.target.value)} style={input} placeholder={user.eMail} /><br />
                        
                        <label style={label}>Date of Birth</label> <br />  
                        <input type="date" value={user.DOB} onChange={(e) => dobHandler(e.target.value)} style={input} placeholder={user.DOB} /><br />
                        
                        <label style={label}>Gender</label> <br />  
                            <label>
                            <input type="radio" value="male" onChange={(e) => genderHandler(e.target.value)} checked={user.gender === 'male'} />
                            Male
                            </label>
                            <label>
                            <input type="radio" value="female" onChange={(e) => genderHandler(e.target.value)} checked={user.gender === 'female'} />
                            Female
                            </label>
                            <label>
                            <input type="radio" value="other" onChange={(e) => genderHandler(e.target.value)} checked={user.gender === 'other'} />
                            Other
                            </label>
                        <br />
                        <label style={label}>Password</label> <br />  
                        <input type="password" value={user.password} onChange={(e) => passwordHandler(e.target.value)} style={input} placeholder={user.password} /><br />
                        
                        <div style={loginForgotDiv}>
                        <label style={backButton} onClick={backButtonHandler}>Back</label>
                        <button style={submitButton} onClick={registerSubmitHandler}>Submit</button>
                        </div>

                    </div>
                    }
                </div>
            </div>
        </div>
    );

  
}

export default Athantication;
