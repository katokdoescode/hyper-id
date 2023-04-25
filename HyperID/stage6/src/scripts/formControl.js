
const logout = () => {
	document.cookie = 'authToken=; path=/';
	window.location.href='./index.html'
};

const collectUserData = (form) => {
	if(typeof form === 'object') {
		const formData = new FormData(form);
		const userData = [];
		for(let data of formData) {
			userData.push(data);
		}
		return Object.fromEntries(userData);
	} else {
		console.error('Passed value is not an object');
		return undefined;
	}
};

const handleResponse = (status, method, token) => {
	if(token) document.cookie = `authToken=${token}; path=/`;
	status === 200 ? allOk(method) : error(status);
};

const allOk = (method) => window.location.assign(method);

const error = (status) => {
	throw new Error(`Error while request - status: ${status}`);
};

const submitRegister = (event) => {
	event.preventDefault();
	const userData = collectUserData(event.target);

	sendRequest(
		(res) => handleResponse(res.status, './login.html'),
		{
			url: 'register/',
			method: 'POST',
			body: userData,
		}
	);
}

const submitLogin = (event) => {
	event.preventDefault();
	const userData = collectUserData(event.target);

	sendRequest(
		(res) => handleResponse(res.status, './account.html', res.token),
		{
			url: 'login/',
			method: 'POST',
			body: userData,
		}
	);
};

const formRegister = document.getElementById('register');
if(formRegister) formRegister.onsubmit = (event) => submitRegister(event);

const formLogin = document.getElementById('login');
if(formLogin) formLogin.onsubmit = (event) => submitLogin(event);
