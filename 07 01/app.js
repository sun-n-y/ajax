//
const btn = document.querySelector('.btn');
const url = './api/people.json';

btn.addEventListener('click', async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayItems(data);
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
