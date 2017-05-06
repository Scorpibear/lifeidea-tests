module.exports = {
  'Copyright note in footer' : function (browser) {
    let pageloadTimeout = 10000;
    let currentYear = new Date().getFullYear();
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', pageloadTimeout)
      .assert.containsText('footer', `LifeIdea.org © ${currentYear}`)
      .end();
  }
};