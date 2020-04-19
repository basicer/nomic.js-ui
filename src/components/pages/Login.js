import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { useGamestate, useUser } from "../../hooks";
import { useHistory } from "react-router-dom";

import nacl from "tweetnacl";
import api from "../../api";


const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignIn() {
	const classes = useStyles();
	const [state, setState] = React.useState({ 
		key: localStorage.secretKey || "",
		user: localStorage.user || "",
		remember: false 
	});
	const dispatch = useDispatch();
	const currentUser = useUser();
	const history = useHistory();

	React.useEffect(() => {
		if (currentUser) history.push(`/users/${currentUser.name}`);
	}, [currentUser, history]);

	const gameState = useGamestate().state;
	let users = [];
	for (let u in gameState ? gameState.users : {}) {
		users.push({ title: u });
	}

	let onKeyChanged = function(event) {
		setState({ ...state, key: event.target.value });
	};
	let onUserChanged = function(event, value) {
		console.log(event);
		if (!event) return;
		setState({ ...state, user: value });
	};

	if (!gameState || !gameState.users) return <></>;

	let userError;
	if (state.user.length > 0 && !gameState.users[state.user]) {
		userError = "Invalid User";
	}

	let o = require('../../crypto').deriveKey(state.key);

	let pkey = o.public.toString("base64");
	let keyError;

	let user = gameState && gameState.users && gameState.users[state.user];
	console.log("Seeking", pkey);
	if (state.key.length > 0 && user && pkey !== require('../../crypto').isolateKey(user.key)) {
		keyError = "Incorrect Key";
	}
	let okay = user && state.key.length > 0 && !keyError;

	function login() {
		if (okay) {
			let sig = nacl.sign(new Uint8Array(1), o.secret);
			console.log("SIG", Buffer.from(sig).toString("base64"));
			api.setAuth(state.user, Buffer.from(sig).toString("base64"));
			dispatch({ type: "LOGIN", user: state.user, request: api.get("/login") });
			if (state.remember) {
				localStorage.user = state.user;
				localStorage.secretKey = Buffer.from(o.secret).toString("base64");
			}
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form
					className={classes.form}
					autoComplete="off"
					onSubmit={e => e.preventDefault()}
				>
					{o.type}
					<Autocomplete
						id="combo-box-demo"
						options={users}
						getOptionLabel={option => option.title}
						style={{ width: "100%" }}
						inputValue={state.user}
						onInputChange={onUserChanged}
						renderInput={params => (
							<TextField
								{...params}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="usridx"
								label="Username"
								name="usridx"
								error={!!userError}
								helperText={userError}
								autoComplete="off"
							/>
						)}
					/>
					<TextField
						//variant="outlined"
						margin="normal"
						required
						fullWidth
						name="kkey"
						label="Password"
						type="password"
						id="key"
						autoComplete="off"
						onChange={onKeyChanged}
						error={!!keyError}
						helperText={keyError}
						value={state.key}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" checked={state.remember} onClick={() => setState({...state, remember: !state.remember})} />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={!okay}
						onClick={() => login()}
					>
						Sign In
					</Button>
					{/*
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          */}
				</form>
			</div>
		</Container>
	);
}
