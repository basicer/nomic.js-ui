import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";


import { useAPI } from "../../hooks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	rightButton: {
		float: "right"
	}
}));

export default function NewProposal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const api = useAPI();
	let [code, setCode] = React.useState("");
	let classes = useStyles();
	const paletteType = useSelector(store => store.theme);

	function sendProposal() {
		dispatch({
			type: "NEW_PROPOSAL",
			request: api.post("/propose", { code: code }),
			onSuccess: () => {
				history.push("/proposals");
				dispatch({
					type: "SNACKBAR",
					message: "Proposal Sent!",
					severity: "success"
				});
			}
		});
	}

	return (
		<>
			<Button
				variant="contained"
				className={classes.rightButton}
				size="large"
				color="primary"
				onClick={sendProposal}
				endIcon={<SendIcon />}
			>
				Submit
			</Button>
			<Typography variant="h3">New Proposal</Typography>
			<Divider />
			<br />
			<AceEditor
				mode="javascript"
				theme={paletteType === "light" ? "github" : "monokai"}
				onChange={setCode}
				value={code}
				width="100%"
				height="500px"
				fontSize={14}
				name="new-proposal-ace"
				editorProps={{
					$blockScrolling: true
				}}
				setOptions={{
					useWorker: true
				}}
			/>
		</>
	);
}
