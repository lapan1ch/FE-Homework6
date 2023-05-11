const words = [
    {en: 'apple', ru: 'яблоко'},
    {en: 'orange', ru: 'апельсин'},
    {en: 'banana', ru: 'банан'},
    {en: 'pear', ru: 'груша'},
    {en: 'grape', ru: 'виноград'},
    {en: 'watermelon', ru: 'арбуз'},
    {en: 'peach', ru: 'персик'},
    {en: 'pineapple', ru: 'ананас'},
    {en: 'cherry', ru: 'вишня'},
    {en: 'strawberry', ru: 'клубника'}
  ];
  
  const container = document.getElementById('cards-container');
  
  words.forEach((word) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const ruParagraph = document.createElement('p');
    ruParagraph.textContent = word.ru;
    card.appendChild(ruParagraph);
  
    const enParagraph = document.createElement('p');
    enParagraph.textContent = word.en;
    enParagraph.classList.add('en');
    card.appendChild(enParagraph);
  
    card.addEventListener('click', () => {
      ruParagraph.classList.toggle('en');
      enParagraph.classList.toggle('en');
    });
  
    container.appendChild(card);
  });