import axios from "axios";
import { authApi } from "../api/authApi";
export const appLogin = async () => {
	//find if user is present in the db or not.
	const res = await axios.get(`${authApi.loginApi}`);
	co;
	//if present ->  find role -> redirect to respective page.
	//if not present -> make an alert that please signup.
};
