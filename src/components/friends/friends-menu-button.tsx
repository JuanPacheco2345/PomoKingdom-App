import MenuModal from "../menu/menu-modal";
import FriendsList from "./friends-list";

function FriendsListMenuButton(){

    return (
        <MenuModal iconId="glass-heart" toRender={ <FriendsList /> }/>
    )
}

export default FriendsListMenuButton;