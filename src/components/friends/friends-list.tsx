
import { Button, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import API from "../../services/api-call";

interface Friend {
    _id: string,
    user_name: string
}

interface Friends{
    friends: Friend[],
    num_friends: number
}

function FriendsList(){
    const [friends, setFriends] = useState<Friends | undefined>()

    const handleClick = () => {
        
    }

    useEffect(() => {
        API.getFriendsList().then(response => setFriends(response))
    }, [])

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            width: "10em"
        }}>
            <List>
                {friends?.friends.map(friend => <ListItem></ListItem>)}
            </List>
        <Button>
            Add Friend
        </Button>
        </Box>

    )
}

export default FriendsList;