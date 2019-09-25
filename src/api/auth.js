import client from '../lib/http-client';

const endpoint = '/auth';

export default {
	// Login
	login(creds, cb, errorCb) {
		const url = `${endpoint}/login`;
		client.post(url, creds)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Logout
	logout(cb, errorCb) {
		const url = `${endpoint}/logout`;
		client.post(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Logout Others
	logoutOthers(cb, errorCb) {
		const url = `${endpoint}/logoutOthers`;
		client.post(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Logout All
	logoutAll(cb, errorCb) {
		const url = `${endpoint}/logoutAll`;
		client.post(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Get User Profile
	getProfile(cb, errorCb) {
		const url = `${endpoint}/profile`;
		client.get(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Get All Devices
	getDevices(cb, errorCb) {
		const url = `${endpoint}/allDevices`;
		client.get(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Forgot Password
	forgotPassword(email, cb, errorCb) {
		const url = `${endpoint}/password/forgot`;
		const params = { email };
		client.post(url, params)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	/**
	 * Verify Reset Password Code
	 *
	 * @param {Object} params Params
	 * @param {string} params.email Email
	 * @param {string} params.code Code
	 * @param {*} cb
	 * @param {*} errorCb
	 */
	verifyResetCode(params, cb, errorCb) {
		// const url = `${endpoint}/password/verify`;
		const url = `${endpoint}/password/forgot/verifyUrl/${params.email}/${params.token}`;
		client.get(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	/**
	 * Set Password
	 *
	 * @param {Obbject} payload Payload
	 * @param {string} payload.password New Password
	 * @param {string} confirmationPassword New Password Confirmation
	 * @param {Object} params Params
	 * @param {string} params.email Email
	 * @param {string} params.code Code
	 * @param {*} cb
	 * @param {*} errorCb
	*/
	setPassword(payload, params, cb, errorCb) {
		const url = `${endpoint}/password/set`;
		client.put(url, payload, { params })
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	resetPassword(email, token, params, cb, errorCb) {
		const url = `${endpoint}/password/reset/${email}/${token}`;
		client.post(url, params)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},
};
