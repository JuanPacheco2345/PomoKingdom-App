import { Button } from '@mui/material';
import 'rpg-awesome/css/rpg-awesome.css';
interface MenuButtonProps {
    iconId: string,
    onClick?: () => void;
}

function MenuButton({iconId, onClick}: MenuButtonProps){
    return (
        <Button 
            onClick={onClick}
        sx={{
            color: "black"
        }}
        >
            <i className={`ra ra-${iconId} ra-2x`}></i> 
        </Button>
    )
}

export default MenuButton;