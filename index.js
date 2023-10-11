fetch("https://fakestoreapi.com/products")
    .then(function (response) {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
    .then(function (data) {
    var jsonData = data;
    jsonData.forEach(function (item) {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.id = "product_".concat(item.id);
        var img = document.createElement("img");
        img.src = item.image;
        var title = document.createElement("h3");
        title.textContent = item.title;
        var category = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;
        var price = document.createElement("p");
        price.classList.add("price");
        price.textContent = "Price: $".concat(item.price);
        var rating = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);
        cardDiv.onclick = function () {
            setClicked(item.id);
        };
        document.getElementById("showElements").appendChild(cardDiv);
    });
})
    .catch(function (error) {
    console.error("Error:", error);
});
var cartProducts = [];
function bringAllCategories() {
    location.href = "index.html";
}
function showCat1() {
    document.getElementById("showElements").innerHTML = "";
    document.getElementById("showElements").classList.add('display-pane');
    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var jsonData = data;
        jsonData.forEach(function (item) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.id = "product_".concat(item.id);
            var img = document.createElement("img");
            img.src = item.image;
            var title = document.createElement("h3");
            title.textContent = item.title;
            var category = document.createElement("p");
            category.classList.add("category");
            category.textContent = item.category;
            var price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: $".concat(item.price);
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(category);
            cardDiv.appendChild(price);
            cardDiv.appendChild(rating);
            cardDiv.onclick = function () {
                setClicked(item.id);
            };
            document.getElementById("showElements").appendChild(cardDiv);
        });
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
function showCat2() {
    document.getElementById("showElements").innerHTML = "";
    document.getElementById("showElements").classList.add('display-pane');
    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var jsonData = data;
        jsonData.forEach(function (item) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.id = "product_".concat(item.id);
            var img = document.createElement("img");
            img.src = item.image;
            var title = document.createElement("h3");
            title.textContent = item.title;
            var category = document.createElement("p");
            category.classList.add("category");
            category.textContent = item.category;
            var price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: $".concat(item.price);
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(category);
            cardDiv.appendChild(price);
            cardDiv.appendChild(rating);
            cardDiv.onclick = function () {
                setClicked(item.id);
            };
            document.getElementById("showElements").appendChild(cardDiv);
        });
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
function showCat3() {
    document.getElementById("showElements").innerHTML = "";
    document.getElementById("showElements").classList.add('display-pane');
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var jsonData = data;
        jsonData.forEach(function (item) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.id = "product_".concat(item.id);
            var img = document.createElement("img");
            img.src = item.image;
            var title = document.createElement("h3");
            title.textContent = item.title;
            var category = document.createElement("p");
            category.classList.add("category");
            category.textContent = item.category;
            var price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: $".concat(item.price);
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(category);
            cardDiv.appendChild(price);
            cardDiv.appendChild(rating);
            cardDiv.onclick = function () {
                setClicked(item.id);
            };
            document.getElementById("showElements").appendChild(cardDiv);
        });
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
function showCat4() {
    document.getElementById("showElements").innerHTML = "";
    document.getElementById("showElements").classList.add('display-pane');
    fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var jsonData = data;
        jsonData.forEach(function (item) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.id = "product_".concat(item.id);
            var img = document.createElement("img");
            img.src = item.image;
            var title = document.createElement("h3");
            title.textContent = item.title;
            var category = document.createElement("p");
            category.classList.add("category");
            category.textContent = item.category;
            var price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: $".concat(item.price);
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(category);
            cardDiv.appendChild(price);
            cardDiv.appendChild(rating);
            cardDiv.onclick = function () {
                setClicked(item.id);
            };
            document.getElementById("showElements").appendChild(cardDiv);
        });
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
// ... (similar functions for showCat2, showCat3, showCat4)
function addToCart(productId) {
    cartProducts.push(productId);
    console.log("Product added to cart. Cart products:", cartProducts);
}
function showCartItems() {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var jsonData = data;
        jsonData.forEach(function (item) {
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.id = "product_".concat(item.id);
            var img = document.createElement("img");
            img.src = item.image;
            var title = document.createElement("h3");
            title.textContent = item.title;
            var category = document.createElement("p");
            category.classList.add("category");
            category.textContent = item.category;
            var description = document.createElement("p");
            description.classList.add("des");
            description.textContent = item.description;
            var price = document.createElement("p");
            price.classList.add("price");
            price.textContent = "Price: $".concat(item.price);
            var rating = document.createElement("p");
            rating.classList.add("rating");
            rating.textContent = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(category);
            cardDiv.appendChild(description);
            cardDiv.appendChild(price);
            cardDiv.appendChild(rating);
            document.getElementById("cartItems").appendChild(cardDiv);
        });
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
}
function setClicked(setId) {
    window.sessionStorage.setItem("data", setId.toString());
    window.location.href = "singleProduct.html";
}
