import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";

function request_middleware({ getState }) {
	return next => action => {
		if (!action.request) return next(action);
		next({ type: action.type + "_PENDING" });
		action.request.then(
			result => {
				next({ ...action, type: action.type + "_SUCCESS", data: result.data });
				if (action.onSuccess) action.onSuccess(result);
			},
			err => {
				next({ ...action, type: action.type + "_FAILURE", error: err });
				next({
					type: "SNACKBAR",
					message: String(err.response.data),
					severity: "error"
				});
			}
		);
	};
}

let mw = [applyMiddleware(request_middleware)];

if ( window.__REDUX_DEVTOOLS_EXTENSION__ ) mw.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
	reducer,
	undefined,
	compose.apply(undefined, mw)
);

export default store;
