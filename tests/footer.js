module.exports = {
  'Copyright note in footer' : function (browser) {
    let currentYear = new Date().getFullYear();
    browser
      .url(browser.launchUrl)
      .assert.containsText('footer', `LifeIdea.org © ${currentYear}`)
      .end();
  },
  'META section is not displayed': function(browser) {
    browser.url(browser.launchUrl);
    browser.expect.element('footer').text.to.not.contain('МЕТА');
    browser.end();
  }
};
