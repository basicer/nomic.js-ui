import React, { useState, useMemo } from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography, Divider, Card, CardContent} from "../../material";
import { useGamestate } from "../../hooks";
import Moment from 'react-moment';


const useStyles = makeStyles(theme => ({
    box: {
        marginBottom: theme.spacing(1)
    },
    card: {
    },
    title: {
        fontSize: 14,
    },
    content: {

    }
}));

function Stat({title, children, size=2, component="h5"}) {
    let classes = useStyles();
    return (<Grid item md={size*2} xs={size*3}><Card className={classes.card}>
        <CardContent className={classes.content}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {title} <Divider />
        </Typography>
        <Typography variant={component}>
            {children}
        </Typography>
        </CardContent>
    </Card></Grid>)
}

export default function Profile({match}) {
    let classes = useStyles();
    let {state} = useGamestate();
    console.log('State', state);
    let name = match.params.user;
    let user = state && state.users && state.users[name];
    if (!user) return <></>;

    return (
        <>
            <Typography variant="h2" >{name}</Typography>
            <Divider className={classes.box} />
            <Grid container spacing={2}>
            <Stat title="Last Seen"><Moment durationFromNow date={new Date(user.lastSeen)} /></Stat>
            <Stat title="Goes Inactive"><Moment duration={new Date()} date={new Date(user.lastSeen + state.inactivityTimeout)} /></Stat>
            <Stat title="Key" component="body1" size={3}><pre>{user.key}</pre></Stat>
            </Grid>
        </>
    );
}