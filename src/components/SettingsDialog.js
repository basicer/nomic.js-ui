import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ToggleSwitch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import DnsIcon from "@material-ui/icons/Dns";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SettingsDialog({
	settingsOpen,
	handleClickOpen,
	handleClose
}) {
	const store = useSelector(x => x);
	const dispatch = useDispatch();
	const [state, setState] = React.useState({
		base: store.settings.base
	});

	const Transition = undefined;

	function apply() {
		dispatch({ type: "SET_SETTING", key: "base", value: state.base });
		handleClose();
	}

	return (
		<Dialog
			fullWidth
			open={settingsOpen}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			TransitionComponent={Transition}
		>
			<DialogTitle id="alert-dialog-title">{"Settings"}</DialogTitle>
			<List>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<SettingsBrightnessIcon />
					</ListItemIcon>
					<ListItemText id="switch-list-label-wifi" primary="Dark Mode" />
					<ListItemSecondaryAction>
						<ToggleSwitch
							edge="end"
							onChange={() =>
								dispatch({
									type: "THEME",
									theme: store.theme === "light" ? "dark" : "light"
								})
							}
							checked={store.theme !== "light"}
							inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
						/>
					</ListItemSecondaryAction>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<DnsIcon />
					</ListItemIcon>
					<ListItemText id="switch-list-label-wifi" primary="Server" />
					<ListItemSecondaryAction>
						<TextField
							value={state.base}
							onChange={e => setState({ ...state, base: e.target.value })}
							checked={true}
							inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
						/>
					</ListItemSecondaryAction>
				</ListItem>
				{/*
        <Divider />
        <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem>
        */}
			</List>
			<Divider />
			<DialogActions>
				<Button onClick={handleClose} color="secondary" variant="contained">
					Cancel
				</Button>
				<Button onClick={apply} color="primary" variant="contained" autoFocus>
					Apply
				</Button>
			</DialogActions>
		</Dialog>
	);
}
