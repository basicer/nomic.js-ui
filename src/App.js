import logo from "./logo.svg";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";

import clsx from "clsx";
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";

import AppBar from "@material-ui/core/AppBar";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ToggleSwitch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//import Paper from "@material-ui/core/Paper";
//import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";

import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import ListIcon from "@material-ui/icons/List";
import WifiIcon from "@material-ui/icons/Wifi";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
//import NotificationsIcon from "@material-ui/icons/Notifications";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useDispatch, useSelector } from "react-redux";

//import { mainListItems, secondaryListItems } from './listItems';

import Proposals from "./components/Proposals";
import NewProposal from "./components/NewProposal";
import Users from "./components/Users";
import Inspect from "./components/Inspect";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SettingsDialog from "./components/SettingsDialog";

import useStyles from "./styles";

import { useUser } from "./hooks";
import api from "./api";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function EventConnector() {
	let dispatch = useDispatch();
	let settings = useSelector(store => store.settings);
	React.useEffect(() => {
		let base = settings.base;
		let events = new EventSource(base + "/event-stream");
		window.es = events;
		events.onopen = () => console.log("Open");
		dispatch({ type: "NEW_SERVER" });
		events.addEventListener("initial", function(e) {
			dispatch({ type: "INITIAL_STATE", data: JSON.parse(e.data) });
		});

		events.addEventListener("update", function(e) {
			dispatch({ type: "UPDATE_STATE", data: JSON.parse(e.data) });
		});

		return () => {
			events.close();
		};
	}, [settings.base, dispatch]);

	return <></>;
}

function ApiConnector() {
	let store = useSelector(store => store.settings);
	React.useEffect(() => {
		console.log("Base", store.base);
		api.setBase(store.base);
	}, [store.base]);
	return <></>;
}

function MySnackBar() {
	const dispatch = useDispatch();
	const store = useSelector(store => store.snackbar);
	return (
		<Snackbar
			open={!!store}
			autoHideDuration={4000}
			onClose={() => dispatch({ type: "CLOSE_SNACKBAR" })}
		>
			<Alert
				onClose={() => dispatch({ type: "CLOSE_SNACKBAR" })}
				severity={store ? store.severity : "info"}
			>
				{store && store.message}
			</Alert>
		</Snackbar>
	);
}

function Header({ open, handleDrawerOpen }) {
	const history = useHistory();
	const classes = useStyles();
	const user = useUser();

	const [settingsOpen, setSettingsOpen] = React.useState(false);
	const handleClickOpen = () => {
		setSettingsOpen(true);
	};

	const handleClose = () => {
		setSettingsOpen(false);
	};

	return (
		<AppBar
			position="absolute"
			className={clsx(classes.appBar, open && classes.appBarShift)}
		>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}
				>
					Nomic.js
				</Typography>
				{/*
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
		  */}

				<IconButton color="inherit" onClick={handleClickOpen}>
					<SettingsIcon />
				</IconButton>
				<IconButton color="inherit" onClick={() => history.push("/login")}>
					<AccountCircleIcon />
				</IconButton>
				{user ? user.name : ""}
			</Toolbar>
			<SettingsDialog
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				settingsOpen={settingsOpen}
			/>
		</AppBar>
	);
}

export default function App() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isDark = useMediaQuery("(prefers-color-scheme: dark)");
	const themeType = useSelector(store => store.theme);
	if (!themeType) dispatch({ type: "THEME", theme: isDark ? "light" : "dark" });

	const [open, setOpen] = React.useState(true);

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const theme = createMuiTheme({
		palette: {
			//type:
			type: themeType
		}
	});

	return (
		<>
			<EventConnector />
			<ApiConnector />
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<div className={classes.root}>
						<CssBaseline />
						<Header open={open} handleDrawerOpen={handleDrawerOpen} />
						<Navigation open={open} handleDrawerClose={handleDrawerClose} />
						<main className={classes.content}>
							<div className={classes.appBarSpacer} />
							<Container maxWidth="lg" className={classes.container}>
								<Switch>
									<Route path="/proposals/new">
										<NewProposal />
									</Route>
									<Route path="/proposals">
										<Proposals />
									</Route>
									<Route path="/users">
										<Users />
									</Route>
									<Route exact path="/">
										<Inspect />
									</Route>
									<Route exact path="/login">
										<Login />
									</Route>
								</Switch>
								<Grid container spacing={3}>
									{/* Chart */}
									<div />
									{/* Recent Deposits */}
									<div />
									{/* Recent Orders */}
									<div />
								</Grid>
							</Container>
						</main>
					</div>
					<MySnackBar />
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}
