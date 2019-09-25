// import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/logger';
import global from './modules/global';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
	modules: {
		global,
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],
});

export default store;
