import React from "react";
import {Menu, IconButton, MenuItem} from "../material";

import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function DotButton({ actions }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={handleClose}
            >
                {Object.entries(actions).map(([name, action]) => <MenuItem onClick={() => {
                    action();
                    handleClose();
                }}>{name}</MenuItem>)}
            </Menu>
        </>
    )
}