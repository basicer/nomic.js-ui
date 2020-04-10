import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import nacl from "tweetnacl";
import api from "../api";
import { useUser } from "../hooks";

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
	const [state, setState] = React.useState({ key: "", user: "" });
	const dispatch = useDispatch();
	const currentUser = useUser();
	const history = useHistory();

	React.useEffect(() => {
		if (currentUser) history.push("/profile");
	}, [currentUser]);

	const store = useSelector(store => store.state);
	let users = [];
	for (let u in store ? store.users : {}) {
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
	let userError;
	if (state.user.length > 0 && !store.users[state.user]) {
		userError = "Invalid User";
	}

	let h = Buffer.from(nacl.hash(Buffer.from(state.key, "utf8")));
	let o = nacl.sign.keyPair.fromSeed(h.slice(0, 32));

	try {
		let s = Buffer.from(state.key, "base64");
		if (s.length === 64) {
			h = s;
			o = nacl.sign.keyPair.fromSecretKey(s);
		}
	} catch (e) {}

	let pkey = Buffer.from(o.publicKey).toString("base64");
	let keyError;

	let user = store && store.users && store.users[state.user];
	if (state.key.length > 0 && user && pkey !== user.key) {
		keyError = "Incorrect Key";
	}
	let okay = user && state.key.length > 0 && !keyError;

	function login() {
		console.log(o.secretKey);
		if (okay) {
			let sig = nacl.sign(new Uint8Array(1), o.secretKey);
			console.log("SIG", Buffer.from(sig).toString("base64"));
			api.setAuth(state.user, Buffer.from(sig).toString("base64"));
			dispatch({ type: "LOGIN", user: state.user, request: api.get("/login") });
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
					autocomplete="off"
					onSubmit={e => e.preventDefault()}
				>
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
								autoFocus
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
						control={<Checkbox value="remember" color="primary" />}
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
