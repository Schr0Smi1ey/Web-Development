
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income)
        return "Invalid Input";
    else {
        return ((income - expenses) * 0.20);
    }
}


let income = parseFloat(6000);
let expenses = parseFloat(50000);
console.log(calculateTax(income, expenses)); // 1400