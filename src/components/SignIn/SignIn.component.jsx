import { useState } from 'react';
import GlobalButton from '../GlobalButton/GlobalButton.component';
import Input from '../Input/Input.component';
import './SignIn.style.css';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    return ( 
        <div className="SignIn-container" >
            <div className="SignIn-head">
                <h3>SIGN IN</h3>   
            </div>
            <div className="SignIn-body">
                <form action="#"  data-testid = "hello-1" onSubmit = {e => {
                    e.preventDefault();

                    window.alert("hey " + userName + " Welcom your pass is " + password)
                }}>
                    <Input Type = "text" Label = "Username" HandleChange = {(e) => {setUserName(e)}}/>
                    <Input Type = "password" Label = "Password" HandleChange = {(e) => {setPassword(e)}} />
                    <span className="bottomHandlerCheckbox">
                        <input type="checkbox" name="Remember me." />
                        <label>Remember me.</label>
                    </span>
                    <div className="bottomHandler">
                        <p>Don't have an account? Sign Up</p>
                        <GlobalButton Title = "sign in" Type = "submit"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignIn;