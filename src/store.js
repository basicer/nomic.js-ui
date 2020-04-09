import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";

function request_middleware({ getState }) {
	return next => action => {
		if (!action.request) return next(action);
		next({ type: action.type + "_PENDING" });
		action.request.then(
			result => {
				next({ ...action, type: action.type + "_SUCCESS", data: result.data });
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

const store = createStore(
	reducer,
	compose(
		applyMiddleware(request_middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
