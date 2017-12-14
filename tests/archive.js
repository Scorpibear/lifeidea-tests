module.exports = {
  'Archive contains link to the oldest article': function(browser) {
    let pathToArchive = "/archive/";
    browser.url(browser.launchUrl + pathToArchive);
    browser.expect.element('main').text.to.contain('LifeIdea.org начал свою жизнь');
    browser.end();
  }
};
