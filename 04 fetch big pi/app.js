//big picture
const url = './api/people.json';

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
