const mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9',
    price: 69999,
    color: 'Midnight Black',
    camera: 12,
    RAM: '6GB'
}

// for of ---> Array or String
// for in ---> Object

for (let key in mobile) {
    console.log(key, " : ", mobile[key]);
}

const keys = Object.keys(mobile);

for (let key of keys) {
    console.log(key, " : ", mobile[key]);
}