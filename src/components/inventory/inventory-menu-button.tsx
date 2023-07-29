import MenuModal from "../menu/menu-modal";
import Inventory from "./inventory";

function InventoryMenuButton(){
    return (
        <MenuModal iconId="ammo-bag" toRender={ <Inventory /> }/>
    )
}

export default InventoryMenuButton;