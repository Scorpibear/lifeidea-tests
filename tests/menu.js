module.exports = {
  'Отображение меню с главной страницы на разделы': function(browser) {
    const sections = ['БЛОГ', 'ВСЕ СТАТЬИ', 'АУДИО', 'ПРОЕКТЫ', 'БЛАГОДАРНОСТЬ', 'КОНТАКТ', 'О СОЗДАТЕЛЕ'];
    browser.url(browser.launchUrl);
    sections.forEach(section => 
      browser.expect.element('#top-menu').text.contains(section)
    );
    browser.end();
  }
};
