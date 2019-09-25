import client from '../lib/http-client';
import { buildQuery } from '../lib/helper';

const endpoint = '/users';

export default {
	// Reset Password
	resetPassword(email, cb, errorCb) {
		const params = {
			email,
		};
		const url = `${endpoint}/password/reset`;
		client.post(url, params)
			.then((response) => {
				if (cb) {
					cb(response.data);
				}
			})
			.catch((e) => {
				if (errorCb) {
					errorCb(e);
				}
			});
	},

	// Set Password
	setPassword(params, cb, errorCb) {
		const url = `${endpoint}/password/reset/create`;
		client.post(url, params)
			.then((response) => {
				if (cb) {
					cb(response.data);
				}
			})
			.catch((e) => {
				if (errorCb) {
					errorCb(e);
				}
			});
	},

	// Validate Reset Password Code
	validateResetPasswordCode(params, cb, errorCb) {
		const url = `${endpoint}/password/reset/validate`;
		client.post(url, params)
			.then((response) => {
				if (cb) {
					cb(response.data);
				}
			})
			.catch((e) => {
				if (errorCb) {
					errorCb(e);
				}
			});
	},

	// Change Password
	changePassword(currentPassword, newPassword, cb, errorCb) {
		const params = {
			current_password: currentPassword,
			new_password: newPassword,
		};
		const url = `${endpoint}/password`;
		client.put(url, params)
			.then((response) => {
				cb(response.data);
			})
			.catch((e) => {
				if (errorCb) {
					errorCb(e);
				}
			});
	},

	// Create User
	create(params, cb, errorCb) {
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		const url = `${endpoint}`;
		client.post(url, params)
			.then(responseHandler)
			.catch(errorHandler);
	},

	/**
	 * Create Bulk
	 *
	 * @param {Object[]} users Users
	 * @param {string} users.email Email
	 * @param {string} users.password Password
	 * @param {string} users.language Language
	 * @param {string} users.firstName First Name
	 * @param {string} users.gender Gender
	 * @param {*} cb Callback
	 * @param {*} errorCb Error Callback
	 */
	createBulk(users, cb, errorCb) {
		const url = `${endpoint}/createBulk`;
		const params = { users: JSON.stringify(users) };
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		client.post(url, params)
			.then(responseHandler)
			.catch(errorHandler);
	},

	// Get
	get(id, cb, errorCb) {
		const url = `${endpoint}/${id}`;
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		client.get(url)
			.then(responseHandler)
			.catch(errorHandler);
	},

	/**
	 * Search
	 *
	 * @param {string} role Role
	 * @param {object} params Params
	 * @param {number} params.page Page
	 * @param {number} params.limit Limit
	 * @param {string} params.role Role
	 * @param {string} params.keyword Keyword
	 * @param {*} cb Callback
	 * @param {*} errorCb Error Callback
	 */
	search(params, cb, errorCb) {
		const url = `${endpoint}/search`;
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		client.get(url, { params })
			.then(responseHandler)
			.catch(errorHandler);
	},

	/**
	 * Search with Role
	 *
	 * @param {string} role Role
	 * @param {object} params Params
	 * @param {number} params.page Page
	 * @param {number} params.limit Limit
	 * @param {string} params.keyword Keyword
	 * @param {*} cb Callback
	 * @param {*} errorCb Error Callback
	 */
	searchWithRole(role, params, cb, errorCb) {
		const url = `${endpoint}/search/${role}`;
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		client.get(url, { params })
			.then(responseHandler)
			.catch(errorHandler);
	},

	// Get Users
	getUsers(params, cb, errorCb) {
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		const query = buildQuery(params);
		const url = `${endpoint}?${query}`;
		client.get(url)
			.then(responseHandler)
			.catch(errorHandler);
	},

	/**
	 * Get Users by Role
	 *
	 * @param {'admin' | 'teacher' | 'student'} role User Role
	 * @param {Object} params Query Params
	 * @param {*} cb
	 * @param {*} errorCb
	 */
	getUsersByRole(role, params, cb, errorCb) {
		const responseHandler = (response) => {
			if (cb) cb(response.data);
		};
		const errorHandler = (e) => {
			if (errorCb) errorCb(e);
		};
		// const query = buildQuery(params);
		// const url = `${endpoint}/role/${role}?${query}`;
		const url = `${endpoint}/role/${role}`;
		client.get(url, { params })
			.then(responseHandler)
			.catch(errorHandler);
	},

	// Bulk Delete
	bulkDelete(ids, cb, errorCb) {
		const params = {
			ids: JSON.stringify(ids),
			is_deleted: 1,
		};
		const url = `${endpoint}/delete`;
		const responseHandler = (response) => {
			if (cb) {
				cb(response.data);
			}
		};
		const errorHandler = (e) => {
			if (errorCb) {
				errorCb(e);
			}
		};
		client.delete(url, { data: params })
			.then(responseHandler)
			.catch(errorHandler);
	},

	// Update user
	update(id, params, cb, errorCb) {
		const url = `${endpoint}/${id}`;
		client.put(url, params)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Delete user
	delete(id, cb, errorCb) {
		const url = `${endpoint}/${id}`;
		client.delete(url)
			.then((response) => {
				if (cb) cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},

	// Update user password
	updatePassword(params, cb, errorCb) {
		const url = `${endpoint}/${params.id}/password`;
		client.put(url, params)
			.then((response) => {
				cb(response.data);
			})
			.catch((e) => {
				if (errorCb) errorCb(e);
			});
	},
};
