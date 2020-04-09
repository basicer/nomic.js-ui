import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import Highlight from "react-highlight.js";
import api from "./api";

const useStyles = makeStyles(theme => ({
	root: {
		marginBottom: 20
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	red: {
		backgroundColor: red[500]
	},
	green: {
		backgroundColor: green[500]
	},
	fab: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2)
	}
}));

function wait(n) {
	return new Promise((res, rej) => {
		setTimeout(res, n);
	});
}

function Proposal({ name, data }) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [expanded, setExpanded] = React.useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						aria-label="recipe"
						className={data.status != "passed" ? classes.red : classes.green}
					>
						{name}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={`Proposal #${name}`}
				subheader={`by ${data.author} at ${new Date(data.created).toString()}`}
			/>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						<strong>Votes: </strong>
						<span>{data.votes.join(", ")}</span>
						<br />
						<strong>Code: </strong>
						<Highlight>{data.code}</Highlight>
					</Typography>
				</CardContent>
			</Collapse>
			<CardActions disableSpacing>
				<IconButton
					aria-label="vote up"
					onClick={() => {
						dispatch({
							type: "USERS",
							request: api.post("/vote", { id: parseInt(name) })
						});
					}}
				>
					<ThumbUpIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default function Proposals() {
	const classes = useStyles();

	const data = useSelector(store => store.state && store.state.proposals);

	let result = [];
	for (let k in data) {
		result.push(<Proposal key={k} name={k} data={data[k]} />);
	}
	if (result.length == 0) {
		result.push(<h1 key={0}>None yet...</h1>);
	}
	return (
		<React.Fragment>
			<Fab color="primary" aria-label="add" className={classes.fab}>
				<AddIcon />
			</Fab>
			{result}
		</React.Fragment>
	);
}
