import './GlobalButton.style.css';
import Button from '@mui/material/Button';

const GlobalButton = ({Title, Type}) => {
    return ( 
        <div className="Global-button">
            <Button variant="contained" type={Type} sx={{
                backgroundColor: "#6C63FF",
                "&:hover" : {
                    backgroundColor: "#37328a",
                },
            }}>{Title.toUpperCase()}</Button>
        </div>
     );
}
 
export default GlobalButton;