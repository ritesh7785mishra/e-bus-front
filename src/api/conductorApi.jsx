const { VITE_baseServerUrl } = import.meta.env;
export const conductorApi = {
	login: `${VITE_baseServerUrl}/conductor/auth/login`,
	conductorProfile: `${VITE_baseServerUrl}/conductor/profile`,
	updateRoute: `${VITE_baseServerUrl}/conductor/update-current-route`,
	updateLocation: `${VITE_baseServerUrl}/conductor/update-location`,
	updateSeatSeatStatus: `${VITE_baseServerUrl}/conductor/update-seat-status`,
	logout: `${VITE_baseServerUrl}/conductor/logout`,
};
