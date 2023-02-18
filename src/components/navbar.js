import React from 'react'
import "../styles/loginPage.css"
const loginFormstyle={
   marginLeft:"70%",
   fontSize:"x-large",
   color:"#ffffff"
}
const hrStyle={
   marginTop:"10px"
}
function Navbar() {
  return (
   <>
   <div className="container">
    <label for="show" class="" title="close"></label>
    <div className="text" style={loginFormstyle}>
        Admin Login
    </div>
    <hr style={hrStyle} />
    <br/>
    <form method="post" name="form">
        <div className="data">
           
            <input type="text" name="Username" placeholder="Username or Email Address" required/>
        </div>
        <div className="data">
          
            <input type="password" name="password" placeholder="Password" required/>
        </div>
        <div className="forgot-pass">
            <a href="">Forgot Password?</a>
        </div>
        <div className="btn">
            <button type="submit">Login</button>
        </div>
    </form>
    <hr style={hrStyle}/>
</div>
    </>
  )
}

export default Navbar