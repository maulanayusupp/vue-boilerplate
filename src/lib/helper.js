import dayjs from 'dayjs';

export const duplicateVar = value => JSON.parse(JSON.stringify(value));

/**
 * Slugify
 * @see https://gist.github.com/mathewbyrne/1280286
 */
export const slugify = (text) => {
	const slugged = text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		// eslint-disable-next-line
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		// eslint-disable-next-line
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '');
	return slugged;
};

/**
 * Build Query String
 * @param params
 * @see https://stackoverflow.com/a/34209399/5627904
 */
export const buildQuery = (params) => {
	const esc = encodeURIComponent;
	const query = Object.keys(params)
		.map(k => `${esc(k)}=${esc(params[k])}`)
		.join('&');
	return query;
};

/**
 * Detect Mobile Browser
 * @see https://stackoverflow.com/a/11381730/5627904
 */
export const isMobile = () => {
	let check = false;
	// eslint-disable-next-line
	(function(a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a,
			)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4),
			)
		) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

/**
 * Detect Mobile and Tab Browser
 * @see https://stackoverflow.com/a/11381730/5627904
 */
export const isMobileOrTablet = () => {
	let check = false;
	// eslint-disable-next-line
	(function(a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
				a,
			)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4),
			)
		) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

/**
 * Get YouTube ID from various YouTube URL
 * @author takien
 * @see http://takien.com
 */
export const getYoutubeId = (url) => {
	let ID = '';
	const urlFormatted = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	if (urlFormatted[2] !== undefined) {
		// eslint-disable-next-line
		ID = urlFormatted[2].split(/[^0-9a-z_\-]/i);
		ID = ID[0];
	} else {
		ID = urlFormatted;
	}
	return ID;
};

/**
 * Is Valid URL
 * @see https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
 */
export const isValidURL = (str) => {
	const pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	return pattern.test(str);
};

/**
 * Is Number
 * @description Check if string is contain number only
 */
export const isNumber = (str) => {
	const reg = new RegExp(/^\d+$/);
	const isNumber = reg.test(str);
	return isNumber;
};

/**
 * Delay
 */
export const delay = (function startDelay() {
	let timer = 0;
	const call = function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
	return call;
}());

/**
 * Email Validation
 */
export const isValidEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

export const triggerEvent = (el, type) => {
	if ('createEvent' in document) {
		// modern browsers, IE9+
		const e = document.createEvent('HTMLEvents');
		e.initEvent(type, false, true);
		el.dispatchEvent(e);
	} else {
		// IE 8
		const e = document.createEventObject();
		e.eventType = type;
		el.fireEvent(`on${e.eventType}`, e);
	}
};

export const formatMonth = (month, lang = 'ID') => {
	const months = {
		ID: [
			'',
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'Mei',
			'Jun',
			'Jul',
			'Agu',
			'Sep',
			'Okt',
			'Nov',
			'Des',
		],
		US: [
			'',
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
	};
	return months[lang][month];
};

export const getAxiosErrorMessage = e => e.response.data.message;
export const getRequestErrors = e => e.response.data.errors || [];

// Create Combinations
export const createCombinations = (data) => {
	const result = data.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
	return result;
};

/**
 * Convert Image URL into Base64 Data
 *
 * @param url Image URL
 * @param callback Retrieve Base64 as Param
 *
 * @see https://stackoverflow.com/a/50155915/5627904 StackOverflow
 */
export const imageURLtoBase64 = (url, callback) => {
	const img = new Image();
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	img.crossOrigin = 'Anonymous';
	// img.setAttribute('crossOrigin', 'Anonymous');
	img.src = url;

	img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);
		const dataURL = canvas.toDataURL('image/png');
		callback(dataURL);
	};
};

/**
 * Download File URL
 */
export const downloadFile = (url) => {
	const a = document.createElement('A');
	a.href = url;
	a.download = url.substr(url.lastIndexOf('/') + 1);
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

// nl2br
export const nl2br = (str) => {
	const breakTag = '<br>';
	return `${str}`.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, `$1${breakTag}$2`);
};

