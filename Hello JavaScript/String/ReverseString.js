// Way 01
const Name = "Sarafat Karim";
let reversedName = "";
for (let i = Name.length - 1; i >= 0; i--){
    // reversedName.concat(Name[i]);
    reversedName += Name[i];

}
console.log(reversedName);

// Way 02

const Name2 = "Sarafat Karim";
let reversedName2 = '';
for (const letter of Name2) {
    reversedName2 = letter + reversedName2;
}
console.log(reversedName2);


// Way 03

const Name3 = "Sarafat karim";
let reversedName3 = Name3.split("").reverse().join("");
console.log(reversedName3);