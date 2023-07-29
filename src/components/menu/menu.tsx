import { Card } from '@mui/material';
import FriendsListMenuButton from '../friends/friends-menu-button';
import InventoryMenuButton from '../inventory/inventory-menu-button';
import ItemShopMenuButton from '../item/item_shop/item_shop__menu_button';
import SettingsMenuButton from '../settings/settings-menu-button';

function Menu(){
    return (
        <Card>
            <div>
                <FriendsListMenuButton />
                <SettingsMenuButton />
                <InventoryMenuButton />
            </div>
                <ItemShopMenuButton />
        </Card>
    )
}

export default Menu;