import React from "react";
import {Tabs, Tab, Paper} from "../../material";
import { ObjectInspector, ObjectLabel, ObjectRootLabel } from "react-inspector";
import { useGamestate } from "../../hooks";
import { makeStyles } from "@material-ui/core/styles";
import Highlight from "react-highlight.js";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

function TabPanel({value, index, children}) {
	return <Typography hidden={value!==index}>{children}</Typography>
}

const useStyles = makeStyles(theme => ({
	padded: {
		padding: theme.spacing(2)
	}
}));

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { error: error };
	}

	componentDidCatch(error, errorInfo) {}

	render() {
		if (this.state.error !== false) {
			// You can render any custom fallback UI
			return (
				<div>
					<h1>Something went wrong.</h1>
					<pre style={{ overflow: "scroll" }}>${this.state.error.stack}</pre>
				</div>
			);
		}

		return this.props.children;
	}
}

let MasonView = React.lazy(() => import("../MasonView"));

export default function Inspect() {
	const {state, data} = useGamestate();
	const myTheme = useSelector(store => store.theme);
	const classes = useStyles();
	const theme = myTheme === "dark" ? "chromeDark" : "chromeLight";

	const nodeRenderer = ({ depth, name, data, isNonenumerable, expanded }) => {
		if (depth === 0) return <ObjectRootLabel name={name} data={data} />;
		if (
			(name === "src" || name === "code") &&
			typeof data == "string" &&
			data.length > 0
		) {
			return (
				<span>
					<Highlight language="javascript">{data}</Highlight>
				</span>
			);
		}
		if ( typeof data === "function") {
			return (
				<ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
			);
		}
		return (
			<ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
		);
	};

	let filter = o => {
		let r = Object.assign({}, o);
		for (let k in r) {
			if (typeof window[k] !== "undefined" || k === "global") delete r[k];
		}
		return r;
	};

	let filtered = filter(state);
	let [value, handleChange] = React.useState(1);

	

	return (
		<Paper>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={(e,n) => handleChange(n)}
			>
			<Tab label="Tree" value={0} />
			<Tab label="MasonView" value={1} />
			</Tabs>
			<TabPanel value={value} index={0} className={classes.padded}>
				<ObjectInspector
					data={filtered}
					theme={theme}
 					expandLevel={3}
 					nodeRenderer={nodeRenderer}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MasonView data={data} />
			</TabPanel>
		</Paper>
	);
}
