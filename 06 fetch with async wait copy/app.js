//fetch example with function

const url = './api/people.json';

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    showData(data);
  } catch (error) {
    console.log(error);
  }
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

// try {
//   console.log('hello');
//   console.log(polo);
//   console.log('hello');
// } catch (error) {
//   console.log(error);
// }
// console.log('outside hello');
