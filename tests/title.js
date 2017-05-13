module.exports = {
  'Title: LifeIdea.org — Эффективная, интересная и счастливая жизнь' : function (browser) {
    browser
      .url(browser.launchUrl)
      .assert.title('LifeIdea.org — Эффективная, интересная и счастливая жизнь')
      .end();
  }
};
