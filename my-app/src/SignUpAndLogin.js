import React,{useState} from 'react'
import logo from './img/log.svg'
import registerimg from './img/register.svg'
import {connect} from 'react-redux'
import {login,register} from './actions/actions'
import {useHistory } from 'react-router-dom'
import "./signin.css"
const SignUpAndLogin = ({login,isAuthenticated,register}) => { 
      const history=useHistory()
    console.log(isAuthenticated);
   

    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
 


 //////////////////////////////////////////////////////

 //Register
 const [formData,setformData]=useState({
    name:"",
    email:"",
    password:""
})

 const {name,email,password}=formData

 const onChange = (e) =>
 setformData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit=e=>{
     e.preventDefault()
     register({name,email,password})
 }

 //Login
 const [newformData,setnewformData]=useState({
    loginname:"",
  
    loginpassword:""
})

 const {loginname,loginpassword}=newformData

 const onloginChange = (e) =>
 setnewformData({ ...newformData, [e.target.name]: e.target.value })

 const onloginSubmit=e=>{
     e.preventDefault()
     login(loginname,loginpassword);
 }

 if(isAuthenticated===true){
    history.push('/dashboard')
 }

    return (
        <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={(e)=>onloginSubmit(e)}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="loginname" type="text" value={loginname} placeholder="Username" onChange={e=>onloginChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="loginpassword" type="password" value={loginpassword} placeholder="Password" onChange={e=>onloginChange(e)}/>
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
             
            </form>
            <form action="#" className="sign-up-form" onSubmit={e=>onSubmit(e)}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="name" value={name} placeholder="Username" onChange={e=>onChange(e)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email"  value={email}  placeholder="Email" onChange={e=>onChange(e)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" value={password} placeholder="Password" onChange={e=>onChange(e)} />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
            
            </form>
          </div>
        </div>
  
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={()=>  container.classList.add("sign-up-mode")}>
                Sign up
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={()=> container.classList.remove("sign-up-mode")}>
                Sign in
              </button>
            </div>
            <img src={registerimg} className="image" alt="" />
          </div>
        </div>
      </div>
    )
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login,register})(SignUpAndLogin)
