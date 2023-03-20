const sendRequest = async(
	callback,
	{
		body,
		method = 'GET',
		url = '',
		authToken = null,
	}
) => {
	const xhr = new XMLHttpRequest();
	const baseURI = 'http://localhost:8080/';

	xhr.onreadystatechange = () => {
		if (xhr.readyState === xhr.DONE) {
			const token = xhr.getResponseHeader('accessToken');
			callback({
				status: xhr.status,
				body: xhr.response,
				token,
			});
		};
	};

	xhr.open(method, baseURI + url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	if(authToken) xhr.setRequestHeader('Authorization', authToken);
	xhr.withCredentials = false;
	xhr.send(JSON.stringify(body) ?? '');
};
