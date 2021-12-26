// Sampaio_Shopping_Cart_Javascript.js

//console.log("running");

//let carts = 4;
let carts = document.querySelectorAll('.add-cart');
console.log(carts);

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
        },
    {
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 20,
        inCart: 0
        },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 10,
        inCart: 0
        },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        price: 25,
        inCart: 0
        }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("my loop");
        cartNumbers();
        console.log("cartNumbers inside forloop");
        console.log(cartNumbers);
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    productNumbers = parseInt(productNumbers);
    console.log(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartnumbers', productNumbers + 1);
//        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartnumbers', 1);
//        document.querySelector('.cart span').textContent = 1;
    }
}

//    console.log("my loop");
//    console.log("added to cart");
//    console.log(productNumbers);
//    console.log(typeof productNumbers);
//    console.log(typeof productNumbers);

