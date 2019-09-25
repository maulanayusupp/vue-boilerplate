import router from '../../router';
import client from '../../lib/http-client';
import { removeCookie } from '../../lib/cookie';
import authApi from '../../api/auth';
import { loadLanguageAsync } from '../../setup/i18n-setup';

const TOKEN_KEY = 'access_token';
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const SET_ROLE = 'SET_ROLE';
const FETCH_USER_START = 'FETCH_USER_START';
const FETCH_USER_END = 'FETCH_USER_END';
const NAVIGATE = 'NAVIGATE';
const SET_NAV_STATE = 'SET_NAV_STATE';
const SET_LOCALE = 'SET_LOCALE';
const SET_IS_BOTTOM = 'SET_IS_BOTTOM';
const SET_SWITCHER_STATE = 'SET_SWITCHER_STATE';
const SET_HELP_STATE = 'SET_HELP_STATE';
const SET_ONLINE_STATUS = 'SET_ONLINE_STATUS';
const SET_USER_PICTURE = 'SET_USER_PICTURE';

const sessionCookieName = 'mp_user';

const state = function () {
	return {
		location: '/',
		user: null,
		role: '',
		isFetchingUser: false,
		locale: 'no',
		notifications: [],
		isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
		// isLoggedIn: true,
		isSocketConnected: false,
		loginError: false,
		isLoggingIn: false,
		isNavOpen: false,
		isBottom: false,
		isRoleSwitcherVisible: false,
		isHelpVisible: false,
		isOnline: true,
	};
};

const mutations = {
	[LOGIN](state) {
		state.loginError = false;
		state.isLoggingIn = true;
	},
	[LOGIN_SUCCESS](state) {
		state.isLoggedIn = true;
		state.loginError = false;
		state.isLoggingIn = false;
	},
	[LOGIN_FAILED](state, errorMessage) {
		state.loginError = errorMessage;
		state.isLoggingIn = false;
	},
	[LOGOUT](state) {
		state.user = false;
		state.isLoggedIn = false;
	},
	[FETCH_USER_START](state) {
		state.isFetchingUser = true;
	},
	[FETCH_USER_END](state) {
		state.isFetchingUser = false;
	},
	[SET_LOCALE](state, locale) {
		state.locale = locale;
	},
	[SET_USER](state, user) {
		state.user = user;
		state.locale = user.language;
		state.role = user.role;

		// Load Language
		loadLanguageAsync(user.language);
	},
	[SET_USER_PICTURE](state, url) {
		if (state.user.profile) {
			state.user.profile.picture = url;
		}
	},
	[SET_ROLE](state, role) {
		state.isRoleSwitcherVisible = false;
		localStorage.setItem('role', role);
		state.role = role;
	},
	[NAVIGATE](state, to) {
		state.location = to;
	},
	[SET_NAV_STATE](state, value) {
		state.isNavOpen = value;
	},
	[SET_IS_BOTTOM](state, value) {
		state.isBottom = value;
	},
	[SET_SWITCHER_STATE](state, value) {
		if (value) {
			state.isNavOpen = false;
		}
		state.isRoleSwitcherVisible = value;
	},
	[SET_HELP_STATE](state, value) {
		state.isHelpVisible = value;
	},
	[SET_ONLINE_STATUS](state, value) {
		state.isOnline = value;
	},
	SOCKET_CONNECT(state) {
		state.isSocketConnected = true;
	},
	SOCKET_DISCONNECT(state) {
		state.isSocketConnected = false;
	},
	// SOCKET_NOTIFICATION_ADD(state, value) {
	// 	// eslint-disable-next-line
	// 	console.log(value);
	// },
};

const actions = {
	login({ commit }, creds) {
		commit(LOGIN); // show spinner
		const authCallback = (response) => {
			const jwt = response.data.token;
			const type = response.data.type;
			localStorage.setItem(TOKEN_KEY, jwt);
			client.defaults.headers.Authorization = `${type} ${jwt}`;
			commit(LOGIN_SUCCESS);
			router.push('/');
		};
		const authErrorCallback = (e) => {
			// eslint-disable-next-line
			console.log(e);
			const response = e.response ? e.response.data : false;
			const message = response ? response.message : '';
			commit(LOGIN_FAILED, message);
		};
		// Post Auth
		authApi.login(creds, authCallback, authErrorCallback);
	},
	logout({ commit }) {
		const callback = () => {
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem('role');
			delete client.defaults.headers.Authorization;
			removeCookie(sessionCookieName);
			commit(LOGOUT);
			router.push('/login');
		};
		authApi.logout(callback);
	},
	navigate({ commit }, to) {
		commit(NAVIGATE, to);
	},
	setLocale({ commit }, locale) {
		commit(SET_LOCALE, locale);
	},
	setUser({ commit }, user) {
		commit(SET_USER, user);
	},
	setUserPicture({ commit }, url) {
		commit(SET_USER_PICTURE, url);
	},
	fetchUser({ commit }) {
		if (this.isFetchingUser) {
			return;
		}
		commit(FETCH_USER_START);
		const callback = function (response) {
			const user = response.data;
			commit(FETCH_USER_END);
			commit(SET_USER, user);

			const role = localStorage.getItem('role');
			if (role && user.roles.includes(role)) {
				commit(SET_ROLE, role);
			} else {
				const firstRole = user.roles[0];
				commit(SET_ROLE, firstRole);
			}
		};
		const errorCallback = function () {
			commit(FETCH_USER_END);
		};
		authApi.getProfile(callback, errorCallback);
	},
	setRole({ commit }, role) {
		commit(SET_ROLE, role);
	},
	switchRole({ commit }, role) {
		commit(SET_ROLE, role);
		router.push('/');
	},
	toggleNavDrawer({ commit }, value) {
		const isOpen = value === undefined ? !this.isNavOpen : value;
		commit(SET_NAV_STATE, isOpen);
	},
	setIsBottom({ commit }, value) {
		commit(SET_IS_BOTTOM, value);
	},
	setSwitcherState({ commit }, value) {
		commit(SET_SWITCHER_STATE, value);
	},
	setHelpState({ commit }, value) {
		commit(SET_HELP_STATE, value);
	},
	setOnlineStatus({ commit }, value) {
		commit(SET_ONLINE_STATUS, value);
	},
};

const getters = {
	location: state => state.location,
	user: state => state.user,
	role: state => state.role,
	isSuperAdmin: state => state.role === 'super_admin',
	isFreelancer: state => state.role === 'freelancer',
	locale: state => state.locale,
	isLoggingIn: state => state.isLoggingIn,
	isLoggedIn: state => state.isLoggedIn,
	isFetchingUser: state => state.isFetchingUser,
	isSocketConnected: state => state.isSocketConnected,
	loginError: state => state.loginError,
	isMenuActive: state => path => state.location.to.path === path,
	isNavOpen: state => state.isNavOpen,
	notifications: state => state.notifications,
	isBottom: state => state.isBottom,
	isRoleSwitcherVisible: state => state.isRoleSwitcherVisible,
	isHelpVisible: state => state.isHelpVisible,
	regions: state => state.regions,
	isOnline: state => state.isOnline,
};

export default {
	state,
	getters,
	actions,
	mutations,
};
