console.log("Reading from styles.js");
const mn = document.querySelectorAll('main section');

for (const sec of mn) {
    sec.style.backgroundColor = 'lightblue';
    sec.style.padding = '20px';
    sec.style.marginBottom = '10px';
    sec.style.borderRadius = '15px';
}


const mnHeading = document.querySelectorAll('main section h1');

for (const heading of mnHeading) {
    heading.style.color = 'blue';
    heading.style.textTransform = 'uppercase';
    heading.style.textAlign = 'center';
    heading.style.marginBottom = '10px';
}