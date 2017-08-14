module.exports = {
  'Похожие статьи отображаются на странице со статьей': function(browser) {
    let pathToArticle = '2009/01/power-of-consciousness/';
    browser.url(browser.launchUrl + pathToArticle);
    let relatedArticles = ['О предназначении, ценностях, миссии, главной цели жизни и призвании',
      'Как побороть лень?', 'Raise Your Consciousness — повышай свою сознательность',
      'Твоё развитие', 'Музыка, повышающая сознательность', 'Мотивация на различных стадиях деятельности',
      'Сознательность, глубокая и обыкновенная бессознательность',
      'Вселенная всегда говорит «Да!»'];
    
    browser.expect.element('.related').text.to.contain("Похожие статьи");
    relatedArticles.forEach(article => {
      browser.expect.element('.related').text.to.contain(article);
    })
    browser.end();
  }
}
