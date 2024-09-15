console.log('Now Running classList');

const item = document.getElementById('para');

// before Adding any Class
console.log(item.classList);

// Adding class para-1
item.classList.add('para-1');
console.log(item.classList);

// Adding class para-2
item.classList.add('para-2');
console.log(item.classList);

// Adding class para-3
item.classList.add('para-3');
console.log(item.classList);


// removing para-3
item.classList.remove('para-3');
console.log(item.classList);

// removing para-2
item.classList.remove('para-2');
console.log(item.classList);

// removing para-1
item.classList.remove('para-1');
console.log(item.classList);