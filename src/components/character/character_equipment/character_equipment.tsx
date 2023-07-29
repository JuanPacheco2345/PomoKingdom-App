import {Card} from '@mui/material';
import 'rpg-awesome/css/rpg-awesome.css';
import './character_equipment.css';
import ItemCard from '../../item/item_card';
import { Item } from '../../item/item_interface';

interface I_CharacterEquipped {
    "Head"       ?: Item,
    "Chest"      ?: Item,
    "Right Hand" ?: Item,
    "Boots"      ?: Item,
    "Amulet"     ?: Item,
    "Ring One"   ?: Item,
    "Ring Two"   ?: Item
}   

// export interface Item {
//     cost: number,
//     date: Date,
//     name: string,
//     type: string,
//     _id: string,
//     rarity: number,
//     isOwned?: boolean
// }

function CharacterEquipment(){
    
    return (
        <Card className='loadout-container'
            sx={{
                backgroundColor: "rgba(249, 249, 249, 0.4)",
                boxShadow: 1,
            }}
        >
            <ItemCard item={{name: "Helmet", type: "Platinum", rarity: 5 }} />

            <div className="item-row-container">
                <ItemCard />
                {/* [1, 2] */}
                <ItemCard item={{name: "Chest", type: "Gold", rarity: 1 }} />
                <ItemCard  item={{name: "Sword", type: "Bronze", rarity: 3 }} />
            </div>
            {/* [3] */}
            <ItemCard name="Boots" iconId="boot-stomp" />
            <div className="item-row-container">
                {/* [4, 5, 6] */}
                <ItemCard name="Amulet" iconId="crowned-heart" />
                <ItemCard item={{name: "Ring", type: "Silver", rarity: 2 }}  />
                <ItemCard name="Ring" iconId="fire-ring" />
            </div>
        </Card>
    )
}

export default CharacterEquipment;