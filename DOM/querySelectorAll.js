console.log('Now Running querySelectorAll');
const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi);

for (const li of someLi) {
    console.log(li);
}