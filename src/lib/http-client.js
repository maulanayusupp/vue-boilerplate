import axios from 'axios';

const TOKEN_KEY = 'access_token';
const url = process.env.VUE_APP_API_URL;
const token = localStorage.getItem(TOKEN_KEY);

const globalResponseHandler = response => response;

const globalErrorHandler = (error) => {
	const { status } = error.response;
	const isTokenExpired = status === 401;
	const isUnauthorized = status === 403;
	const isMaintenance = status === 503;
	if (isTokenExpired) {
		localStorage.removeItem(TOKEN_KEY);
		const originalRequest = error.config;
		delete originalRequest.headers.Authorization;
		window.location.href = '/login';
	} else if (isUnauthorized) {
		window.location.href = '/';
	} else if (isMaintenance) {
		if (window.location.pathname !== '/maintenance') {
			window.location.href = '/maintenance';
		}
	}
	return Promise.reject(error);
};

const client = axios.create({
	baseURL: url,
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

// Add request interceptor
// client.interceptors.request.use(globalRequestHandler);

// Add a response interceptor
client.interceptors.response.use(globalResponseHandler, globalErrorHandler);
// client.interceptors.response.use(globalResponseHandler);

export default client;
