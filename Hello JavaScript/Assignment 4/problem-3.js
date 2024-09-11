
function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    let digits = "0123456789";
    for (let i = 0; i < name.length; i++) {
        if (digits.includes(name[i])) {
            return true;
        }
    }
    return false;
}


let name = ["Raj"];
console.log(checkDigitsInName(name)); // true