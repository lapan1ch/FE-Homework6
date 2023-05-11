const cards = [
    {en: 'Hello', ru: 'Привет'},
    {en: 'How are you?', ru: 'Как дела?'}
  ];
  
  let language = 'ru';
  
  function updateCardsLanguage() {
    const langCards = document.querySelectorAll('.card-text');
    langCards.forEach(card => {
      const langClass = card.classList.contains('ru') ? 'ru' : 'en';
      const langText = cards[card.parentNode.dataset.index][language];
      card.classList.remove('ru', 'en');
      card.classList.add(language);
      card.textContent = langText;
      card.style.display = langClass === language ? 'block' : 'none';
    });
  }
  
  function handleLangButtonClick(event) {
    const lang = event.target.id;
    if (lang !== language) {
      language = lang;
      updateCardsLanguage();
    }
  }
  
  document.querySelectorAll('.card').forEach((card, index) => {
    const ruText = cards[index].ru;
    const enText = cards[index].en;
    card.dataset.index = index;
    card.addEventListener('click', () => {
      card.querySelector('.card-text.ru').classList.toggle('hidden');
      card.querySelector('.card-text.en').classList.toggle('hidden');
    });
    card.querySelector('.card-text.ru').textContent = ruText;
    card.querySelector('.card-text.en').textContent = enText;
  });
  
  document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', handleLangButtonClick);
  });