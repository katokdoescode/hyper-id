import path from 'path';
const indexPagePath = path.join(import.meta.url, '../../src/index.html');
const registerPagePath = path.join(import.meta.url, '../../src/register.html');
const accountPagePath = path.join(import.meta.url, '../../src/account.html');
import { StageTest, correct, wrong } from 'hs-test-web';

class Test extends StageTest {
	indexPage = this.getPage(indexPagePath);
	registerPage = this.getPage(registerPagePath);
	accountPage = this.getPage(accountPagePath);

	tests = [
		// Test 1 - Documet has heading
		this.node.execute(async () => {
			const title = await this.indexPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 2 - Documet h1 is only one
		this.node.execute(async () => {
			const title = await this.indexPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),

		// Test 3 - Documet registerPage has heading
		this.node.execute(async () => {
			const title = await this.registerPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 4 - Documet registerPage h1 is only one
		this.node.execute(async () => {
			const title = await this.registerPage.findAllBySelector('h1');
			return title.length <= 1 ?
				correct() :
				wrong(`Your page must contain only one h1 element.`);
		}),
		// Test 5 - Documet accountPage has heading
		this.node.execute(async () => {
			const title = await this.accountPage.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 6 - Documet accountPage h1 is only one
		this.node.execute(async () => {
			const title = await this.accountPage.findAllBySelector('h1');
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
