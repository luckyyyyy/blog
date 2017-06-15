import axios from 'axios';
// blog — public access
const Authorization = new Buffer(':a2cac38b23a257387e3620c12c73f6aaaa74541a').toString('base64');
const onRequest = (req) => {
	req.headers.Authorization = `Basic ${Authorization}`;
	return req;
};
const onRequestError = error => Promise.reject(error);

export const owner = 'luckyyyyy';
export const repo = 'Blog';
export const http = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 10000,
});

http.interceptors.request.use(onRequest, onRequestError);
// http.interceptors.response.use(onResponse, onResponseError);
