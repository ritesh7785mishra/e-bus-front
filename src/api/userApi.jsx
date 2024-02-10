const { VITE_baseServerUrl } = import.meta.env;
export const userApi = {
	userSignup: `${VITE_baseServerUrl}/user/signup`,
	login: `${VITE_baseServerUrl}/user/auth/login`,
	userProfile: `${VITE_baseServerUrl}/user/profile`,
	allBuses: `${VITE_baseServerUrl}/user/all-buses`,
	routeSelectedBuses: `${VITE_baseServerUrl}/user/route-selected-buses`,
	deleteUser: `${VITE_baseServerUrl}/user/delete`,
};
