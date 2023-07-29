import { Card, Stack } from "@mui/material";
import { useGetCharacter } from "../../context/character_provider";
import ItemCard from "../item/item_card";

function Inventory(){
    const inventory = useGetCharacter()?.inventory;

    if (inventory?.length === 0){
        return (
            <Card sx={{padding: "5px"}}>
                <h1>You have no items</h1>
            </Card>
        )
    } 
    
    else {
        return (
            <Card>
                <Stack>
                    {inventory?.map((item: any) => {
                        console.log(inventory)
                        return <ItemCard key={(Math.random).toString()} iconId="sword" name={item.name}/>
                    })}
                </Stack>
            </Card>
        )
    }

}

export default Inventory;