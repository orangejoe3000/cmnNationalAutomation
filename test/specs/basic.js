const expect = require('expect.js');
const chalk = require('chalk');

before(() => {
  browser.url(`/`);
});

describe('CMN National Site', () => {
  it('should have the right title', () => {
    const title = browser.getTitle();
    console.log(chalk.green(title));
    expect(title).to.equal(`Children's Miracle Network Hospitals`);
  });
});
