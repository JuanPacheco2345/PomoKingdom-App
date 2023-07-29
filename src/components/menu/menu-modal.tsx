import { ClickAwayListener, Dialog } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuButton from "./menu-button";

interface Props {
    toRender: React.ReactNode,
    iconId: string
}

function MenuModal({toRender, iconId}: Props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <> 
            <MenuButton onClick={handleOpen} iconId={iconId} />

            <Dialog
                open={open}
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        {toRender}
                    </div>
                </ClickAwayListener>
            </Dialog>

        </>
    )
}

export default MenuModal;