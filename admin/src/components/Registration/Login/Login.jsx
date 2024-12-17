import React, { useEffect, useState } from "react";
import cssStyle from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {loginUser} from "../../redux/authSlice"
// import { userProfileDetail } from "../../redux/authProfileSlice";
// import {fetchPatientList } from "../../redux/authPatientList";
import appStore from "../../Assets/playStore.jpg";
// import LanguageDropdown from "../../Navbar/LanguageDropdown";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

 
  const {token} = useSelector((state)=>state.user)
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
 
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser(loginInfo));
    if(response?.payload?.status ===200){
      localStorage.setItem('token', response.payload.data.user_data.access_token);
       dispatch(userProfileDetail());
       dispatch(fetchPatientList());
      handleSuccess("Login Successful");
       navigate("/dashboard");
    }else{
      console.log("Error while Login----",response.payload)
      handleError(response.payload)
    }
  };
  return (
    <div className={cssStyle.Newcontainer}>
      <div className={cssStyle.leftSection}>
        <div className={cssStyle.overlay}>
       <h1>Bharat TeleClinic</h1>
       {/* <p>{token}</p> */}
       <h2>Anytime, Anywhere Healthcare Delivery!</h2>
       
        <p>Customizable telehealth solution for your clinical practice</p>
        <div className={cssStyle.appStoreDiv}>
        <p>Also available in</p>
        <div className="app-buttons">
          <img src={appStore} alt="App Store" />
        </div>
        </div>
        </div>
      </div>


      <div className={cssStyle.rightSection}>
        <div className={cssStyle.language_dropdown}>
        <LanguageDropdown/>
        </div>
        <i class="fa-regular fa-hospital"></i>
        <h2>Clinic/Doctor Login</h2>

         <form onSubmit={handleLogin}>
         <div>
           <input
            onChange={handleChange}
            autoFocus
            type="email"
            name="email"
            placeholder="Email Id*"
            value={loginInfo.email}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password*"
            value={loginInfo.password}
          />
        </div>
        
        <p>Please read our <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a></p>
  
        <button type="submit" className={cssStyle.loginButton}>
          Login
        </button>
        <span>
          Doesn't have an account ?<Link to="/signup">Signup</Link>
        </span>
        <h1></h1>
      </form>
      </div>
    </div>
  );
};

export default Login;
