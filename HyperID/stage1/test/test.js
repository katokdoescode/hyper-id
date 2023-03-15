import path from 'path';
const pagePath = path.join(import.meta.url, '../../src/index.html');
import { StageTest, correct, wrong } from 'hs-test-web';

class Test extends StageTest {
	page = this.getPage(pagePath);
	tests = [

		// Test 1 - the page has h1 title
		this.node.execute(async () => {
			const title = await this.page.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 2 - the page has form element
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			return form ?
				correct() :
				wrong(`Your page must contain a form element.`);
		}),

		// Test 3 - the page has input name username
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			const inputUsername = await form.findBySelector('input[name="username"]');
			return inputUsername ?
				correct() :
				wrong(`Your page must contain a input element with name "username".`);
		}),

		// Test 4 - the page has input name password
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			const inputPassword = await form.findBySelector('input[name="password"]');
			return inputPassword ?
				correct() :
				wrong(`Your page must contain a input element with name "password"`);
		}),

		// Test 5 - the input username is type text
		this.node.execute(async () => {
			const inputUsername = await this.page.findBySelector('input[name="username"]');
			const inputType = await inputUsername.getAttribute('type');
			return inputType === 'text' ? correct() : wrong('Input username has incorrect type');
		}),

		// Test 6 - the input username is required
		this.node.execute(async () => {
			const inputUsername = await this.page.findBySelector('input[name="username"]');
			const inputRequired = await inputUsername.getProperty('required');
			return inputRequired === 'true' ? correct() : wrong('Input username is not required, but must be');
		}),

		// Test 7 - the input username has placeholder
		this.node.execute(async () => {
			const inputUsername = await this.page.findBySelector('input[name="username"]');
			const inputPlaceholder = await inputUsername.getAttribute('placeholder');
			return inputPlaceholder !== '' ? correct() : wrong('Input username must has a placeholder');
		}),

		// Test 8 - the input password is type password
		this.node.execute(async () => {
			const inputPassword = await this.page.findBySelector('input[name="password"]');
			const inputType = await inputPassword.getAttribute('type');
			return inputType === 'password' ? correct() : wrong('Input password has incorrect type');
		}),

		// Test 9 - the input password is required
		this.node.execute(async () => {
			const inputPassword = await this.page.findBySelector('input[name="password"]');
			const inputRequired = await inputPassword.getProperty('required');
			return inputRequired === 'true' ? correct() : wrong('Input password is not required, but must be');
		}),

		// Test 10 - the input password has placeholder
		this.node.execute(async () => {
			const inputPassword = await this.page.findBySelector('input[name="password"]');
			const inputPlaceholder = await inputPassword.getAttribute('placeholder');
			return inputPlaceholder !== '' ? correct() : wrong('Input password must has a placeholder');
		}),

		// Test 11 - Form must have labels
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			const labels = await form.findAllBySelector('label');
			return labels.length === 2 ? correct() : wrong('Form must has two labels for the inputs');
		}),

		// Test 12 - Input username must have a notification
		this.node.execute(async () => {
			const notification = await this.page.findBySelector('input[name="username"] ~ *[class*="notification"]');
			return notification ? correct() : wrong('Your form has no notification element nearby the input username');
		}),

		// Test 13 - Input password must have a notification
		this.node.execute(async () => {
			const notification = await this.page.findBySelector('input[name="password"] ~ *[class*="notification"]');
			return notification ? correct() : wrong('Your form has no notification element nearby the input password');
		}),

		// Test 14 - Document has svg icon
		this.node.execute(async () => {
			const img = await this.page.findBySelector('img');
			const svg = await this.page.findBySelector('svg');
			if(img || svg) return correct();
			return wrong('The document must has an icon');
		}),

		// Test 15 - Form has button
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			const button = await form.findBySelector('button');
			return button ? correct() : wrong('The form has no button')
		}),

		// Test 16 - The button is type submit
		this.node.execute(async () => {
			const form = await this.page.findBySelector('form');
			const button = await form.findBySelector('button');
			const buttonType = await button.getProperty('type');
			return buttonType === 'submit' ? correct() : wrong('The button has incorrect type');
		}),
	];
};

it("Test stage", async () => {
	await new Test().runTests()
}
).timeout(30000);