// Get Date Range
export const getDateRange = () => {
	const today = new Date();
	const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
	const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

	const filterDate = {
		start: startDate,
		end: endDate,
	};

	return filterDate;
};

// Format Time (Seconds) to display as clock format
export const formatTime = (originalTime) => {
	let time = originalTime ? parseInt(originalTime) : 0;
	const isMinus = time < 0;
	const sign = isMinus ? '-' : '';
	if (isMinus) {
		time = Math.abs(time);
	}
	const oneMinute = 60;
	const oneHour = oneMinute * 60;
	let hours = Math.floor(time / oneHour);
	let minutes = Math.floor((time / oneMinute) % 60);
	if (Number.isNaN(minutes)) {
		minutes = 0;
	}
	let seconds = time % 60;
	if (hours > 0 && hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	const displayTime =	hours === 0 || hours === '0' ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;
	return `${sign}${displayTime}`;
};

// Convert String to Title Case
export const toTitleCase = (str) => {
	const string = str === null || str === '' ? '-' : str;
	return string.replace(
		/\w\S*/g,
		txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
	);
};

export const textSplitter = (str, l) => {
	let content = str;
	const strs = [];
	while (content.length > l) {
		const newlinePosition = content.substring(0, l).lastIndexOf('\n');
		const isGotNewline = newlinePosition !== -1;
		// If there is a newline within the text range, then get the newline position
		let pos = isGotNewline ? newlinePosition : content.substring(0, l).lastIndexOf(' ');
		pos = pos <= 0 ? l : pos;
		strs.push(content.substring(0, pos));
		if (isGotNewline) {
			strs.push('');
		}
		let i = isGotNewline ? content.indexOf('\n', pos) + 1 : content.indexOf(' ', pos) + 1;
		if (i < pos || i > pos + l) i = pos;
		content = content.substring(i);
	}
	strs.push(content);
	return strs;
};

// Filter User
export const filterUser = keyword => (user) => {
	const firstName = user.profile ? user.profile.firstName.toLowerCase() : '';
	const lastName = user.profile ? user.profile.lastName.toLowerCase() : '';
	const fullName = `${firstName} ${lastName}`;
	const email = user.email.toLowerCase();
	const isFirstNameMatch = firstName.includes(keyword);
	const isLastNameMatch = lastName.includes(keyword);
	const isFullNameMatch = fullName.includes(keyword);
	const isEmailMatch = email.includes(keyword);
	const isMatch = isFullNameMatch || isFirstNameMatch || isLastNameMatch || isEmailMatch;
	return isMatch;
};

// Filter Invited Student
export const filterInvitedStudent = keyword => (invited) => {
	const hasProfile = invited.user && invited.user.profile;
	const firstName = hasProfile ? invited.user.profile.firstName.toLowerCase() : '';
	const lastName = hasProfile ? invited.user.profile.lastName.toLowerCase() : '';
	const fullName = `${firstName} ${lastName}`;
	const email = invited.user ? invited.user.email.toLowerCase() : '';
	const isFirstNameMatch = firstName.includes(keyword);
	const isLastNameMatch = lastName.includes(keyword);
	const isFullNameMatch = fullName.includes(keyword);
	const isEmailMatch = email.includes(keyword);
	const isMatch = isFullNameMatch || isFirstNameMatch || isLastNameMatch || isEmailMatch;
	return isMatch;
};

// Filter Invited Student
export const filterInvitedStudents = keyword => (invited) => {
	const hasProfile = invited.student && invited.student.profile;
	const firstName = hasProfile ? invited.student.profile.firstName.toLowerCase() : '';
	const lastName = hasProfile ? invited.student.profile.lastName.toLowerCase() : '';
	const fullName = `${firstName} ${lastName}`;
	const email = invited.student ? invited.student.email.toLowerCase() : '';
	const isFirstNameMatch = firstName.includes(keyword);
	const isLastNameMatch = lastName.includes(keyword);
	const isFullNameMatch = fullName.includes(keyword);
	const isEmailMatch = email.includes(keyword);
	const isMatch = isFullNameMatch || isFirstNameMatch || isLastNameMatch || isEmailMatch;
	return isMatch;
};

// Get Alphabet
export const getAlphabet = (index) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet[index].toUpperCase();
};

