
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

function reconstruct(x) {
	let refrences = x.refrences;
	let resolved = {};
	function o(what) {
		if (what.$ref) {
			if (!resolved[what.$ref]) {
				resolved[what.$ref] = {};
				Object.assign(resolved[what.$ref], o(refrences[what.$ref]));
			}
			return resolved[what.$ref];
		}
		if (what.$v) {
			return what.$v;
		}
		if (what.$t == "undefined") return 'undefined';
		else if (what === null) return 'null';
		else if (what.$t == "object") {
			let p = {};
			for ( let k in what.prop ) {
				p[k] = o(what.prop[k].v);
			}
			return p;
		}
		if (what.$t == "function") {
			let p = {src:what.src};
			for ( let k in what.prop ) {
				p[k] = o(what.prop[k].v);
			}
			p.upvars = {};
			for ( let k in what.upvars ) {
				p.upvars[k] = o(what.upvars[k]);
			}
			return p;
		}
		return what;
	}
	return o(x.root);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {

  }

  render() {
    if (this.state.error !== false) {
      // You can render any custom fallback UI
      return (
		  <div>
		  <h1>Something went wrong.</h1>
			<pre style={{overflow: 'scroll'
			}}>${this.state.error.stack}</pre>
		  </div>);

    }

    return this.props.children; 
  }
}

export default function Inspect() {

	const [data, setData] = React.useState({});
	React.useEffect(() => { fetch(
			'https://nomicjs.basicer.repl.co/api/inspect'
		).then(function (response) {
			return response.json();
		}).then(function (data) {
			setData(reconstruct(data));
		})
	}
	,[]);

	let seen = new WeakMap();
	const renderTree = (element, n, path) => {
		if ( typeof element == "object" && element != null ) {
			if ( seen.get(element) ) return <React.Fragment />
			seen.set(element, true);

			let inner = [];
			for ( let k in element ) {
				if ( k == 'src' ) {
					inner.push(<TreeItem key={path} nodeId={path} label={<pre style={{overflow: 'scroll'
			}}>{element[k]}</pre>} />);
				} else {
					inner.push(renderTree(element[k], k, path + "." + k))
				}
				
			}
			return (<TreeItem key={path} nodeId={path} label={n}>
			{inner}
			</TreeItem>)
		} else {
			return (<TreeItem key={path} nodeId={path} label={`${n}: ${element}`} />
			)
		}
		
	};


	return (<Paper>
	<ErrorBoundary>
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data, 'root', '')}
    </TreeView>
	</ErrorBoundary>
	</Paper>)
}