const addProduct = () => {
    const product = document.getElementById('product-name').value;
    const quantity = document.getElementById('product-quantity').value;

    displayProducts(product, quantity);
    savetoLocalStorage(product, quantity);
    product.value = "";
    quantity.value = "";
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById("product-container");
    const newProduct = document.createElement("li");
    newProduct.classList = "mt-3 text-green-500";
    newProduct.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(newProduct);
}

const getShoppingCart = () => {
    let cart = localStorage.getItem('cart');
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}

const savetoLocalStorage = (product, quantity) => {
    let cart = getShoppingCart();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}

const displayProductsFromLocalStorage = () => {
    const cart = getShoppingCart();
    for (const product in cart) {
        displayProducts(product, cart[product]);
    }   
}

displayProductsFromLocalStorage();