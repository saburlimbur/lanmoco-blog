document.addEventListener('DOMContentLoaded', function () {

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // untuk handle ke arah section article dari navbar
  function handleArticleClick() {
    scrollToElement('article');
  }

  // untuk handle ke arah section contact dari navbar
  function handleContactClick() {
    scrollToElement('contact');
  }

  const article = document.getElementById('article');
  const contact = document.getElementById('contact');

  article.addEventListener('click', handleArticleClick);
  contact.addEventListener('click', handleContactClick);
});
