import MenuModal from "../../menu/menu-modal";
import ItemShop from "./item_shop";
function ItemShopMenuButton(){
    return (
        <MenuModal toRender={<ItemShop />} iconId="capitol"/>
    )
}

export default ItemShopMenuButton;