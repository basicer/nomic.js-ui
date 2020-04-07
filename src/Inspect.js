
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import { shallowEqual, useSelector } from 'react-redux';

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

	const data = useSelector(store => store.state);

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