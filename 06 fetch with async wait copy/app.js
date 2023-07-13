//fetch example with function

const url = './api/people.json';

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const reponse = await fetch(url);
  const data = await reponse.json();
  showData(data);
});

const showData = (data) => {
  const element = document.createElement('div');
  element.innerHTML = data
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join('');
  document.body.appendChild(element);
  // return;
};
