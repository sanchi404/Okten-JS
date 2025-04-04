// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


// const DivCarts = document.getElementById("idClass");
// fetch('https://dummyjson.com/carts')
// .then(res => res.json())
// .then(cartsObj => {
//     const {carts} = cartsObj;
//
//     for (const cart of carts) {
//         const div = document.createElement('div');
//         div.classList.add('cart-product');
//
//         const divWithCart = document.createElement('div');
//         divWithCart.innerText = `
//     Id: = ${cart.id};
//     Total = ${cart.total}
//     DiscountedTotal = ${cart.discountedTotal}
//     UserId = ${cart.userId}
//     TotalProducts = ${cart.totalProducts}
//     TotalQuantity = ${cart.totalQuantity}
//     `
//         div.appendChild(divWithCart);
//
//         for (const product of cart.products) {
//             const productDiv = document.createElement('div');
//             productDiv.innerText = `${product.title} — ${product.price} грн x ${product.quantity}`;
//             const img = document.createElement("img");
//             img.src = product.thumbnail;
//
//             div.appendChild(img)
//             div.appendChild(productDiv);
//
//         }
//         DivCarts.appendChild(div);
//     }
// })


//#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
const idClass2 = document.getElementById('idClass2');

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(massObj => {
    const {recipes:recipeObj} = massObj;
    console.log(recipeObj[0]);

    recipeObj.forEach(recipe => {
        console.log(recipe);
        const recipeCard = document.createElement("div")

        recipeCard.classList.add("recipe");

        const title = document.createElement("h3");
        console.log(title)
        title.innerText = recipe.name;

        ////Добавил ингредиенты
        const ingredientsTitle = document.createElement("h4");
        ingredientsTitle.innerText = "Ingredients:";
        const ingredientsList = document.createElement("ul");
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        })

        ///Добавил инструкции
        const instructionsTitle = document.createElement("h4");
        instructionsTitle.innerText = "Instructions:";
        const instructionsList = document.createElement("ul");
        recipe.instructions.forEach(instruction => {
            const li = document.createElement("li");
            li.innerText = instruction;
            instructionsList.appendChild(li);
        })

        /// Add img
        const img = document.createElement("img");
        img.src = recipe.image;
        img.classList.add("img");

        const ratingCount = document.createElement("p");
        ratingCount.innerText = `rating - ${recipe.rating}`


        recipeCard.appendChild(title);
        recipeCard.appendChild(ingredientsTitle);
        recipeCard.appendChild(ingredientsList);
        recipeCard.appendChild(instructionsTitle);
        recipeCard.appendChild(instructionsList);
        recipeCard.appendChild(ratingCount);
        recipeCard.appendChild(img);

        idClass2.appendChild(recipeCard);
    })
})