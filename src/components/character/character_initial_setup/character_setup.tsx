import { Button, Dialog, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import API from "../../../services/api-call";

function CharacterSetup(){
    const [open, setOpen] = useState(true);
    const [characterName, setCharacterName] = useState("");
    const handleChange = (e: any) => setCharacterName(e.target.value)
    const handleClick = () => {
        setOpen(false);
        API.setName(characterName).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <> 
            <Dialog
                open={open}
            >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "4em"
                    }}>
                        <Typography>Welcome to PomoKingdom</Typography>
                        <Input placeholder="Character Name" onChange={handleChange}></Input>
                        <Button onClick={handleClick} variant="contained">Submit</Button>
                    </Box>
            </Dialog>

        </>
    )
}

export default CharacterSetup;

