console.log('reading from append.js');

// Where to add
const placeList = document.getElementById('place-list');

// What to be added
const element = document.createElement('li');
element.innerText = 'Khulna Sundarban';

// Append

placeList.appendChild(element);


// Adding a new section in main

const main = document.querySelector('main');

const sec = document.createElement('section');

const heading = document.createElement('h1');
heading.innerText = 'My all favourite food';
sec.appendChild(heading);

const list = document.createElement('ul');
const item1 = document.createElement('li');
item1.innerText = 'Biriyani';
list.appendChild(item1);

const item2 = document.createElement('li');
item2.innerText = 'Borhani';
list.appendChild(item2);

const item3 = document.createElement('li');
item3.innerText = 'korma polao';
list.appendChild(item3);

const item4 = document.createElement('li');
item4.innerText = 'chicken fry';
list.appendChild(item4);

sec.appendChild(list);
main.appendChild(sec);


// Adding a new section in main by using innerHTML

const sec2 = document.createElement('section');

sec2.innerHTML = `
<h1>My all favourite hobbies</h1>
<ul>
    <li>Playing cricket</li>
    <li>Watching movies</li>
    <li>Reading books</li>
    <li>Travelling</li>
</ul>
`
main.appendChild(sec2);