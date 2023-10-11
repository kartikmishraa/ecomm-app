let x: number = parseInt(window.sessionStorage.getItem("data")||"0");
fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any[]) => {
      let jsonData: any[] = data;
      jsonData.forEach((item) => {
        if (item.id == x) {
          let y: HTMLElement | null = document.getElementById("desPro");
          if (y) y.innerText = `${item.description}`;
          y = document.getElementById("title-pro");
          if (y) y.innerText = `${item.title}`;
          y = document.getElementById("img-pro") as HTMLImageElement;
          if (y) y.src = item.image;
          y = document.getElementById("cat-pro");
          if (y) y.innerText = item.category;
          y = document.getElementById("price-pro");
          if (y) y.innerText = `$${item.price}`;
          y = document.getElementById("rating-pro");
          if (y) y.innerText = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;
          y = document.getElementById("cartAdd");
          if (y) y.addEventListener("click", () => addToCart(item.id));
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// Function to add a product to the cart
function addToCart(id_details: number) {
  // Retrieve existing cart data from sessionStorage
  const existingCartData = window.sessionStorage.getItem("cartData");

  // Convert existing cart data to an array or create an empty array
  const cartArray = existingCartData ? JSON.parse(existingCartData) : [];
  //changing add to cart option to added
  let y:HTMLElement = document.getElementById("cartAdd");
  if(y) y.innerText=('Added');
  // Add the new product ID to the cart array
  cartArray.push({ _id: id_details });

  // Update the cart data in sessionStorage
  window.sessionStorage.setItem("cartData", JSON.stringify(cartArray));
}
