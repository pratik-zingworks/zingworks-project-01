import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './Input.style.css';

const Input = ({Label, Type, Avalue, OnChange, EERR}) => {
    var icon = null;


    if(Type === "text"){
        icon = <PersonIcon sx={{
            color: "#6C63FF",
        }} />
        if(Label === "First Name" || Label === "Last Name"){
            icon = null
        }
    }else if(Type === "password"){
        icon = <LockIcon sx={{
            color: "#6C63FF",
        }} />
        if(Label === "Confirm password"){
            icon = <PasswordIcon sx={{
                color: "#6C63FF",
            }} />}
    }
    else if(Type === "email"){
        icon = <AlternateEmailIcon sx={{
            color: "#6C63FF",
        }} />
    }
    
    else{
        icon = null
    }
    return ( 
        <div className="SignIn-inputs">

            <TextField 
            label= {Label} 
            variant="outlined"
            error = {!!EERR}
            helperText = {EERR ? EERR.message : null} 
            type = {Type}
            value = {Avalue}
            // onChange = {Rchange}
            InputProps={{
                endAdornment: (
                    icon
                    ),
               }}
               onChange = {OnChange}
               sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#6C63FF',
                    }}
            }} 
            onKeyPress = {(e) => {
                if(e.charCode === 32){
                    e.preventDefault();
                }
            }}
            fullWidth />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </div>
     );
}
 
export default Input;