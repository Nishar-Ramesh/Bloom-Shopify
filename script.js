const jsonData = [
  {
    id: "product1",
    brand: "Bloom",
    name: "CONTRAST COLLAR OVERSIZED POLO SHIRT",
    stars: 4,
    price: "$62.99",
    image: "img/products/MEN/PRO_1/Men_Pro1_img1.jpg",
    subImages:[
      "img/products/MEN/PRO_1/Men_Pro1_img2.jpg",
      "img/products/MEN/PRO_1/Men_Pro1_img3.jpg",
      "img/products/MEN/PRO_1/Men_Pro1_img4.jpg",
      "img/products/MEN/PRO_1/Men_Pro1_img5.jpg",
      "img/products/MEN/PRO_1/Men_Pro1_img6.jpg"
    ],
    quantity: 1,
    description: "Oversize polo shirt. Lapel collar with front button closure. Short sleeves. Contrasting jacquard detail at back. Contrast trim.",
    category: "Men"
  },
  {
    id: "product2",
    brand: "Bloom",
    name: "COTTON - LINEN BLEND KNIT POLO",
    stars: 4,
    price: "$40.99",
    image: "img/products/MEN/PRO_2/Men_Pro2_img1.jpg",
    subImages:[
      "img/products/MEN/PRO_2/Men_Pro2_img2.jpg",
      "img/products/MEN/PRO_2/Men_Pro2_img3.jpg",
      "img/products/MEN/PRO_2/Men_Pro2_img4.jpg",
      "img/products/MEN/PRO_2/Men_Pro2_img5.jpg",
      "img/products/MEN/PRO_2/Men_Pro2_img6.jpg"
    ],
    quantity: 1,
    description: "Open knit structured polo shirt. Lapel collar with front button closure. Short sleeves. Rib trim.",
    category: "Men"
  },
  {
    id: "product3",
    brand: "Bloom",
    name: "LIMITED EDITION BELTED PANTS",
    stars: 4,
    price: "$50.99",
    image: "img/products/MEN/PRO_3/Men_Pro3_img1.jpg",
    subImages:[
      "img/products/MEN/PRO_3/Men_Pro3_img2.jpg",
      "img/products/MEN/PRO_3/Men_Pro3_img3.jpg",
      "img/products/MEN/PRO_3/Men_Pro3_img4.jpg",
      "img/products/MEN/PRO_3/Men_Pro3_img5.jpg",
      "img/products/MEN/PRO_3/Men_Pro3_img6.jpg"
    ],
    quantity: 1,
    description: "Cropped fit pants made of cotton and linen blend fabric. Waistband with double front pleating detail and adjustable waist with self-belt. Side pockets and buttoned back welt pockets. Front zip and hidden metal hook closure.",
    category: "Men"
  },
  {
    id: "product4",
    brand: "Bloom",
    name: "SLIM FIT JEANS",
    stars: 4,
    price: "$48.99",
    image: "img/products/MEN/PRO_4/Men_Pro4_img1.jpg",
    subImages:[
      "img/products/MEN/PRO_4/Men_Pro4_img2.jpg",
      "img/products/MEN/PRO_4/Men_Pro4_img3.jpg",
      "img/products/MEN/PRO_4/Men_Pro4_img4.jpg",
      "img/products/MEN/PRO_4/Men_Pro4_img5.jpg",
      "img/products/MEN/PRO_4/Men_Pro4_img6.jpg"
    ],
    quantity: 1,
    description: "Slim fit jeans. Five pockets. Washed effect. Front zip and button closure.",
    category: "Men"
  },
  {
    id: "product5",
    brand: "Bloom",
    name: "BLOOM FOR HIM RED EDITION EAU DE PARFUM 100 ML",
    stars: 4,
    price: "$44.99",
    image: "img/products/MEN/PRO_5/Men_Pro5_img1.jpg",
    subImages:[
      "img/products/MEN/PRO_5/Men_Pro5_img2.jpg",
      "img/products/MEN/PRO_5/Men_Pro5_img3.jpg",
      "img/products/MEN/PRO_5/Men_Pro5_img4.jpg"
    ],
    quantity: 1,
    description: "Oriental eau de parfum. Fragrance pyramid includes notes of orange, amber and evernyl. A warm, elegant, and bright fragrance.",
    category: "Men"
  },
  {
    id: "product6",
    brand: "Bloom",
    name: "SATIN EFFECT MIDI DRESS",
    stars: 4,
    price: "$79.99",
    image: "img/products/WOMEN/PRO_1/Women_Pro1_img1.jpg",
    subImages:[
      "img/products/WOMEN/PRO_1/Women_Pro1_img2.jpg",
      "img/products/WOMEN/PRO_1/Women_Pro1_img3.jpg",
      "img/products/WOMEN/PRO_1/Women_Pro1_img4.jpg",
      "img/products/WOMEN/PRO_1/Women_Pro1_img5.jpg",
      "img/products/WOMEN/PRO_1/Women_Pro1_img6.jpg"
    ],
    quantity: 1,
    description: "V-neck dress with wide straps that cross at back. Fitted waist. Side hidden in-seam zip closure.",
    category: "Women"
  },
  {
    id: "product7",
    brand: "Bloom",
    name: "FLOWY PLEATED DRESS",
    stars: 4,
    price: "$89.99",
    image: "img/products/WOMEN/PRO_2/Women_Pro2_img1.jpg",
    subImages:[
      "img/products/WOMEN/PRO_2/Women_Pro2_img2.jpg",
      "img/products/WOMEN/PRO_2/Women_Pro2_img3.jpg",
      "img/products/WOMEN/PRO_2/Women_Pro2_img4.jpg",
      "img/products/WOMEN/PRO_2/Women_Pro2_img5.jpg",
      "img/products/WOMEN/PRO_2/Women_Pro2_img6.jpg"
    ],
    quantity: 1,
    description: "Midi dress with flowy neckline and short sleeves. Side pleats.",
    category: "Women"
  },
  {
    id: "product8",
    brand: "Bloom",
    name: "EMBROIDERED LINEN BLEND SKIRT ZW COLLECTION",
    stars: 4,
    price: "$35.99",
    image: "img/products/WOMEN/PRO_3/Women_Pro3_img1.jpg",
    subImages:[
      "img/products/WOMEN/PRO_3/Women_Pro3_img2.jpg",
      "img/products/WOMEN/PRO_3/Women_Pro3_img3.jpg",
      "img/products/WOMEN/PRO_3/Women_Pro3_img4.jpg",
      "img/products/WOMEN/PRO_3/Women_Pro3_img5.jpg",
      "img/products/WOMEN/PRO_3/Women_Pro3_img6.jpg"
    ],
    quantity: 1,
    description: "Midi skirt made with linen fabric. Mid waist and adjustable elastic drawstring waistband. Tonal embroidered eyelet detail.",
    category: "Women"
  },
  {
    id: "product9",
    brand: "Bloom",
    name: "BEADED SHORT SKIRT ZW COLLECTION",
    stars: 4,
    price: "$35.99",
    image: "img/products/WOMEN/PRO_4/Women_Pro4_img1.jpg",
    subImages:[
      "img/products/WOMEN/PRO_4/Women_Pro4_img2.jpg",
      "img/products/WOMEN/PRO_4/Women_Pro4_img3.jpg",
      "img/products/WOMEN/PRO_4/Women_Pro4_img4.jpg",
      "img/products/WOMEN/PRO_4/Women_Pro4_img5.jpg",
      "img/products/WOMEN/PRO_4/Women_Pro4_img6.jpg"
    ],
    quantity: 1,
    description: "Mini skirt with a high waist made of 100% viscose. Embroidered detail with bead appliqués. Interior lining. Hidden in-seam zip closure.",
    category: "Women"
  },
  {
    id: "product10",
    brand: "Bloom",
    name: "BLOOM WONDER ROSE EAU DE TOILETTE 180 ML",
    stars: 4,
    price: "$19.99",
    image: "img/products/WOMEN/PRO_5/Women_Pro5_img1.jpg",
    subImages:[
      "img/products/WOMEN/PRO_5/Women_Pro5_img2.jpg",
      "img/products/WOMEN/PRO_5/Women_Pro5_img3.jpg"
    ],
    quantity: 1,
    description: "In this fragrance you’ll experience all the adventure of a fruity cocktail made up of peach, red berries and coconut blended with delicate notes of peony, violet and jasmine, finishing with vibrant base notes of vanilla and musk.",
    category: "Women"
  },
  {
      id: "product11",
      brand: "Bloom",
      name: "RAISED FLOWER EARRINGS",
      stars: 4,
      price: "$29.99",
      image: "img/products/Accessories/PRO_1/Acc_Pro1_img1.jpg",
      subImages:[
        "img/products/Accessories/PRO_1/Acc_Pro1_img2.jpg",
        "img/products/Accessories/PRO_1/Acc_Pro1_img3.jpg",
        "img/products/Accessories/PRO_1/Acc_Pro1_img4.jpg",
        "img/products/Accessories/PRO_1/Acc_Pro1_img5.jpg",
        "img/products/Accessories/PRO_1/Acc_Pro1_img6.jpg"
        ],
      quantity: 1,
      description:
        "Metal earrings with raised flower-shaped charms. Butterfly closure.",
      category: "Accessories"
      },
      {
        id: "product12",
        brand: "Bloom",
        name: "3-PACK OF CHARM NECKLACES",
        stars: 4,
        price: "$42.99",
        image: "img/products/Accessories/PRO_2/Acc_Pro2_img1.jpg",
        subImages:[
          "img/products/Accessories/PRO_2/Acc_Pro2_img2.jpg",
          "img/products/Accessories/PRO_2/Acc_Pro2_img3.jpg",
          "img/products/Accessories/PRO_2/Acc_Pro2_img4.jpg",
          "img/products/Accessories/PRO_2/Acc_Pro2_img5.jpg",
          "img/products/Accessories/PRO_2/Acc_Pro2_img6.jpg"
          ],
        quantity: 1,
        description:
          "Pack of three different length metal necklaces with charms in different shapes, materials, and sizes. Lobster clasp closure.",
        category: "Accessories"
        },
        {
          id: "product13",
          brand: "Bloom",
          name: "IRREGULAR PEARL NECKLACE",
          stars: 4,
          price: "$55.99",
          image: "img/products/Accessories/PRO_3/Acc_Pro3_img1.jpg",
          subImages:[
            "img/products/Accessories/PRO_3/Acc_Pro3_img2.jpg",
            "img/products/Accessories/PRO_3/Acc_Pro3_img3.jpg",
            "img/products/Accessories/PRO_3/Acc_Pro3_img4.jpg",
            "img/products/Accessories/PRO_3/Acc_Pro3_img5.jpg"
            ],
          quantity: 1,
          description:
            "Necklace made of irregular cultured pearls.",
          category: "Accessories"
        },
          {
            id: "product14",
            brand: "Bloom",
            name: "OVAL SUNGLASSES",
            stars: 4,
            price: "$56.99",
            image: "img/products/Accessories/PRO_4/Acc_Pro4_img1.jpg",
            subImages:[
              "img/products/Accessories/PRO_4/Acc_Pro4_img2.jpg",
              "img/products/Accessories/PRO_4/Acc_Pro4_img3.jpg",
              "img/products/Accessories/PRO_4/Acc_Pro4_img4.jpg",
              "img/products/Accessories/PRO_4/Acc_Pro4_img5.jpg",
              "img/products/Accessories/PRO_4/Acc_Pro4_img6.jpg"
              ],
            quantity: 1,
            description:
              "Sunglasses with oval acetate frames in tortoiseshell effect. Polarized lenses. Case included.",
            category: "Accessories"
            },
            {
            id: "product15",
            brand: "Bloom",
            name: "STRAPPY FAUX PATENT LEATHER SANDALS",
            stars: 4,
            price: "$28.99",
            image: "img/products/Accessories/PRO_5/Acc_Pro5_img1.jpg",
            subImages:[
              "img/products/Accessories/PRO_5/Acc_Pro5_img2.jpg",
              "img/products/Accessories/PRO_5/Acc_Pro5_img3.jpg",
              "img/products/Accessories/PRO_5/Acc_Pro5_img4.jpg",
              "img/products/Accessories/PRO_5/Acc_Pro5_img5.jpg"
              ],
            quantity: 1,
            description:
              "Heeled faux patent leather sandals. Front strap. Buckled ankle strap closure.",
            category: "Accessories"
            },

];
var cartJson = [];

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");
  const close = document.getElementById("close");

  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  let cartJson = JSON.parse(localStorage.getItem("cartJson")) || [];
  let cartCounterIn = localStorage.getItem("cartCounter") || 0;
  function initializeCart() {
    // Retrieve the cart counter from localStorage
    let cartCounterIn = localStorage.getItem("cartCounter") || 0;
    let cartCounterElement = document.getElementById("main-bag");
    let mobileCounterElement = document.getElementById("mobile-cart");
    // Update the cart counter on the page
    if (cartCounterIn > 0) {
      cartCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;
      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;
    } else {
      // If cartCounterIn is 0, hide the cart counter

      cartCounterElement.innerHTML = `<a href="cart.html" ><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
    }
  }
  window.onload = function () {
    updateActiveClass();
    initializeCart();
  };

  function getCartJsonFromStorage() {
    const cartStoreJson = localStorage.getItem("cartJson");
    console.log("function cart json " + cartStoreJson);
    return cartStoreJson ? JSON.parse(cartStoreJson) : [];
  }

  function removeFromCart(productId) {
    // Retrieve and parse the cartJson from localStorage
    let cartJsonString = localStorage.getItem("cartJson");
    if (!cartJsonString) {
      console.log("Cart is empty.");
      return;
    }
    let cartJson = JSON.parse(cartJsonString);
    if (!Array.isArray(cartJson)) {
      console.log("Cart data is malformed.");
      return;
    }
    // Filter out the product with the given productId
    cartJson = cartJson.filter((item) => item.id !== productId);
    // Update the cartJson in localStorage
    localStorage.setItem("cartJson", JSON.stringify(cartJson));

    let totalQuantity = cartJson.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Update the cart counter on the page only if totalQuantity is greater than 0
    if (totalQuantity > 0) {
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile-cart");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
    } else {
      // If totalQuantity is 0, hide the cart counter
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile-cart");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
    }
    localStorage.setItem("cartCounter", totalQuantity);
    console.log("remove function " + localStorage.getItem("cartJson"));
    displayCart();
  }

  // Function to update quantity in the cart
  function updateQuantity(productId, newQuantity) {
    let cartJsonString = localStorage.getItem("cartJson");
    if (!cartJsonString) {
      console.log("Cart is empty.");
      return;
    }

    let cartJson = JSON.parse(cartJsonString);

    // Ensure cartJson is an array
    if (!Array.isArray(cartJson)) {
      console.log("Cart data is malformed.");
      return;
    }

    var item = cartJson.find((item) => item.id === productId);
    if (item) {
      item.quantity = parseInt(newQuantity, 10) || 1;
    }

    // Calculate the total quantity in the cart
    let totalQuantity = cartJson.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Update the cart counter on the page
    if (totalQuantity > 0) {
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile-cart");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
    } else {
      // If totalQuantity is 0, hide the cart counter
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile-cart");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
    }

    localStorage.setItem("cartJson", JSON.stringify(cartJson));
    localStorage.setItem("cartCounter", totalQuantity);
    displayCart();
  }

  function getStarIcons(starCount) {
    let starsHtml = "";
    for (let i = 0; i < starCount; i++) {
      starsHtml += '<i class="fa fa-star"></i>';
    }
    return starsHtml;
  }

  let productContainer = document.getElementById("productContainer");

  let selectedProduct = [];

  var singleProDetails = document.querySelector(".single-pro-details");

  function getSelectedProductFromStorage() {
    const storedProduct = localStorage.getItem("selectedProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  }

  function getSingleProductFromStorage() {
    const selectedProductJson = localStorage.getItem("singleProdJson");
    return selectedProductJson ? JSON.parse(selectedProductJson) : null;
  }

  if (!!productContainer) {
    document.addEventListener("DOMContentLoaded", function () {
      selectedProduct = getSelectedProductFromStorage();
      // we can now use the selectedProduct object as needed
    });

    // function increaseCartCount() {}
    function addToCart(productId,qty) {
      // Increment the cart counter
      if(qty){
        cartCounterIn=parseInt(cartCounterIn);
        cartCounterIn+=qty;
      }
      else{
        cartCounterIn++;
        qty=1;
      }
      
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile-cart");
      // to update the number displayed in the top right corner of the cart icon
      cartCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;

      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;
      const existingCartItem = cartJson.find((item) => item.id === productId);
      if (existingCartItem) {
        // If the product exists, increase the quantity
        existingCartItem.quantity += qty;
      } else {
        // If the product doesn't exist, add it to the cart
        const productToAdd = jsonData.find((item) => item.id === productId);
        const newCartItem = { ...productToAdd, quantity: qty };
        cartJson.push(newCartItem);
      }
      localStorage.setItem("cartCounter", cartCounterIn);
      localStorage.setItem("cartJson", JSON.stringify(cartJson));
      // You can also implement additional logic here, such as adding the selected product to the shopping cart
    }

    function copyDataToSelectedProduct(productId) {
      const selectedProductData = jsonData.find(
        (product) => product.id === productId
      );
      selectedProduct = { ...selectedProductData }; // Copy the data
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

      singleProdJson = { ...selectedProductData };
      localStorage.setItem("singleProdJson", JSON.stringify(singleProdJson));

      // cartJson.push(selectedProduct);
      // localStorage.setItem('cartJson', JSON.stringify(cartJson));
    }

    // Function to handle click events
    function handleProductClick(productId) {
      //console.log("JSON:", JSON.stringify(jsonData));
      //let eventProdId = event.target.id;
      console.log("id :" + productId);
      copyDataToSelectedProduct(productId);

      console.log("Selected Product:", JSON.stringify(selectedProduct));
      // You can now use the selectedProduct object as needed
    }

    function renderProducts(jsonData){
      document.getElementById('productContainer').innerHTML="";
      jsonData.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.id = product.id;
        productDiv.className = "pro";
        productDiv.innerHTML = `
            <a href="singleproduct.html">
                <img class="pro-img" src="${product.image}" alt="${product.name}">
            </a>
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">${getStarIcons(product.stars)}</div>
                <h4>${product.price}</h4>
            </div>
            <i class="fa fa-shopping-cart cart"></i>
        `;
        productDiv.addEventListener("click", function () {
          handleProductClick(product.id);
        });
  
        let cartIcon = productDiv.querySelector(".cart");
        cartIcon.addEventListener("click", function () {
          addToCart(product.id);
        });
        document.getElementById('productContainer').appendChild(productDiv);
    });
  
    }
    renderProducts(jsonData);
    // Function to filter products based on category
    function filterProducts(category) {
      if (category === 'All') {
        renderProducts(jsonData);
      } else {
        const filteredProducts = jsonData.filter(product => product.category === category);
        renderProducts(filteredProducts);
      }
    }

    // Event listener for dropdown links
    document.querySelectorAll('.dropdown-content a').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const category = e.target.textContent; // Get category from clicked link
          filterProducts(category);
      });
  });

    
  
  
  }

  const mainImg = document.getElementById("mainImg");
  if (window.location.pathname.includes("singleproduct.html")) {
    const selectedProductJson = getSingleProductFromStorage();
    console.log("Selected Product inner:", JSON.stringify(selectedProductJson));
    let singleProductId = selectedProductJson.id;
    if (selectedProductJson) {
      mainImg.src = selectedProductJson.image;

      // Populate other product details
      singleProDetails.innerHTML = `
      <h6>${selectedProductJson.brand}</h6>
      <h4>${selectedProductJson.name}</h4>
      <h2>${selectedProductJson.price}</h2>
      <select id="sizeSelect">
          <option>Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
      </select>
      <input id="qty" type="number" value="1" min="1">
      <button id="spAddCart" class="normal">Add to cart</button>
      <h4>Product details</h4>
      <span>${selectedProductJson.description}</span>
      `;
    }

    // Add a click event listener to the shopping cart icon in the product card
    let SingleProdAdd = singleProDetails.querySelector("#spAddCart");
    SingleProdAdd.addEventListener("click", function () {
      let selectedSize = document.getElementById("sizeSelect").value;
      let qty = document.getElementById("qty").value;
      if (selectedSize === "Select Size") {
        alert("Please select a size before adding to cart.");
        return;
      }
      addToCart(singleProductId,parseInt(qty));
    });
  }

  // Function to display the cart in cart.html
  if (window.location.pathname.includes("cart.html")) {
    function displayCart() {
      //var myAnchor = document.getElementById('myAnchor');
      var cartTableBody = document.getElementById("cart-table-body");
      cartTableBody.innerHTML = "";

      const getCartJson = getCartJsonFromStorage();
      console.log("get cart json " + typeof getCartJson);
      // Check if getCartJson is not undefined before attempting to iterate
      if (getCartJson) {
        var subtotal = 0;

        getCartJson.forEach((innerItem) => {
          var row = document.createElement("tr");
          const item =
            typeof innerItem === "string" ? JSON.parse(innerItem) : innerItem;
          console.log("inside foreach items" + typeof item);
          // Extract numerical value from the price (remove the dollar sign and convert to a number)
          var itemPrice = parseFloat(item.price.replace("$", ""));

          var itemSubtotal = itemPrice * item.quantity;
          subtotal += itemSubtotal;

          row.innerHTML = `
                    <td><a href="" class="remove-from-cart"><i class="fa fa-times-circle"></i></a></td>
                    <td><img src="${item.image}" alt="${item.name}"></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" value="${item.quantity}" class="update-quantity"></td>
                    <td>${itemSubtotal}</td>
                    `;
          cartTableBody.appendChild(row);

          const removeButton = row.querySelector(".remove-from-cart");
          const quantityInput = row.querySelector(".update-quantity");

          removeButton.addEventListener("click", function () {
            removeFromCart(item.id);
          });

          quantityInput.addEventListener("change", function () {
            updateQuantity(item.id, this.value);
          });
        });

        // Check if subtotal is defined before using toFixed method
        if (subtotal !== undefined) {
          var subtotalElement = document.getElementById("subtotal-amount");
          var totalElement = document.getElementById("total-amount");
          var shipElement = document.getElementById("ship-amount");

          subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
          if (subtotal <= 50 && subtotal > 0) {
            let shipCharge = 10;
            let totalAmount = subtotal + 10;
            shipElement.textContent = `$${shipCharge.toFixed(2)}`;
            totalElement.textContent = `$${totalAmount.toFixed(2)}`;
          } else {
            shipElement.textContent = "Free";
            totalElement.textContent = `$${subtotal.toFixed(2)}`;
          }
        }
      }
    }

    // Call the displayCart function
    displayCart();
  }

  // Function to update the active class based on the current page
  function updateActiveClass() {
    var links = document.querySelectorAll("#navbar a");
    var currentPage = window.location.href;
    links.forEach(function (link) {
      // Check if the current page includes the link's href or if the link represents the "Cart" page
      if (
        currentPage.includes(
          link.getAttribute("href") || link.getAttribute("href") === "cart.html"
        )
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // function to initially set the active class
});

if (window.location.pathname.includes("home.html")) {
  // redirect to shop functionality
  let homeButton1 = document.getElementById("homeButton");
  homeButton1.addEventListener("click", redirectToPage);

  let homeButton2 = document.getElementById("homeButton2");
  homeButton2.addEventListener("click", redirectToPage);

  let homeButton3 = document.getElementById("homeButton3");
  homeButton3.addEventListener("click", redirectToPage);

  function redirectToPage(pageFilename) {
    window.location.href = "shop.html";
  }
}



$(document).ready(function() {
  var images = [
    'url("https://i.imgur.com/EWTOl5V.jpg")',
    'url("https://i.imgur.com/oYPkppD.jpg")',
    'url("https://i.imgur.com/aCmaidb.jpg")',
    'url("https://i.imgur.com/Bng3ICT.jpg")',
    'url("https://i.imgur.com/jOVlIGX.jpg")'
  ];
  var currentIndex = 0;

  function changeBackground() {
      $('#hero').css('background-image', images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
  }
  
  setInterval(changeBackground, 2000);
  changeBackground(); 
  var productData=JSON.parse(localStorage.getItem("singleProdJson"));
  var subImages =productData.subImages;
    // Add sub-images to the DOM
    var smallImgGroup = $('.small-img-group');
    $.each(subImages, function(index, src) {
        smallImgGroup.append(
            '<div class="small-img"><img src="' + src + '" alt="Sub Image ' + (index + 1) + '"></div>'
        );
    });

    // Add click event to swap main image with sub-image
    //productData.image
    $('.small-img img').on('click', function() {
        let mainSrc=$('#mainImg').attr('src');
        var newSrc = $(this).attr('src');
        $('#mainImg').attr('src', newSrc);
        $(this).attr('src',mainSrc);
    });
});

