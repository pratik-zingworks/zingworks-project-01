// import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form'
import {Link} from 'react-router-dom'
import GlobalButton from '../GlobalButton/GlobalButton.component';
import Input from '../Input/Input.component';
import './SignUp.style.css';

const SignUp = () => {
    const {handleSubmit, control} = useForm();

   
    return ( 
        <div className="SignUp-container" >
            <div className="SignUp-head">
                <h3 style={{
                    color: "#37328a",
                }}>SIGN UP</h3>   
            </div>
            <div className="SignUp-body">
                <form action="#" onSubmit={handleSubmit(data => console.log(data))} >
                    <div className="SignUp-alignment">
                        <div className="SignUp-flex-div-one">                        
                            <Controller
                            control={control}
                            name="firstName"
                            defaultValue = ""
                            rules={{ required: 'First name required', 
                          }}
                            render={({field : { value, onChange }, fieldState: { error }  }) => (
                                <Input Type = "text" Label = "First Name"
                                Avalue = {value} EERR = {error} OnChange = {onChange} />
                            )}
                            
                            />
                        </div>
                        <div className="SignUp-flex-div-two">
                            <Controller
                            control={control}
                            name="lastName"
                            defaultValue = ""
                            rules={{ required: 'Last name required', }}
                            render={({field : { value, onChange }, fieldState: { error }  }) => (
                                <Input Type = "text" Label = "Last Name"
                                Avalue = {value} EERR = {error} OnChange = {onChange} />

                            )}
                            />
                        </div>
                    </div>

                            <Controller
                            control={control}
                            name="email"
                            defaultValue = ""
                            rules={{ required: 'e-mail required', pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }, }}
                            render={({field : { value, onChange }, fieldState: { error }  }) => (
                                <Input Type = "email" Label = "e-mail"
                                Avalue = {value} EERR = {error} OnChange = {onChange} />

                            )}

                            />
                            <Controller
                            control={control}
                            name="password"
                            defaultValue = ""
                            rules={{ required: 'Password Reuired' }}
                            render={({field : { value, onChange }, fieldState: { error }  }) => (
                                <Input Type = "password" Label = "Password"
                                Avalue = {value} EERR = {error} OnChange = {onChange} />

                            )}
                            />
                            <Controller
                            control={control}
                            name="confirmPassword"
                            defaultValue = ""
                            rules={{ required: 'Confirm password' }}
                            render={({field : { value, onChange }, fieldState: { error }  }) => (
                                <Input Type = "password" Label = "Confirm password"
                                Avalue = {value} EERR = {error} OnChange = {onChange} />

                            )}
                            />
                    
                    {/* <Input Type = "password" Label = "Password" HandleChange = {(e) => {setPassword(e)}} /> */}
                    
                    <div className="bottomHandler">
                        <p>Do you have an account? <Link to="/" >Sign In</Link></p>
                        <GlobalButton Title = "sign up" Type = "submit"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;