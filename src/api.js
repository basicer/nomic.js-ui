import axios from "axios";

const client = axios.create({
	baseURL:
		(window.localStorage.base || "https://nomicjs.basicer.repl.co") + "/api"
});

function setAuth(username, password) {
	client.defaults.auth = {
		username,
		password
	};
}

/*
setAuth(
	'basicer',
	'HiVhlgoKt//+U6RekhFTmx36ggIABsmLd3h/tJmrMUJXqWTJYSnLn8p8P6/96G0qN+R0mM9UhNp0idg2xJ4mBGJhc2ljZXI'
);
*/

export default { ...client, setAuth };
