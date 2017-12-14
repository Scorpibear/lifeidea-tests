module.exports = {
  'Author specified as "автор Миша Субоч"': function(browser) {
    let pathToArticle = "2012/12/new-year-new-goal/";
    browser.url(browser.launchUrl + pathToArticle);
    browser.expect.element('.entry-meta').text.to.contain('АВТОР: МИША СУБОЧ');
    browser.end();
  }
};
