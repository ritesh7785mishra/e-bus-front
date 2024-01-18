const { VITE_baseServerUrl } = process.env;
export const conductorApi = {
	conductorProfile: `${VITE_baseServerUrl}/conductor/conductor-profile`,
	upadateRoute: `${VITE_baseServerUrl}/conductor/update-current-route`,
	updateLocation: `${VITE_baseServerUrl}/conductor/update-location`,
	updateSeatSeatStatus: `${VITE_baseServerUrl}/conductor/update-seat-status`,
	logout: `${VITE_baseServerUrl}/conductor/logout`,
};
