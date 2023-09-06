//
const url = './api/people.json';

// const reponse = fetch(url);
// console.log(reponse);

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
