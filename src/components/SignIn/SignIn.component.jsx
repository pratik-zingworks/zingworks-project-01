// import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form'
import GlobalButton from '../GlobalButton/GlobalButton.component';
import Checkbox from '@mui/material/Checkbox';
import Input from '../Input/Input.component';
import './SignIn.style.css';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Remember me' } };


const SignIn = () => {
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    const {handleSubmit, control} = useForm();

   
    return ( 
        <div className="SignIn-container" >
            <div className="SignIn-head">
                <h3 style={{
                    color: "#37328a",
                }}>SIGN IN</h3>   
            </div>
            <div className="SignIn-body">
                <form action="#" onSubmit={handleSubmit(data => console.log(data))} >
                <Controller
                    control={control}
                    name="userName"
                    defaultValue = ""
                    rules={{ required: 'First name required' }}
                    render={({field : { value, onChange }, fieldState: { error }  }) => (
                        <Input Type = "text" Label = "Username"
                        Avalue = {value} EERR = {error} OnChange = {onChange} />

                    )}
                    />
                    <Controller
                    control={control}
                    name="password"
                    defaultValue = ""
                    rules={{ required: 'Password Reuired' }}
                    render={({field : { value, onChange }, fieldState: { error }  }) => (
                        <Input Type = "password" Label = "password"
                        Avalue = {value} EERR = {error} OnChange = {onChange} />

                    )}
                    />
                    
                    {/* <Input Type = "password" Label = "Password" HandleChange = {(e) => {setPassword(e)}} /> */}
                    <span className="bottomHandlerCheckbox">
                    <Checkbox {...label} sx={{
                        color: "#37328a",
                        marginLeft: "-11px",
                        '&.Mui-checked': {
                            color: "#37328a",
                          },
                    }} />
                    <label>Remember me.</label>

                    </span>
                    <div className="bottomHandler">
                        <p>Don't have an account? <Link to="/signup" >Sign Up</Link></p>
                        <GlobalButton Title = "sign in" Type = "submit"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignIn;