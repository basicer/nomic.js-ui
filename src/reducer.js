function reconstruct(x) {
	let references = x.references;
	let resolved = {};
	function o(what) {
		if (what.$ref) {
			if (!resolved[what.$ref]) {
				let x = {};
				if (references[what.$ref].$t === "function") {
					x = new Function(references[what.$ref].src);
				}
				if (references[what.$ref].proto.$s === "%ArrayPrototype%") {
					x = [];
				}
				resolved[what.$ref] = x;
				try {
					Object.assign(resolved[what.$ref], o(references[what.$ref]));
				} catch (e) {}
			}
			return resolved[what.$ref];
		}
		if (what.$v) {
			return what.$v;
		}
		if (what.$t === "undefined") return "undefined";
		else if (what === null) return "null";
		else if (what.$t === "object") {
			let p = {};
			for (let k in what.prop) {
				p[k] = o(what.prop[k].v);
			}
			return p;
		}
		if (what.$t === "function") {
			let p = { src: what.src };
			for (let k in what.prop) {
				p[k] = o(what.prop[k].v);
			}
			p.upvars = {};
			for (let k in what.upvars) {
				p.upvars[k] = o(what.upvars[k]);
			}
			return p;
		}
		return what;
	}
	return o(x.root);
}

const defaultStore = {
	settings: {
		base: window.localStorage.base || "https://nomic.pylif.com"
	},
	'api-request': {
		method: 'GET',
		path: '',
		data: '{\n\t\n}'
	}
};

export default function reducer(store = defaultStore, action) {
	switch (action.type) {
		case "NEW_SERVER":
			return { ...store, state: {}, data: {} };
		case "CONNECTION_STATE":
			return { ...store, connection: action.value };
		case "INITIAL_STATE":
			return { ...store, state: reconstruct(action.data), data: action.data };
		case "UPDATE_STATE":
			let data = store.data;
			for (let k in action.data) {
				data.references[k] = action.data[k];
			}
			let r = reconstruct(data);
			return { ...store, state: r, data: data };
		case "SNACKBAR":
			return {
				...store,
				snackbar: {
					message: action.message,
					severity: action.severity || "success"
				}
			};
		case "CLOSE_SNACKBAR":
			return { ...store, snackbar: undefined };
		case "THEME":
			return { ...store, theme: action.theme };
		case "LOGIN_SUCCESS":
			return { ...store, user: action.user };
		case "LOG_OUT":
			delete localStorage.secretKey;
			delete localStorage.user;
			return { ...store, user: undefined };
		case "SET_SETTING":
			return {
				...store,
				settings: { ...store.settings, [action.key]: action.value }
			};
		case "TOGGLE_SIMULATOR":
			if ( store.simulator ) {
				return {...store, simulator: undefined}
			} else {
				let copy = JSON.parse(JSON.stringify(store.data));
				return {...store, simulator: {
					data: copy, 
					state: reconstruct(copy)
				}};
			}
		case "API_CLIENT_REQUEST_SUCCESS":
			return {...store, 'api-response': action.result}
		case "API_CLIENT_REQUEST_PENDING":
			return { ...store, 'api-response': undefined }
		case "SET_API_REQUESET":
			return { ...store, 'api-request': action.data }
		default:
			return store;
	}
}
