import axios from "axios";

const client = axios.create({});

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

export default {
	...client,
	setAuth,
	setBase: base => (client.defaults.baseURL = base + "/api")
};
