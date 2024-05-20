import { servicesProducts } from "../services/product-service.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-container">
            <div class="img-container">
                <img src="${image}" alt="${name}">
            </div>
            <div class="card-container--info">
                <p>${name}</p>
                <div class="card-container--value">
                    <span>$${price}</span>
                    <button class="button-lixeira" data-id="${id}">
                        <img src="./src/imagens/🦆 icon _trash 2_.png" alt="lixeira">
                    </button>
                </div>
            </div>
        </div>

    `
    const deleteButton = card.querySelector('.button-lixeira');
    deleteButton.addEventListener('click', async () => {
        await servicesProducts.deleteCard(id);
        card.remove(); // Remove o card do DOM após a exclusão
    });

    return card;
}

const render = async () => {
    try {
        const listProduct = await servicesProducts.productList();
        
        listProduct.forEach((product) => {
            productContainer.appendChild(createElement(product.name, product.price, product.image, product.id));
        });

    } catch (error) {
        console.log(error)
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts.createProduct(name, price, image).then((res) => console.log(res)).catch((err) => console.log(err))
});

render();