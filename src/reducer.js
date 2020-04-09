function reconstruct(x) {
	let references = x.references;
	let resolved = {};
	function o(what) {
		if (what.$ref) {
			if (!resolved[what.$ref]) {
				let x = {};
				if (references[what.$ref].$t == "function") {
					x = new Function(references[what.$ref].src);
				}
				if (references[what.$ref].proto.$s == "%ArrayPrototype%") {
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
		if (what.$t == "undefined") return "undefined";
		else if (what === null) return "null";
		else if (what.$t == "object") {
			let p = {};
			for (let k in what.prop) {
				p[k] = o(what.prop[k].v);
			}
			return p;
		}
		if (what.$t == "function") {
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

export default function reducer(store = {}, action) {
	switch (action.type) {
		case "initial":
			return { ...store, state: reconstruct(action.data), data: action.data };
		case "update":
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
			console.log(action);
			return { ...store, user: action.user };
	}
	return store;
}
