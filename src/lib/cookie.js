/**
 * Set Cookie
 *
 * @param {string} name Key Name
 * @param {*} value Value
 * @param {number} [days] How long the cookie will be stored
 * @param {string} [domain] Domain Name
 */
export const setCookie = (name, value, days, domain) => {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toGMTString()}`;
	}
	let cookie = `${name}=${value}${expires}; path=/`;
	if (domain) {
		cookie += `; domain=${domain}`;
	}
	document.cookie = cookie;
};

/**
 * Get Cookie Value by Key
 *
 * @param {string} name Key
 */
export const getCookie = (name) => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

/**
 * Remove Cookie Value by Key
 *
 * @param {string} name Key
 */
export const removeCookie = (name) => {
	setCookie(name, '', -1);
};