// Axios Global Request Handler
export const globalRequestHandler = (config) => {
	const newConfig = config;
	if (config.params) {
		const newParams = config.params;
		const keys = Object.keys(newParams);
		const boolFormatter = (key) => {
			let val = newParams[key];
			if (typeof val === 'boolean') {
				val = val ? 1 : 0;
				newParams[key] = val;
			}
		};
		keys.forEach(boolFormatter);
		newConfig.params = newParams;
	}
	return newConfig;
};

/**
 * Delete Item from Array
 *
 * @param {string} needle Item
 * @param {string[]} haystack Array
 */
export const deleteFromArr = (needle, haystack) => {
	const index = haystack.findIndex(item => item === needle);
	if (index !== -1) {
		haystack.splice(index, 1);
	}
};

/**
 * Get Random Integer between to values
 *
 * @param {Int} minValue Min Value
 * @param {Int} maxValue Max Value
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
export const getRandomInt = (minValue, maxValue) => {
	const min = Math.ceil(minValue);
	const max = Math.floor(maxValue);
	return Math.floor(Math.random() * (max - min)) + min;
};

/*
	URLFY
 */
export const urlify = (text) => {
	let description = '';
	if (text) {
		description = text;
	}
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return description.replace(urlRegex, url => `<a href="${url}" target="blank">${url}</a>`);
};

// Group By
export const groupBy = (arr, property) => {
	const grouped = arr.reduce((memo, x) => {
		const temp = memo;
		if (!temp[x[property]]) { temp[x[property]] = []; }
		temp[x[property]].push(x);
		return temp;
	}, {});
	return grouped;
};

// Generate Dates
export const generateDates = (value, type, format = 'YYYY-MM-DD', endDate) => {
	const dates = [];
	const firstIndex = value > 0 ? 0 : value;
	const lastIndex = value > 0 ? value : 0;
	for (let index = firstIndex; index <= lastIndex; index++) {
		const day = endDate || dayjs();
		const date = day.add(index, type).format(format);
		dates.push(date);
	}
	return dates;
};

// Scroll to Top
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Show Notif
export const showNotif = (title, message, link, icon = 'https://lms-app.ajak.in/img/logo-small.png') => {
	if (window.Notification) {
		const { permission } = Notification;
		const options = {
			body: message,
			icon,
		};
		const onClick = (event) => {
			event.preventDefault(); // prevent the browser from focusing the Notification's tab
			if (link) {
				window.open(link, '_blank');
			}
		};
		if (permission === 'granted') {
			const notification = new Notification(title, options);
			notification.onclick = onClick;
		} else if (permission !== 'denied') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					const notification = new Notification(title, options);
					notification.onclick = onClick;
				}
			});
		}
	} else {
		// eslint-disable-next-line
		console.log('This browser does not support notification');
	}
};

// Get Notif Link
export const getNotifLink = (notif) => {
	let link = process.env.VUE_APP_URL || 'https://lms-app.ajak.in';
	const payload = notif.payload ? JSON.parse(notif.payload) : null;
	if (payload && payload !== '') {
		const type = notif.type;
		if (type === 'course') {
			const courseSlug = payload.module_slug;
			link += `/courses/${courseSlug}`;
		} else if (type === 'local_training_register') {
			const trainingSlug = payload.training_slug;
			link += `/trainings/${trainingSlug}`;
		}
	}
	return link;
};

// Get Video Blob
export const getVideoBlob = async (url) => {
	const promise = new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.responseType = 'blob';

		req.onload = function onLoad() {
			// Onload is triggered even on 404
			// so we need to check the status code
			if (this.status === 200) {
				const videoBlob = this.response;
				resolve(videoBlob);
				// var vid = URL.createObjectURL(videoBlob); // IE10+
				// Video is now downloaded
				// and we can set it as source on the video element
				// video.src = vid;
			}
		};

		req.onerror = function onError() {
			reject(new Error('Error When Downloading Video'));
		};

		req.send();
	});
	return promise;
};

export const daysInMonth = (month, year) => {
	const days = new Date(year, month, 0).getDate();
	return days;
};
