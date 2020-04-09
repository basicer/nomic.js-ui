import React from "react";
import Paper from "@material-ui/core/Paper";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { ObjectInspector, ObjectLabel, ObjectRootLabel } from "react-inspector";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { shallowEqual, useSelector } from "react-redux";
import Highlight from "react-highlight.js";

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

export default function Inspect() {
	const data = useSelector(store => store.state);
	const theme = useMediaQuery("(prefers-color-scheme: dark)")
		? "chromeDark"
		: "chromeLight";

	const nodeRenderer = ({ depth, name, data, isNonenumerable, expanded }) => {
		if (depth === 0) return <ObjectRootLabel name={name} data={data} />;
		if (
			(name == "src" || name == "code") &&
			typeof data == "string" &&
			data.length > 0
		) {
			return (
				<span>
					<Highlight language="javascript">{data}</Highlight>
				</span>
			);
		}
		return (
			<ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
		);
	};

	let filter = o => {
		let r = Object.assign({}, o);
		for (let k in r) {
			if (typeof window[k] !== "undefined") delete r[k];
		}
		return r;
	};

	let filtered = filter(data);

	return (
		<Paper>
			<ErrorBoundary>
				<ObjectInspector
					data={filtered}
					theme={theme}
					expandLevel={3}
					nodeRenderer={nodeRenderer}
				/>
				{/*
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data, 'root', '')}
    </TreeView>
	*/}
			</ErrorBoundary>
		</Paper>
	);
}
