import React from "react";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Markdown from 'markdown-to-jsx';

import { makeStyles } from "@material-ui/core/styles";
import { ObjectInspector, ObjectLabel, ObjectRootLabel } from "react-inspector";

import { shallowEqual, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    doc: { padding: theme.spacing(2) },
    h1: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h2: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h3: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h4: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h5: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h6: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) }, 
    p: { paddingBottom: theme.spacing(2) },     
}));

export default function Banner() {
    const classes = useStyles();
	const data = useSelector(store => store.state);
    let markdown = data ? data.banner : '';
    let options = {
        overrides: {
            h1: { component: Typography, props: { variant: 'h3', className: classes.h1 } },
            h2: { component: Typography, props: { variant: 'h4', className: classes.h2  } },
            h3: { component: Typography, props: { variant: 'h5', className: classes.h3  } },
            h4: { component: Typography, props: { variant: 'h6', className: classes.h4  } },
            p: { component: Typography, props: { variant: 'body1', className: classes.p } },
            a: { component: Link },
            li: { component: Typography, props: { component: 'li'} }
        }
    };

	return (
		<Paper className={classes.doc}>
            {typeof markdown == "string" && <Markdown options={options}>{markdown}</Markdown>}
		</Paper>
	);
}
