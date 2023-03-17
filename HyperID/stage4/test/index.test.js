import path from 'path';
const pagePath = path.join(import.meta.url, '../../src/index.html');
import { StageTest, correct, wrong } from 'hs-test-web';

class Test extends StageTest {
	page = this.getPage(pagePath);
	tests = [

		// Test 0 - Html has lang attribute
		// TODO: Can't read html tag
		// this.node.execute(async () => {
		// 	const html = await this.page.findBySelector('html');
		// 	console.log(html)
		// 	const lang = await html.getProperty('lang');
		// 	return lang ?
		// 		correct() :
		// 		wrong(`Your <html> tag must has the lang attribute.`);
		// }),

		// Test 1 - Documet has heading
		this.node.execute(async () => {
			const title = await this.page.findBySelector('h1');
			return title ?
				correct() :
				wrong(`Your page must contain a h1 element.`);
		}),

		// Test 2 - Documet h1 is only one
		this.node.execute(async () => {
			const title = await this.page.findAllBySelector('h1');
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
