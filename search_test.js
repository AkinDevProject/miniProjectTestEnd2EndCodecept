Feature('search');

Scenario('test something', async (I) => {

	I.amOnPage('https://google.com');
	I.fillField('q','Chess');
	I.click('input[name="btnK"]');
	I.seeElement('.g .r h3');
	const titles = await I.grabTextFrom('.g .r h3');
	for (var i = 0; i < 3; i++) {
		I.see(titles[i]);
	}
});
