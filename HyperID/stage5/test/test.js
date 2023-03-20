import path from 'path';
const pagePath = path.join(import.meta.url, '../../src/index.html');
import { StageTest, correct, wrong } from 'hs-test-web';

class Test extends StageTest {
	page = this.getPage(pagePath);

	tests = [
		// Test 1 - sendRequest method can make a request
		this.page.execute(async () => {
			let response;

			const requestData = {
				body: { data: 'test' },
				method: 'GET',
				url: '',
			}

			await sendRequest((res) => {response = res}, requestData);

			if(response?.status === 200 && response?.body === 'test') return correct();
			else return wrong('Has no status and body')
		}),
	]
}
it("Test stage", async () => {
	await new Test().runTests()
}
).timeout(30000);
