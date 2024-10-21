let arr = [1, 2, 3, 4, 5, 6, 5 , 4, 3, 2, 2, 1];

function removeDuplicate(arr) {
    let uniqueArr = [];
    for (const x of arr) {
        if(!uniqueArr.includes(x)){
            uniqueArr.push(x);
        }
    }
    return uniqueArr;
}

const brr = removeDuplicate(arr);
console.log(brr); // [1, 2, 3, 4, 5]