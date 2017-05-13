module.exports = {
  'Copyright note in footer' : function (browser) {
    let currentYear = new Date().getFullYear();
    browser
      .url(browser.launchUrl)
      .assert.containsText('footer', `LifeIdea.org © ${currentYear}`)
      .end();
  }
};
