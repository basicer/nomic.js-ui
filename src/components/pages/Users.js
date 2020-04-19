import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//import CardActions from "@material-ui/core/CardActions";
//import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import ShareIcon from "@material-ui/icons/Share";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Moment from 'react-moment';

import { useHistory } from "react-router-dom";
import { useGamestate } from "../../hooks";

import DotButton from "../DotButton";

const useStyles = makeStyles(theme => ({
	root: {
		marginBottom: theme.spacing(1)
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

function User({ name, data }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	let actions = {
		"Profile": () => history.push(`/users/${name}`)
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={<Avatar className={classes.avatar}></Avatar>}
				action={
					<DotButton actions={actions} />
				}
				title={name}
				titleTypographyProps={{ variant: "h5" }}
				subheader={data.lastSeen ? (<span>Last seen <Moment withTitle fromNow date={new Date(data.lastSeen)} /></span>) : ""}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{data.key}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default function Users() {
	const {state} = useGamestate();
	const data = state && state.users;

	let result = [];
	for (let k in data) {
		result.push(<User name={k} data={data[k]} />);
	}
	return <React.Fragment>{result}</React.Fragment>;
}
