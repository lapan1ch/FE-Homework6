const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Praesent eu lorem a risus vehicula venenatis eu ac nunc.",
    "Vivamus rhoncus pretium ultricies.",
    "Cras in risus vitae erat commodo lobortis.",
    "Nulla facilisi.",
    "Proin eget blandit augue.",
    "Suspendisse potenti.",
    "Sed at mauris ac libero posuere vestibulum.",
    "Donec vitae mi id purus sagittis faucibus.",
    "Nam vel est fermentum, dapibus metus vitae, consequat leo."
  ];
  
  function createParagraphs() {
    const container = document.getElementById('paragraphs');
  
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = document.createElement('p');
      paragraph.innerText = paragraphs[i];
      paragraph.className = 'paragraph';
      paragraph.onclick = function() {
        if (paragraph.innerText === paragraphs[i]) {
          paragraph.innerText = '*'.repeat(paragraphs[i].length);
          paragraph.classList.add('starred');
        } else {
          paragraph.innerText = paragraphs[i];
          paragraph.classList.remove('starred');
        }
      };
      container.appendChild(paragraph);
    }
  }
  
  createParagraphs();


  // 3. Задание

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