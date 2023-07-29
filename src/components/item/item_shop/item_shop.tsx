import React, { useEffect, useState } from "react";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import API from "../../../services/api-call";
import ItemCard from "../item_card";
import { useCharacterUpdate, useGetCharacter } from "../../../context/character_provider";
import { Item } from "../item_interface";
import { Box, maxWidth } from "@mui/system";

interface ItemShopCardProps{
    item: Item,
    handleClick: () => void
}

function ItemShopCard({item, handleClick}: ItemShopCardProps){

    
    return (
        <Box sx={{
            margin: "1em"
        }}>
            <ItemCard item={item} iconId="sword" />
            {(!item.isOwned) && 
            <Button variant="contained" size="small" onClick={handleClick}>{item.cost}</Button>}
        </Box>
    )
}

function ItemShop(){
    const character = useGetCharacter() !;
    const [itemShopInventory, setItemShopInventory] = useState<Item[]>([]);
    const [userGold, setUserGold] = useState(useGetCharacter()?.stats.gold);
    const [userInventory, setUserInventory] = useState<Item[] | []>(useGetCharacter()?.inventory !);
    const updateCharacter = useCharacterUpdate();

    const handleBuyClick = (item: Item) => {
        console.log("ran")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        updateCharacter({...character, inventory: userInventory.concat(item)})
    }

    const flagItemsOwned = ((itemShopItems: Item[]): Item[] => {
        return itemShopItems.map((itemShopItem: Item) => {
            if (userInventory?.some(inventoryItem => inventoryItem === itemShopItem)){
                itemShopItem.isOwned = true;
            }
            return itemShopItem;
        })
    })

    useEffect( () => {
        API.getItemShop().then(res => {
            const itemShopItems = flagItemsOwned(res);
            console.log(itemShopItems)
            setItemShopInventory(itemShopItems);
        });
    }, [])


    return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                    <Typography variant="h5">
                        Your current gold: {userGold}
                        </Typography>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "initial"
                        }}
                    >
                        {itemShopInventory.map((item: Item) => <ItemShopCard key={item._id} item={item} handleClick={() => handleBuyClick(item)} />)}
                    </Grid>
            </Box>
    )
}
export default ItemShop;