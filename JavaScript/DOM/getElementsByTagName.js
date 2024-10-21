console.log('Now Running getElementsByTagName');

const liCollection = document.getElementsByTagName('li');

for (const li of liCollection) {
    console.log(li);
}

const allHeadings = document.getElementsByTagName('h1');

for (const h of allHeadings) {
    console.log(h.innerText);
}