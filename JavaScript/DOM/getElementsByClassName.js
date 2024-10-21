console.log('Now Running getElementsByClassName');
const fruits = document.getElementsByClassName('fav-fruits')

for (const fruit of fruits) {
    console.log(fruit);
    console.log(fruit.innerText);
}