const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  getData();
});

function getData() {
  //first ajax request

  //to create a ajax request, special object needed
  const xhr = new XMLHttpRequest();

  //once we have a new instance, we need to setup 2 methods & 1 property
  //mehtod 1
  xhr.open('GET', './api/sample.txt');
  //property
  xhr.onreadystatechange = function () {
    //console.log(xhr);
    //check for readystate = 4;
    //check for status
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  //method 2
  xhr.send();
}
console.log('hello world');

// //
// const xhr2 = new XMLHttpRequest();

// xhr2.open('get', './api/sample2.txt');
// xhr2.onreadystatechange = function () {
//   let text = xhr2.responseText;
//   console.log(text);
// };
// xhr2.send();
