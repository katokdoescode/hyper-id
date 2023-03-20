import path from 'path';
const indexPagePath = path.join(import.meta.url, '../../src/index.html');
const accountPagePath = path.join(import.meta.url, '../../src/account.html');
const loginPagePath = path.join(import.meta.url, '../../src/login.html');
const registerPagePath = path.join(import.meta.url, '../../src/register.html');
import { StageTest, correct, wrong } from 'hs-test-web';

class Test extends StageTest {
	indexPage = this.getPage(indexPagePath);
	accountPage = this.getPage(accountPagePath);
	loginPage = this.getPage(loginPagePath);
	registerPage = this.getPage(registerPagePath);

	tests = [
		// Test 1 - Document indexPage has heading
		this.node.execute(async () => {
			const title = await this.indexPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 2 - Document indexPage h1 is only one
		this.node.execute(async () => {
			const title = await this.indexPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),

		// Test 3 - Document accountPage has heading
		this.node.execute(async () => {
			const title = await this.accountPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 4 - Document accountPage h1 is only one
		this.node.execute(async () => {
			const title = await this.accountPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),

		// Test 5 - Document loginPage has heading
		this.node.execute(async () => {
			const title = await this.loginPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 6 - Document loginPage h1 is only one
		this.node.execute(async () => {
			const title = await this.loginPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),

		// Test 7 - Document registerPage has heading
		this.node.execute(async () => {
			const title = await this.registerPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 8 - Document registerPage h1 is only one
		this.node.execute(async () => {
			const title = await this.registerPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),
	];
};

it("Test stage", async () => {
	await new Test().runTests()
}
).timeout(30000);
