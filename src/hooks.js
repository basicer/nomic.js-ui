import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./api";

export function useUser() {
	let user = useSelector(store => store.user);
	let state = useSelector(store => store.state);

	if (!user) return;
	return Object.assign({ name: user }, state.users[user]);
}

let deepcopy = o => JSON.parse(JSON.stringify(o));

export function useGamestate() {
	let state = useSelector(store => store.state);
	let data = useSelector(store => store.data);
	let simstate = useSelector(store => store.simulator);

	if (simstate) return {
		state: simstate.state,
		data: simstate.data
	}

	return {state, data};
}

export function useSimulator() {
	let [state, setState] = useState();
	let simstate = useSelector(store => store.simulator);

	useEffect(() => {
		if (!simstate) return;
		import('./simulator').then(s => {
			setState(s);
		})
	}, [!!simstate])
	
	return state;
}

export function useAPI() {
	return api;
}