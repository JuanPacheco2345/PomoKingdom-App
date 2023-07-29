// generalize this for inventory and shop
import { Card, Tooltip } from "@mui/material";
import { Item } from "./item_interface";

interface Props {
    item?: Item,
    iconId?: string,
    name?: string
}

enum RarityColors {
    Silver        = 1,
    DarkSeaGreen  = 2,
    DeepSkyBlue   = 3,
    MediumOrchid  = 4,
    Crimson       = 5
}

export interface I_IconIds{[index:string]: string}
const IconIds = {
    "Helmet":  "helmet",
    "Sword" :  "sword",
    "Shield":  "shield",
    "Amulet":  "crowned-heart",
    "Chest" :  "vest",
    "Ring":    "fire-ring"
} as I_IconIds

interface I_ItemQuality{[index:string]: string}
const ItemQualityColors = {
    "Bronze" : "DarkGoldenRod",
    "Diamond": "DarkTurquoise",
    "Gold"   : "Gold",
    "Silver" : "Silver",
    "Platinum":  "CornflowerBlue"
} as I_ItemQuality

// Way to combine two colors functions?

const generateRarityColor = (itemRarity: number): string => RarityColors[itemRarity]
const generateItemColor = (itemType: string): string => ItemQualityColors[itemType]
const generateIconId = (itemName: string): string => IconIds[itemName]

interface PlaceholderProps{
    name: string,
    iconId: string
}

function ItemCardPlaceHolder({name, iconId}: PlaceholderProps){
    return (
        <Tooltip title={name ? name : ""}>
            <Card
                className="item-container"
            >
                <span className={`ra ra-${iconId} ra-3x`}></span>
            </Card>
        </Tooltip>
    )
}

function ItemCard({item, iconId, name}: Props){
    // should there be a check for this component? if using placeholder these should never be null, if they pass the !item check they are not null
    if(!item) return <ItemCardPlaceHolder iconId={iconId!} name={name!} />
    else return (
        <Tooltip title={
            <>
                <h3 style={{color: `${generateRarityColor(item.rarity)}`}}>{item.name}</h3>
            </>
        }
        followCursor={true}
        >
            <Card
                className="item-container"
                sx={{
                    border: `${generateRarityColor(item.rarity)} solid 1px`,
                    color: `${generateItemColor(item.type)}`
                }}
            >
                <span 
                    className={`ra ra-${generateIconId(item.name)} ra-3x`} 
                    style={{color: `${generateItemColor(item.type)}`}}
                ></span>
            </Card>
        </Tooltip>
    )
}


export default ItemCard;