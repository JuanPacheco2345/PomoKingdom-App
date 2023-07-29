import {Avatar, Box, Card} from '@mui/material';
import './character-box.css'
import { useGetCharacter } from '../../../context/character_provider';

function CharacterBox(){
    const character = useGetCharacter();

    return (
        <Box 
            boxShadow={1}
            sx= {{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1em",
                width: 'fit-content',
            }}>
                <Avatar variant='square' src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Tengen-Uzui-Tengen-Article-HEADER.png" alt='failure' sx={{width: 82, height: 82}}/>
                
                <Box sx ={{
                    display: "flex",
                    flexDirection: "row",
                    justifyontent: "center",
                    alignItems: "center"
                }}>
                <p>{character?.char_name}</p> 
                <span className={`ra ra-ball ra-1x`}></span><p >{character?.stats?.gold}</p>
                </Box>
        </Box>
    )
}

export default CharacterBox;