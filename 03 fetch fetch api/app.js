//
const url = './api/people.json';

// const response = fetch(url);

// fetch(url)
//   .then((resp) => {
//     //reponse obejct
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
