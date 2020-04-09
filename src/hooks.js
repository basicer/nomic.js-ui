import { useDispatch, useSelector } from "react-redux";

export function useUser() {
	let user = useSelector(store => store.user);
	let state = useSelector(store => store.state);

	if (!user) return;
	return Object.assign({ name: user }, state.users[user]);
}
