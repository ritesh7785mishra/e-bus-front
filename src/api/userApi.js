const { VITE_baseServerUrl } = process.env;
export const userApi = {
	userSignup: `${VITE_baseServerUrl}/user/user-signup`,
	allBuses: `${VITE_baseServerUrl}/user/all-buses`,
	routeSelectedBuses: `${VITE_baseServerUrl}/user/route-selected-buses`,
	userUpdateProfile: `${VITE_baseServerUrl}/user/profile/:id`,
	userLogout: `${VITE_baseServerUrl}/user/logout`,
	user,
	userProfile: `${VITE_baseServerUrl}/user/user-profile`,
};
