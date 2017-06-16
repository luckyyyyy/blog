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
		return fetch(`${baseURL}/${url}${params}`, {
			headers,
			method: 'GET',
		});
	},
	post(url, body) {
		return fetch(`${baseURL}/${url}`, {
			headers,
			method: 'POST',
			body: JSON.stringify(body),
		});
	},
};

export const owner = 'luckyyyyy';
export const repo = 'Blog';

