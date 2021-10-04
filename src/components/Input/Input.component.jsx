import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


import './Input.style.css';

const Input = ({Label, Type, HandleChange}) => {
    var icon = null;

    if(Type === "text"){
        icon = <PersonIcon />
    }else if(Type === "password"){
        icon = <LockIcon />
    }
    return ( 
        <div className="SignIn-inputs">
         
            <TextField 
            label= {Label} 
            variant="outlined" 
            type = {Type}
            InputProps={{
                endAdornment: (
                    icon
                    ),
               }}
               onChange = {e => HandleChange(e.target.value)}
            fullWidth />
            
        </div>
     );
}
 
export default Input;