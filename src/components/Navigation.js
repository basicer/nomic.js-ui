import React from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";

import styles from "../styles";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";

import { NavLink as RouterLink } from "react-router-dom";
import { 
	List, ListItem, ListItemIcon, ListItemText,
	ListItemSecondaryAction, Switch, AccountTreeIcon,
} from "../material";

import {useSimulator} from "../hooks";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


//import ListSubheader from "@material-ui/core/ListSubheader";

//import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
//import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import DescriptionIcon from '@material-ui/icons/Description';

//import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles(styles);

export default function Navigation({ open, handleDrawerClose }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const store = useSelector(x => x);
	const simuator = useSimulator();

	let links = [
		["Banner", "/", <DescriptionIcon />, {exact: true}],
		["Inspect", "/inspect", <DashboardIcon />],
		["Proposals", "/proposals", <ListIcon />],
		["Users", "/users", <PeopleIcon />],
		["Crypto", "/crypto", <LayersIcon />]
	];
	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				{
					links.map(([name, url, icon, extra={}]) =>
						<ListItem
							{...extra}
							button
							activeClassName="Mui-selected"
							component={RouterLink}
							key={name}
							to={url}
						>
							<ListItemIcon>
								{icon}
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					)
				}
			<Divider />
			<ListItem>
				<ListItemIcon><AccountTreeIcon /></ListItemIcon>
				<ListItemText primary="Simulator" />
				<ListItemSecondaryAction hidden={!open}>
				<Switch
					edge="end"
					onChange={v => dispatch({type: 'TOGGLE_SIMULATOR', value: v})}
					checked={!!store.simulator}
				/>
				</ListItemSecondaryAction>
			</ListItem>
			</List>
		</Drawer>
	);
}
