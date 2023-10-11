var x = parseInt(window.sessionStorage.getItem("data") || "0");
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
        if (item.id == x) {
            var y = document.getElementById("desPro");
            if (y)
                y.innerText = "".concat(item.description);
            y = document.getElementById("title-pro");
            if (y)
                y.innerText = "".concat(item.title);
            y = document.getElementById("img-pro");
            if (y)
                y.src = item.image;
            y = document.getElementById("cat-pro");
            if (y)
                y.innerText = item.category;
            y = document.getElementById("price-pro");
            if (y)
                y.innerText = "$".concat(item.price);
            y = document.getElementById("rating-pro");
            if (y)
                y.innerText = "Rating: ".concat(item.rating.rate, " (").concat(item.rating.count, " reviews)");
            y = document.getElementById("cartAdd");
            if (y)
                y.addEventListener("click", function () { return addToCart(item.id); });
        }
    });
})
    .catch(function (error) {
    console.error("Error:", error);
});
// Function to add a product to the cart
function addToCart(id_details) {
    // Retrieve existing cart data from sessionStorage
    var existingCartData = window.sessionStorage.getItem("cartData");
    // Convert existing cart data to an array or create an empty array
    var cartArray = existingCartData ? JSON.parse(existingCartData) : [];
    //changing add to cart option to added
    var y = document.getElementById("cartAdd");
    if (y)
        y.innerText = ('Added');
    // Add the new product ID to the cart array
    cartArray.push({ _id: id_details });
    // Update the cart data in sessionStorage
    window.sessionStorage.setItem("cartData", JSON.stringify(cartArray));
}
