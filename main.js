let div = $(`<div>Hello World</div>`);
let body = $(`body`);

body.append(div);

div.on(`click`, () => {
  alert(`Hello World`);
});

