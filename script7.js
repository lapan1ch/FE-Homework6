const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
document.body.appendChild(container);

let r = 128, g = 128, b = 0;

while (b <= 255) {
  const div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  container.appendChild(div);
  b += 5;
}
