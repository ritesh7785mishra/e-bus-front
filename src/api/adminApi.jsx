const { VITE_baseServerUrl } = import.meta.env;



export const adminApi = {
	adminLogin: `${VITE_baseServerUrl}/admin/auth/login`,
	addAdmin: `${VITE_baseServerUrl}/admin/add-admin`,
	getAdmin: `${VITE_baseServerUrl}/admin/admin-profile`,
	getAdmins: `${VITE_baseServerUrl}/admin/all-admin`,
	getSuperAdmins: `${VITE_baseServerUrl}/admin/auth/super-admin`,
	deleteAdmin: `${VITE_baseServerUrl}/admin/delete`,

	// only admin

	getConductors: `${VITE_baseServerUrl}/admin/all-conductor`,
	getSingleConductor: `${VITE_baseServerUrl}/admin/conductor-profile`,
	addConductor: `${VITE_baseServerUrl}/admin/add-conductor`,
	deleteConductor: `${VITE_baseServerUrl}/admin/delete-conductor`,
};
