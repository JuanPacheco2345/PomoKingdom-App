import MenuModal from "../menu/menu-modal";
import Settings from "./settings";

function SettingsMenuButton(){
    return (
        <MenuModal iconId="cog" toRender={ <Settings /> }/>
    )
}

export default SettingsMenuButton;