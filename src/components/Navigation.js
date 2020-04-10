import React from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";

import useStyles from "../styles";

//import List from "@material-ui/core/List";
//import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
//import Container from "@material-ui/core/Container";
//import Grid from "@material-ui/core/Grid";

import { NavLink as RouterLink } from "react-router-dom";


import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import ListSubheader from "@material-ui/core/ListSubheader";

//import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
//import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
//import AssignmentIcon from "@material-ui/icons/Assignment";

export default function Navigation({ open, handleDrawerClose }) {
	const classes = useStyles();
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
			<div>
				<ListItem
					exact
					button
					activeClassName="Mui-selected"
					component={RouterLink}
					to="/"
				>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Inspect" />
				</ListItem>
				<ListItem
					button
					activeClassName="Mui-selected"
					component={RouterLink}
					to="/proposals"
				>
					<ListItemIcon>
						<ListIcon />
					</ListItemIcon>
					<ListItemText primary="Proposals" />
				</ListItem>
				<ListItem
					button
					activeClassName="Mui-selected"
					component={RouterLink}
					to="/users"
				>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary="Users" />
				</ListItem>
				<ListItem
					button
					activeClassName="Mui-selected"
					component={RouterLink}
					to="/crypto"
				>
					<ListItemIcon>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText primary="Crypto" />
				</ListItem>
			</div>
		</Drawer>
	);
}
