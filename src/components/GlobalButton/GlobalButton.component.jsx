import './GlobalButton.style.css';
import Button from '@mui/material/Button';

const GlobalButton = ({Title, Type}) => {
    return ( 
        <div className="Global-button">
            <Button variant="contained" type={Type}>{Title.toUpperCase()}</Button>
        </div>
     );
}
 
export default GlobalButton;