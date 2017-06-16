// blog — public access
const Authorization = new Buffer(':a2cac38b23a257387e3620c12c73f6aaaa74541a').toString('base64');

const baseURL = 'https://api.github.com';
const headers = new Headers({
	Authorization: `Basic ${Authorization}`,
	'Content-Type': 'application/json',
});

export const http = {
	get(url, query) {
		let params = '';
		if (query) {
			const data = [];
			Object.keys(query).forEach((key) => {
				const dat = query[key];
				if (dat) {
					data.push(`${encodeURIComponent(key)}=${encodeURIComponent(dat)}`);
				}
			});
			if (data.length > 0) {
				params = `?${data.join('&').replace(/%20/g, '+')}`;
			}
		}
		return new Promise((resolve, reject) => {
			fetch(`${baseURL}/${url}${params}`, {
				headers,
				method: 'GET',
			}).then((res) => {
				if (res.ok) {
					resolve(res);
				} else {
					reject(res);
				}
			}).catch((err) => {
				reject(err);
			});
		});
	},
	post(url, body) {
		return new Promise((resolve, reject) => {
			fetch(`${baseURL}/${url}`, {
				headers,
				method: 'POST',
				body: JSON.stringify(body),
			}).then((res) => {
				if (res.ok) {
					resolve(res);
				} else {
					reject(res);
				}
			}).catch((err) => {
				reject(err);
			});
		});
	},
};

export const owner = 'luckyyyyy';
export const repo = 'Blog';

