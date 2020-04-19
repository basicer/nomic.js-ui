import logo from "./logo.svg";
import "./App.css";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";

import { blue, pink } from "@material-ui/core/colors";

import clsx from "clsx";
import {
	makeStyles,
	ThemeProvider,
	useTheme,
	darken,
	createMuiTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";



import { useDispatch, useSelector } from "react-redux";

//import { mainListItems, secondaryListItems } from './listItems';

import {
	Alert, Snackbar, AppBar, Toolbar, IconButton, MenuIcon, Typography, 
	SettingsIcon, AccountCircleIcon, Container, Grid, Dialog, CircularProgress,
	Backdrop
} from "./material"

import NewProposal from "./components/pages/NewProposal";
import Users from "./components/pages/Users";
import Inspect from "./components/pages/Inspect";
import Login from "./components/pages/Login";
import Navigation from "./components/Navigation";
import SettingsDialog from "./components/SettingsDialog";
import Crypto from "./components/pages/Crypto";
import Profile from "./components/pages/Profile";



import styles from "./styles";

import { useUser } from "./hooks";
import api from "./api";

const Proposals = React.lazy(() => import("./components/pages/Proposals"));
const Banner = React.lazy(() => import("./components/pages/Banner"));


const useStyles = makeStyles(styles);

function MyAlert(props) {
	return <Alert elevation={6} variant="filled" {...props} />;
}

function EventConnector() {
	let dispatch = useDispatch();
	let settings = useSelector(store => store.settings);
	React.useEffect(() => {
		let base = settings.base;
		let events = new EventSource(base + "/event-stream");
		window.es = events;
		events.onopen = () => {
			dispatch({ type: "CONNECTION_STATE", value: 'connected' });
		};
		events.onerror = () => {
			dispatch({ type: "CONNECTION_STATE", value: 'disconnected' });
		};
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
			<MyAlert
				onClose={() => dispatch({ type: "CLOSE_SNACKBAR" })}
				severity={store ? store.severity : "info"}
			>
				{store && store.message}
			</MyAlert>
		</Snackbar>
	);
}

function Header({ open, handleDrawerOpen }) {
	const history = useHistory();
	if ( localStorage.redirect ) {
		history.replace(localStorage.redirect);
		delete localStorage.redirect;
	}
	const classes = useStyles();;
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
	const data = useSelector(store => store.state && store.state.proposals);
	const isDark = useMediaQuery("(prefers-color-scheme: dark)");
	const paletteType = useSelector(store => store.theme);
	if (!paletteType) dispatch({ type: "THEME", theme: isDark ? "light" : "dark" });

	const theme = React.useMemo(() => {
		const nextTheme = createMuiTheme(
			{
				palette: {
					primary: {
						main: paletteType === 'light' ? blue[700] : blue[200],
					},
					secondary: {
						main: paletteType === 'light' ? darken(pink.A400, 0.1) : pink[200],
					},
					type: paletteType,
					background: {
						//default: paletteType === 'light' ? '#fff' : '#121212',
					},
				},
			},
		);

		//nextTheme.palette.background.level2 =
		//	paletteType === 'light' ? nextTheme.palette.grey[100] : '#333';

		//nextTheme.palette.background.level1 =
		//	paletteType === 'light' ? '#fff' : nextTheme.palette.grey[900];

		return nextTheme;
	}, [paletteType]);

	const [open, setOpen] = React.useState(undefined);
	const shouldStartClosed = useMediaQuery(theme.breakpoints.up('md'));
	let amOpen = typeof open === "undefined" ? shouldStartClosed : open;

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<EventConnector />
			<ApiConnector />
			<BrowserRouter>
				<Suspense fallback={<Backdrop className={classes.backdrop}><CircularProgress size="200px" /></Backdrop>}>
				<ThemeProvider theme={theme}>
					<div className={classes.root}>
						<CssBaseline />
						<Header open={amOpen} handleDrawerOpen={handleDrawerOpen} />
						<Navigation open={amOpen} handleDrawerClose={handleDrawerClose} />
						<main className={classes.content}>
							<div className={classes.appBarSpacer} />
							<Container maxWidth="lg" className={classes.container}>
								<Switch>
									<Route path="/users/:user" component={Profile} />
									<Route path="/proposals/new" component={NewProposal} />
									<Route path="/proposals" component={Proposals} />
									<Route path="/users" component={Users} />
									<Route exact path="/" component={Banner} />
									<Route exact path="/inspect" component={Inspect} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/crypto" component={Crypto} />
									
								</Switch>
							</Container>
						</main>
					</div>
					<Backdrop
						open={!data}
						className={classes.backdrop}
					>
						<CircularProgress size="200px" />
					</Backdrop>
					<MySnackBar />
				</ThemeProvider>
				</Suspense>
			</BrowserRouter>
		</>
	);
}
