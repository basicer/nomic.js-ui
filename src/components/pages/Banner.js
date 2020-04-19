import React from "react";
import { Paper, Link, Typography} from "../../material";
import Markdown from 'markdown-to-jsx';

import { makeStyles } from "@material-ui/core/styles";

import { useGamestate } from "../../hooks";

const useStyles = makeStyles(theme => ({
    doc: { padding: theme.spacing(2) },
    h1: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h2: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h3: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h4: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h5: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) },
    h6: { paddingTop: theme.spacing(3), paddingBottom: theme.spacing(1) }, 
    p: { paddingBottom: theme.spacing(2) },     
    code: { display: 'inline', backgroundColor: theme.palette.background.default, padding: theme.spacing(0.5) }
}));

export default function Banner() {
    const classes = useStyles();
    const {state} = useGamestate();
    let markdown = state ? state.banner : '';
    let options = {
        overrides: {
            h1: { component: Typography, props: { variant: 'h3', className: classes.h1 } },
            h2: { component: Typography, props: { variant: 'h4', className: classes.h2  } },
            h3: { component: Typography, props: { variant: 'h5', className: classes.h3  } },
            h4: { component: Typography, props: { variant: 'h6', className: classes.h4  } },
            p: { component: Typography, props: { variant: 'body1', className: classes.p } },
            a: { component: Link },
            li: { component: Typography, props: { component: 'li'} },
            code: { component: 'code', props: { className: classes.code }}
        }
    };

	return (
		<Paper className={classes.doc}>
            {typeof markdown == "string" && <Markdown options={options}>{markdown}</Markdown>}
		</Paper>
	);
}
