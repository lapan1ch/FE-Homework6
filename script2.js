const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (let j = 0; j < cards.length; j++) {
        cards[j].classList.remove('active');
      }
      this.classList.add('active');
    }
  });
}