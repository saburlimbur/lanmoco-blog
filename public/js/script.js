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

// Bagian untuk filter artikel

document.addEventListener('DOMContentLoaded', function () {
  const spiritualFilter = document.getElementById('spiritual-filter');
  const politikFilter = document.getElementById('politik-filter');
  const teknologiFilter = document.getElementById('teknologi-filter');
  const musikFilter = document.getElementById('musik-filter');
  const photographyFilter = document.getElementById('photography-filter');
  const olahragaFilter = document.getElementById('olahraga-filter');
  const travelFilter = document.getElementById('travel-filter');

  // fungsi dibawah ini akan mengambil semua class tertentu artikel,menggunakan querySelectorAll

  const spiritualArticles = document.querySelectorAll('.spiritual-article');
  const politikArticles = document.querySelectorAll('.politik-article');
  const teknologiArticles = document.querySelectorAll('.teknologi-article');
  const musikArticles = document.querySelectorAll('.musik-article');
  const photographyArticles = document.querySelectorAll('.photography-article');
  const olahragaArticles = document.querySelectorAll('.olahraga-article');
  const travelArticles = document.querySelectorAll('.travel-article');

  // fungsi dibwh ini untuk memfilter halaman yang dipilih menggunakan addEventListener

  spiritualFilter.addEventListener('click', function () {
    showArticles(spiritualArticles);
  });

  politikFilter.addEventListener('click', function () {
    showArticles(politikArticles);
  });

  teknologiFilter.addEventListener('click', function () {
    showArticles(teknologiArticles);
  });

  musikFilter.addEventListener('click', function () {
    showArticles(musikArticles);
  });

  photographyFilter.addEventListener('click', function () {
    showArticles(photographyArticles);
  });

  olahragaFilter.addEventListener('click', function () {
    showArticles(olahragaArticles);
  });

  travelFilter.addEventListener('click', function () {
    showArticles(travelArticles);
  });

  // fungsi dibawah ini untuk menampilkan artikel sesuai dengan filter
  function showArticles(articles) {
    hideAllArticles(); // dan menyembunyikan artikel

    articles.forEach(function (article) {
      // menampilkan artikel sesuai dgn katerogori filter yang dipilih
      article.style.display = 'block';
    });
  }

  // ini utk menyembunyikan semua artikel ketika setiap filter dipanggil akan menjadi display = none
  
  function hideAllArticles() {
    spiritualArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    politikArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    teknologiArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    musikArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    photographyArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    olahragaArticles.forEach(function (article) {
      article.style.display = 'none';
    });

    travelArticles.forEach(function (article) {
      article.style.display = 'none';
    });
  }
});
