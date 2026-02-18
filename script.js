let products = JSON.parse(localStorage.getItem("products")) || [
    {
        name: "Mobile Charger",
        price: 299,
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Headphones",
        price: 799,
        image: "https://via.placeholder.com/300"
    }
];

function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="orderProduct('${product.name}')">Order Now</button>
            </div>
        `;
    });
}

function orderProduct(name) {
    let number = "919999999999";
    let message = "I want to order: " + name;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`);
}

displayProducts();
