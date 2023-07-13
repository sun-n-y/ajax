//fetch example with function

const url = './api/people.json';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      showData(data);
    })
    .catch((err) => {
      console.log(err);
    });
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
