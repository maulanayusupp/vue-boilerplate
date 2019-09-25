import Vue from 'vue';
import VTooltip from 'v-tooltip';
import dayjs from 'dayjs';
import NProgress from 'nprogress';
import Notifications from 'vue-notification';
import io from 'socket.io-client';
import VueSocketio from 'vue-socket.io-extended';
import '../node_modules/nprogress/nprogress.css';
// import {
// 	MdField,
// 	MdButton,
// 	MdIcon,
// 	MdRadio,
// 	MdCheckbox,
// 	MdDatepicker,
// 	MdMenu,
// 	MdList,
// 	MdDivider,
// 	MdDialog,
// 	MdContent,
// 	MdSwitch,
// 	MdMenuContent,
// 	MdSubheader,
// 	MdProgress,
// } from 'vue-material/dist/components';
// import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';

import App from './App.vue';
import router from './router';
import store from './store';
import {
	i18n,
	loadLanguageAsync,
} from './setup/i18n-setup';
import './registerServiceWorker';
import noLocale from './lib/locale/no';

dayjs.locale(noLocale);

Vue.config.productionTip = false;

// Socket
console.log(process.env.VUE_APP_SOCKET_URL);
const SOCKET_URL = process.env.VUE_APP_SOCKET_URL || 'http://localhost:3333';
const socket = io(SOCKET_URL, {
	transports: ['websocket'],
});
Vue.use(VueSocketio, socket, { store });

Vue.use(VTooltip);
Vue.use(Notifications);

// Material Design Components
// Vue.use(MdField);
// Vue.use(MdButton);
// Vue.use(MdIcon);
// Vue.use(MdRadio);
// Vue.use(MdCheckbox);
// Vue.use(MdDatepicker);
// Vue.use(MdMenu);
// Vue.use(MdMenuContent);
// Vue.use(MdList);
// Vue.use(MdDivider);
// Vue.use(MdDialog);
// Vue.use(MdContent);
// Vue.use(MdSwitch);
// Vue.use(MdSubheader);
// Vue.use(MdProgress);


// Route Middleware
router.beforeEach((to, from, next) => {
	const { path } = to;
	const { isLoggedIn } = store.getters;

	const errors = [];

	const alreadyLoggedIn = path === '/login' && isLoggedIn;
	if (alreadyLoggedIn) {
		errors.push('already_logged_in');
	}

	const isNotAvailable = errors.length > 0;

	if (path === '/callback') {
		next();
	} else if (!isLoggedIn && path !== '/' && path !== '/login' && path !== '/logout' && path !== '/password/reset') {
		next('/login');
	} else if (isNotAvailable) {
		next('/');
	} else {
		next();
	}
});

// Change Title
router.beforeEach((to, from, next) => {
	store.dispatch('navigate', { to });
	const title = to.meta.title || '';
	document.title = title;
	next();
});

// Lazy load Languages
router.beforeEach((to, from, next) => {
	const lang = to.query.lang || store.getters.locale;
	loadLanguageAsync(lang).then(() => next());
});

router.beforeResolve((to, from, next) => {
	if (to.name) {
		NProgress.start();
	}
	next();
});

router.afterEach(() => {
	NProgress.done();
});

new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app');
