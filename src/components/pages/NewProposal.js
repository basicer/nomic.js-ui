import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

import api from "../../api";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	rightButton: {
		float: "right"
	}
}));

export default function NewProposal() {
	let dispatch = useDispatch();
	let history = useHistory();
	let [code, setCode] = React.useState("");
	let classes = useStyles();
	const options = {
		selectOnLineNumbers: true,
		fontSize: 14
	};

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
				theme="monokai"
				onChange={setCode}
				value={code}
				width="100%"
				height="500px"
				fontSize={14}
				name="UNIQUE_ID_OF_DIV"
				editorProps={{ $blockScrolling: true }}
			/>
		</>
	);
}
