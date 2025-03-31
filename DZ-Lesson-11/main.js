const DivCarts = document.getElementById("idClass");
fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(cartsObj => {
    const {carts} = cartsObj;

    for (const cart of carts) {
        const div = document.createElement('div');
        div.classList.add('cart-product');

        const divWithCart = document.createElement('div');
        divWithCart.innerText = `
    Id: = ${cart.id};
    Total = ${cart.total}
    DiscountedTotal = ${cart.discountedTotal}
    UserId = ${cart.userId}
    TotalProducts = ${cart.totalProducts}
    TotalQuantity = ${cart.totalQuantity}
    `
        div.appendChild(divWithCart);

        for (const product of cart.products) {
            const productDiv = document.createElement('div');
            productDiv.innerText = `${product.title} — ${product.price} грн x ${product.quantity}`;
            div.appendChild(productDiv);

        }
        DivCarts.appendChild(div);
    }
})