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
      const cardDiv: HTMLDivElement = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.id = `product_${item.id}`;

      const img: HTMLImageElement = document.createElement("img");
      img.src = item.image;

      const title: HTMLHeadingElement = document.createElement("h3");
      title.textContent = item.title;

      const category: HTMLParagraphElement = document.createElement("p");
      category.classList.add("category");
      category.textContent = item.category;

      const price: HTMLParagraphElement = document.createElement("p");
      price.classList.add("price");
      price.textContent = `Price: $${item.price}`;

      const rating: HTMLParagraphElement = document.createElement("p");
      rating.classList.add("rating");
      rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

      cardDiv.appendChild(img);
      cardDiv.appendChild(title);
      cardDiv.appendChild(category);
      cardDiv.appendChild(price);
      cardDiv.appendChild(rating);
      cardDiv.onclick = () => {
        setClicked(item.id);
      };

      document.getElementById("showElements")!.appendChild(cardDiv);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

let cartProducts: number[] = [];

/* Function to goto Home page */
function bringAllCategories() {
  location.href = "index.html";
}

/* Utility functions to display category wise STARTS */
function showCat1() {
  document.getElementById("showElements")!.innerHTML = "";
  document.getElementById("showElements")!.classList.add("display-pane");
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any[]) => {
      let jsonData: any[] = data;
      jsonData.forEach((item) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.id = `product_${item.id}`;

        const img: HTMLImageElement = document.createElement("img");
        img.src = item.image;

        const title: HTMLHeadingElement = document.createElement("h3");
        title.textContent = item.title;

        const category: HTMLParagraphElement = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        const price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Price: $${item.price}`;

        const rating: HTMLParagraphElement = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);
        cardDiv.onclick = () => {
          setClicked(item.id);
        };

        document.getElementById("showElements")!.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showCat2() {
  document.getElementById("showElements")!.innerHTML = "";
  document.getElementById("showElements")!.classList.add("display-pane");
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any[]) => {
      let jsonData: any[] = data;
      jsonData.forEach((item) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.id = `product_${item.id}`;

        const img: HTMLImageElement = document.createElement("img");
        img.src = item.image;

        const title: HTMLHeadingElement = document.createElement("h3");
        title.textContent = item.title;

        const category: HTMLParagraphElement = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        const price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Price: $${item.price}`;

        const rating: HTMLParagraphElement = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);
        cardDiv.onclick = () => {
          setClicked(item.id);
        };

        document.getElementById("showElements")!.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showCat3() {
  document.getElementById("showElements")!.innerHTML = "";
  document.getElementById("showElements")!.classList.add("display-pane");
  fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any[]) => {
      let jsonData: any[] = data;
      jsonData.forEach((item) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.id = `product_${item.id}`;

        const img: HTMLImageElement = document.createElement("img");
        img.src = item.image;

        const title: HTMLHeadingElement = document.createElement("h3");
        title.textContent = item.title;

        const category: HTMLParagraphElement = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        const price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Price: $${item.price}`;

        const rating: HTMLParagraphElement = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);
        cardDiv.onclick = () => {
          setClicked(item.id);
        };

        document.getElementById("showElements")!.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showCat4() {
  document.getElementById("showElements")!.innerHTML = "";
  document.getElementById("showElements")!.classList.add("display-pane");
  fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: any[]) => {
      let jsonData: any[] = data;
      jsonData.forEach((item) => {
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.id = `product_${item.id}`;

        const img: HTMLImageElement = document.createElement("img");
        img.src = item.image;

        const title: HTMLHeadingElement = document.createElement("h3");
        title.textContent = item.title;

        const category: HTMLParagraphElement = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        const price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Price: $${item.price}`;

        const rating: HTMLParagraphElement = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);
        cardDiv.onclick = () => {
          setClicked(item.id);
        };

        document.getElementById("showElements")!.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/* Function to add to cart */
function addToCart(productId: number) {
  cartProducts.push(productId);
  console.log("Product added to cart. Cart products:", cartProducts);
}
/* ENDS */

/* Function to display cart items */
function showCartItems() {
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
        const cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.id = `product_${item.id}`;

        const img: HTMLImageElement = document.createElement("img");
        img.src = item.image;

        const title: HTMLHeadingElement = document.createElement("h3");
        title.textContent = item.title;

        const category: HTMLParagraphElement = document.createElement("p");
        category.classList.add("category");
        category.textContent = item.category;

        const description: HTMLParagraphElement = document.createElement("p");
        description.classList.add("des");
        description.textContent = item.description;

        const price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        price.textContent = `Price: $${item.price}`;

        const rating: HTMLParagraphElement = document.createElement("p");
        rating.classList.add("rating");
        rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(category);
        cardDiv.appendChild(description);
        cardDiv.appendChild(price);
        cardDiv.appendChild(rating);

        document.getElementById("cartItems")!.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/* Function to goto Product Page */
function setClicked(setId: number) {
  window.sessionStorage.setItem("data", setId.toString());
  window.location.href = "singleProduct.html";
}
