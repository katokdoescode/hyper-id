const sendRequest = async (
	callback,
	{
		body,
		method = 'GET',
		url = '',
	}
) => {
	const xhr = new XMLHttpRequest();
	const baseURI = 'http://localhost:8080/';

	// State listener
	xhr.onreadystatechange = () => {
		if (xhr.readyState === xhr.DONE) {
			// Call the callback to handle request response outside.
			callback({
				staus: xhr.status,
				body: xhr.response,
			});
		};
	};

	// By default this method will send only JSON data.
	xhr.open(method, baseURI + url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.withCredentials = false;

	// Send empty request in case of error while stringify body.
	xhr.send(JSON.stringify(body) ?? '');
};
