import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  root: {
	  marginBottom: theme.spacing(1)
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function wait(n) {
	return new Promise((res, rej) => {
		setTimeout(res, n);
	});
}

function Proposal({name, data}) {
	const classes = useStyles();


	return (<Card className={classes.root}>

      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.key}
        </Typography>
	  </CardContent>
    </Card>);
}

export default function Users() {

	const classes = useStyles();
	
	const [data, setData] = React.useState({});
	React.useEffect(() => { fetch(
			'https://nomicjs.basicer.repl.co/api/users'
		).then(function (response) {
			return response.json();
		}).then(function (data) {
			setData(data);
			console.log(data);
		})
	}
	,[]);
		

	let result = [];
	for ( let k in data ) {
		result.push(<Proposal name={k} data={data[k]} />)
	}
	return (<React.Fragment>{result}</React.Fragment>);
}