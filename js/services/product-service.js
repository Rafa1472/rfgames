const productList = () => {
    return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const createProduct = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image,
        })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

async function deleteCard(id) {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar o produto');
        }
        console.log(`Produto com ID ${id} deletado com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

const productsArray = [
    {
      "name": "nome do jogo",
      "price": "valor do jogo",
      "image": "https://img.freepik.com/vetores-gratis/astronauta-bonito-esfregando-na-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-controlador-de-jogo-conceito-de-icone-de-recreacao-de-tecnologia-isolado-vetor-premium-estilo-flat-cartoon_138676-3715.jpg",
      "id": 1
    }
];

export const servicesProducts = {
    productList,
    createProduct,
    deleteCard,
    productsArray
}