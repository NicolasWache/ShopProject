const data = [
  {id: "1",brand: "Samsung", name: "Galaxy S23 Ultra", price: "1199", img: "./img/s23Ultra.avif", category: "Smartphones"},
  {"id": "2","brand": "Samsung", "name": "Galaxy Z Fold ", "price": "199", "img": "./img/samsungZFold4.webp", "category": "Smartphones"},
  {"id": "3","brand": "Apple", "name": "Iphone 14 Pro", "price": "1199", "img": "./img/Iphone14Pro.webp", "category": "Smartphones"},
  {"id": "4","brand": "Apple", "name": "Iphone 14 Pro Max", "price": "1399", "img": "./img/Iphone14ProMax.jpg", "category": "Smartphones"},
  {"id": "5","brand": "Oppo", "name": "Find X6 Pro", "price": "1099", "img": "./img/Oppofindx6pro.avif", "category": "Smartphones"},
  {"id": "6","brand": "OnePlus", "name": "11", "price": "799", "img": "./img/O+11Pro.jpg", "category": "Smartphones"},
  {"id": "7","brand": "Apple", "name": "Macbook Air M2", "price": "1199", "img": "./img/MacbookAirM2.webp", "category": "PC"},
  {"id": "8","brand": "Apple", "name": "Macbook Pro M2 14", "price": "1699", "img": "./img/MacbookPro14.jpg", "category": "PC"},
  {"id": "9","brand": "Apple", "name": "Macbook Pro M1 Max 16", "price": "2099", "img": "./img/MacbookPro16.webp", "category": "PC"},
  {"id": "10","brand": "Dell", "name": "XPS 13", "price": "1399", "img": "./img/xps13.jpg", "category": "PC"},
  {"id": "11","brand": "Dell", "name": "XPS 16 ", "price": "1899", "img": "./img/xps15.jpg", "category": "PC"},
  {"id": "12","brand": "Samsung", "name": "Galaxy Book 3 Ultra", "price": "3099", "img": "./img/galaxybook3Ultra.webp", "category": "PC"},
  {"id": "13","brand": "Samsung", "name": "Coque S23 Ultra", "price": "59.99", "img": "./img/cases23Ultra.avif", "category": "Accessoires"},
  {"id": "14","brand": "Apple", "name": "Coque Iphone 14 Pro", "price": "59.99", "img": "./img/caseIphone14pro.jpg", "category": "Accessoires"},
  {"id": "15","brand": "Apple", "name": "Coque Iphone 14 Pro Max", "price": "59.99", "img": "./img/caseIphone14ProMax.jpg", "category": "Accessoires"}
] 


  // On charge les catégories pour le texte dynamique
  dynamicCategory()
  // On affiche tous les articles en page d'accueil
  readArticles (data)
  // Pour le bouton Smartphones
  readByCategory("Smartphones");
  // Pour le bouton PC
  readByCategory("PC");
  // Pour le bouton accessoires
  readByCategory("Accessoires");
  // Pour le bouton tous les articles
  readAllCategories("Tous");
  // Pour le bouton home
  readAllCategories("homeButton");
  // on actualise le panier a chaque click sur le mini Panier 
  clickOnMiniCart();


function dynamicCategory(category){
  let article = document.getElementById("article");
  article.innerHTML += (`
  <div  class=" flex flex-col mb-10 border-b-2">
  
  <h2 class="text-4xl font-semibold font-montserrat">${category===undefined ? "Tous les articles" : category}</h2>
  <p class="text-lg mb-4 mt-2 text-slate-500 font-montserrat">
  ${category ? (category==="Accessoires" ? "N’hésitez pas à choisir parmi notre meilleure sélection d'" + category : "N’hésitez pas à choisir parmi notre meilleure sélection de " + category) : "N’hésitez pas à choisir parmi notre meilleure sélection de produits"}
  </p>
</div>
<div id="prearticle" class="articleReset flex justify-evenly m-auto flex-wrap">
</div>`
  )
}

function readArticles(data)  {
  console.log(article.id)
  let prearticle = document.getElementById("prearticle");
  data.forEach(article => {
    prearticle.innerHTML+= (`   
    <div class="card w-1/5 bg-base-100 shadow-xl mr-2 ml-2 mb-10">
      <figure class="h-72">
        <img  class="max-h-72 object-cover" src="${article.img}" alt="${article.name}">
      </figure>
      <div class="card-body pl-4 pr-4">
        <div class="flex flex-col items-center justify-center ">
          <h2 class="uppercase text-xs text-slate-500">${article.brand}</h2>
          <p class="text-xl font-semibold">${article.name}</p>
        <div class="flex flex-row justify-center items-center mt-2">
        <p class="pr-3" >Quantité:</p>
        <select id="quantitySelect" class="select select-bordered select-sm w-auto  max-w-xs text-center">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          
        </select>
        </div>
        </div>
        <div class="card-actions flex flex-col items-center pr-0 pl-0">
          <button class="btn btn-sm btn-success text-lg pointer-events-none text-white">${article.price}€</button>       
          <a
          class="add-to-cart-btn btn btn-primary bg-blue-950 border-white hover:text-blue-950 hover:bg-white hover:border-blue-950"
          data-id="${article.id}"
        >
          Ajouter au Panier
        </a>

        </div>
      </div>
    </div>
  `)

  });
}

// On affiche tous les articles au chargement de la page


// Fonction pour vider une div
function clearBox(elementID) {
  if (typeof elementID === "string" && elementID.trim() !== "") {
    document.getElementById(elementID).innerHTML = "";
  }
}
// Fonction pour lire la catégorie données en argument ("category")
function readByCategory (category){
  const link = document.getElementById(category);
  link.addEventListener('click', function() {
  clearBox("article");
  dynamicCategory(category);
  readArticles( data.filter(item => item.category === category));
  clearBox("cart")
  clearBox("order")
  window.scrollTo({ top: 0, behavior: "smooth" })
});
}
// Fonction pour lire toutes les categories
function readAllCategories (divID){
  const link = document.getElementById(divID);
link.addEventListener('click', function() {
  clearBox("article");
  const category = this.getAttribute("data-category");
  if (category===null){
    dynamicCategory()
  }else{
    dynamicCategory(category);
  }
  readArticles( data);
  clearBox("cart")
  clearBox("order")
  window.scrollTo({ top: 0, behavior: "smooth" })
});
}
// Pour le bouton Smartphones
readByCategory("Smartphones");
// Pour le bouton PC
readByCategory("PC");
// Pour le bouton accessoires
readByCategory("Accessoires");
// Pour le bouton tous les articles
readAllCategories("Tous");
// Pour le bouton home
readAllCategories("homeButton");

// Fonction pour récupérer un article à partir de son ID
function getItemById(id) {
  return data.find(item => item.id === id);
}

// On crée un tableau vide pour le panier
let cart = [];

// Fonction pour ajouter un article au panier
function addToCart(id, quantity) {
  const item = getItemById(id);
  if (!item) {
    console.log(`L'article avec l'ID ${id} n'existe pas.`);
    return;
  }
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  console.log(`L'article "${item.name}" a été ajouté au panier.`);
}




// On ajoute au panier les articles, avec differentes vérification. 
// Article Existe ? Est il deja dans le panier ? 
/*const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    console.log("je clique")
    const articleId = event.target.dataset.id;
    const quantitySelect = event.target.parentNode.parentNode.querySelector('.select');
    const quantity = quantitySelect ? parseInt(quantitySelect.value) : 0;
    if (quantity > 0) {
      addToCart(articleId, quantity) 
      updateIconCart()
      myModalAddToBasketConfirmation(articleId, quantity)
      console.log(cart);
      console.log(`Article ${articleId} ajouté avec une quantité de ${quantity}.`);
    } else {
      alert("Vous devez selectionner la quantité");
    }
  },false);
});*/

const parentElement = document.querySelector('#article'); // parent element contenant les boutons

parentElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart-btn')) {
    console.log("je clique")
    const articleId = event.target.dataset.id;
    const quantitySelect = event.target.parentNode.parentNode.querySelector('.select');
    const quantity = quantitySelect ? parseInt(quantitySelect.value) : 0;
    if (quantity > 0) {
      addToCart(articleId, quantity) 
      updateIconCart()
      myModalAddToBasketConfirmation(articleId, quantity)
      console.log(cart);
      console.log(`Article ${articleId} ajouté avec une quantité de ${quantity}.`);
    } else {
      alert("Vous devez selectionner la quantité");
    }
  }
}, false);





// Fonction pour afficher les elements présent dans le panier 
function readMiniCart(data)  {
  let miniCart = document.getElementById("miniCart");
  data.forEach(article => {
    miniCart.innerHTML+= (`     
                  <div class="card card-side bg-base-100 shadow-lg h-40 ">
                    <figure>
                      <img
                        class="object-cover h-full w-56 max-w-56"
                        src="${article.img}"
                        alt="photo article"
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="uppercase text-xs text-slate-500">${article.brand}</h2>
                      <p class="text-xl font-semibold">${article.name}</p>
                      <p class="uppercase text-xs text-slate-500"> Quantité: ${article.quantity}</p>
                      <button
                        class="btn btn-sm btn-success text-lg pointer-events-none text-white w-16"
                      >
                      ${article.price}
                      </button>
                    </div>
                  </div>
    `)
  })
};

// FOnction qui au click du bouton mini panier afficher celui ci ( Vide la div du panier, et recharge les elements à jour)
function clickOnMiniCart (){
const link = document.getElementById("miniCartButton")
link.addEventListener('click', function() {
  console.log("j'ai cliqué")
clearBox("miniCart");
readMiniCart(cart);
updatePriceQuantity()
console.log(cart)
});
}

// Fonction pour obtenir la totalité des elements
function getTotalInfo(dataToRead) {
  let totalQuantity = 0;
  let totalPrice  =0 ;
  
  for (let i = 0; i < dataToRead.length; i++) {
    totalQuantity += dataToRead[i].quantity;
    totalPrice += dataToRead[i].price*dataToRead[i].quantity;
  }
totalPriceFormated = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPrice)
  return { totalQuantity, totalPriceFormated };
}





function updatePriceQuantity(){
  const totalPrice =getTotalInfo(cart).totalPriceFormated;
  const totalQuantity =getTotalInfo(cart).totalQuantity;
  console.log(totalPrice)
  clearBox("miniCartQuantity");
  clearBox("miniCartPrice")
  document.getElementById("miniCartQuantity").textContent = totalQuantity;
  document.getElementById("miniCartPrice").textContent = totalPriceFormated;
}

function updateIconCart(){
  let iconArticleCart = document.getElementById('iconArticleCart');
  iconArticleCart.textContent=getTotalInfo(cart).totalQuantity;
}

function myModalAddToBasketConfirmation(articleId, quantity){
  const modal = document.getElementById("myModal");
  modal.classList.remove("hidden");
  const supermodal = document.getElementById("mySuperModal");
  supermodal.style.height = document.body.offsetHeight + "px";
  
 
  const article = getItemById(articleId)
  let price = document.getElementById('confirmationPrice');
  let quantite = document.getElementById('confirmationQuantity');
  let img = document.getElementById('confirmationImg');
  let name = document.getElementById('confirmationName');
  let brand = document.getElementById('confirmationBrand');

  let priceFormated = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(article.price);
  img.src = article.img;
  price.textContent= priceFormated
  quantite.textContent=quantity
  name.textContent= article.name
  brand.textContent= article.brand
  
}


const closeModal = document.getElementById("closeModalBtn")
closeModal.addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById("myModal");
  modal.classList.add("hidden");
},false);


function goToBasket() {
  const cartSection = document.getElementById("cart")
  cartSection.innerHTML += (`
  <div class="flex flex-col mb-10 border-b-2">
        <h2 class="text-4xl font-semibold font-montserrat">Votre Panier</h2>
        <p class="text-lg mb-4 mt-2 text-slate-500 font-montserrat">
          Voici la séléction de produits que vous avez choisi
        </p>
      </div>
      <div class="flex flex-row justify-between">
        <div id="cartArticles" class="flex-col w-4/6">
          
        
        </div>
        <div
          class="card card-side bg-base-100 shadow-lg h-48 mb-10 w-1/4 pl-2 flex-col items-center justify-around"
        >
          <div class="flex flex-col items-center justify-center">
            <h4  class="text-lg font-semibold">Sous total (<span id="subTotalId"></span>) Article(s))</h4>
            <p  class="font-bold text-lg">Total:  <span id="subTotalPrice"></span></p>
          </div>
          <button id="validateCartBtn" class="btn bg-blue-950 border-white hover:text-blue-950 hover:bg-white hover:border-blue-950">Passer Commande</button>
        </div>
      </div>
  `)
}



const btnGoToBasketModal = document.getElementById("btnGoToBasket")
btnGoToBasketModal.addEventListener('click', function() {
  const modal = document.getElementById("myModal");
  modal.classList.add("hidden");
  clearBox("article")
  clearBox("cart")
  goToBasket()
  updateSubTotal()
  readArticleInBasket(cart)
  const validateCartBtn = document.getElementById("validateCartBtn")
validateCartBtn.addEventListener('click', function() {
 getDataCustomer()
 readCustomerData()
});
},false);

const btnGoToBasketNav = document.getElementById("btnGoToBasketNav")
btnGoToBasketNav.addEventListener('click', function() {
  clearBox("article")
  clearBox("cart")
  goToBasket()
  updateSubTotal()
  readArticleInBasket(cart)
  const validateCartBtn = document.getElementById("validateCartBtn")
  validateCartBtn.addEventListener('click', function() {
 getDataCustomer()
 readCustomerData()
});
});

function readArticleInBasket(data) {
  const cartArticles = document.getElementById("cartArticles");
  const cartArticleList = [];

  data.forEach((article) => {
    const selectQuantityId = `selectQuantity_${article.id}_${article.quantity}`;

    const cartArticle = document.createElement("div");
    cartArticle.className = "card card-side bg-base-100 shadow-lg h-48 mb-10";

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.className = "object-cover h-full w-56";
    img.src = article.img;
    img.alt = "Movie";
    figure.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body flex flex-row justify-between items-center";

    const brand = document.createElement("h2");
    brand.className = "uppercase text-xl";
    brand.textContent = article.brand;

    const name = document.createElement("p");
    name.className = "text-xl";
    name.textContent = article.name;

    const quantityContainer = document.createElement("p");
    quantityContainer.className = "uppercase text-xs text-slate-500";
    quantityContainer.textContent = "Quantité: ";

    const quantitySelect = document.createElement("select");
    quantitySelect.id = selectQuantityId;
    quantitySelect.className = "select select-bordered select-sm w-16 max-w-xs text-center";

    const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    quantityOptions.forEach((option) => {
      const quantityOption = document.createElement("option");
      quantityOption.value = option;
      quantityOption.selected = article.quantity === option;
      quantityOption.textContent = option;
      quantitySelect.appendChild(quantityOption);
    });

    quantityContainer.appendChild(quantitySelect);

    const priceButton = document.createElement("button");
    priceButton.className = "btn btn-sm btn-success text-lg pointer-events-none text-white w-16";
    priceButton.textContent = `${article.price * article.quantity}€`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-sm btn-error text-lg text-white w-32";
    deleteButton.id = `deleteArticle_${article.id}`;
    deleteButton.textContent = "supprimer";

    body.appendChild(brand);
    body.appendChild(name);
    body.appendChild(quantityContainer);
    body.appendChild(priceButton);
    body.appendChild(deleteButton);

    cartArticle.appendChild(figure);
    cartArticle.appendChild(body);

    cartArticleList.push(cartArticle);

    deleteButton.addEventListener("click", () => {
      removeCartItem(cart, article.id);
      updateSubTotal();
      updateIconCart();
      cartArticleList.splice(cartArticleList.indexOf(cartArticle), 1);
      cartArticles.removeChild(cartArticle);
    });

    quantitySelect.addEventListener("change", (event) => {
      const quantitySelected = parseInt(event.target.value);
      if (article.quantity !== quantitySelected) {
        updateCartItemQuantity(cart, article.id, quantitySelected);
        priceButton.textContent = `${article.price * quantitySelected}€`;
      }
    });
  });

  cartArticles.innerHTML = "";
  cartArticleList.forEach((cartArticle) => {
    cartArticles.appendChild(cartArticle);
  });
}




updateSubTotal()
updateIconCart()
function updateCartItemQuantity(cart, itemId, newQuantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      cart[i].quantity = newQuantity;
      updateSubTotal()
      updateIconCart()
      break;
    }
  }
}

function updateSubTotal(){
  const subTotalId = document.getElementById("subTotalId")
  const subTotalPrice = document.getElementById("subTotalPrice")
  
  subTotalId.textContent=  getTotalInfo(cart).totalQuantity
  subTotalPrice.textContent=  getTotalInfo(cart).totalPriceFormated
}



function getDataCustomer(){
  const order = document.getElementById("order");
  order.innerHTML += (`
  <div
  id="dataCustomer"
  class="informations form-control shadow-xl rounded-3xl w-2/4 border border-slate-100" justify-start
>
  <div class="w-full">
    <h5 class="font-semibold text-xl text-center mt-4">
      Vos Informations Personelles
    </h5>
    <label class="input-group p-5">
      <span class="w-36 bg-yellow-400 text-white">Nom</span>
      <input
        name="nom"
        type="text"
        placeholder="Dupont"
        class="input input-bordered w-full"
      />
    </label>
    <label class="input-group p-5">
      <span class="w-36 bg-yellow-400 text-white">Prénom</span>
      <input
        name="prenom"
        type="text"
        placeholder="Tintin"
        class="input input-bordered w-full"
      />
    </label>
    <label class="input-group p-5">
      <span class="w-36 bg-yellow-400 text-white">Adresse Postale</span>
      <input
        name="adresse"
        type="text"
        placeholder="12 Rue de la Paix"
        class="input input-bordered w-full"
      />
    </label>
    <label class="input-group p-5">
      <span class="w-36 bg-yellow-400 text-white">Téléphone</span>
      <input
        name="telephone"
        type="number"
        placeholder="0606060606"
        class="input input-bordered w-full"
      />
    </label>
    <label class="input-group p-5">
      <span class="w-36 bg-yellow-400 text-white">Nom</span>
      <input
      name="email"
        type="text"
        placeholder="dupont@tintin.fr"
        class="input input-bordered w-full"
      />
    </label>
    <div class="flex justify-center">
      <button
      id="validateOrderBtn"
        class="btn bg-blue-950 border-white hover:text-blue-950 hover:bg-white hover:border-blue-950 mb-10 mt-4"
      >
        Valider ma commande
      </button>
    </div>
  </div>
</div>
  `)
}


function readCustomerData(){
  const validateOrderBtn = document.getElementById('validateOrderBtn');
  validateOrderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(document.querySelector('input[name="nom"]').value)
    const nom = document.querySelector('input[name="nom"]').value;
    const prenom = document.querySelector('input[name="prenom"]').value;
    const adresse = document.querySelector('input[name="adresse"]').value;
    const telephone = document.querySelector('input[name="telephone"]').value;
    const email = document.querySelector('input[name="email"]').value;
  
    const formData = { nom, prenom, adresse, telephone, email };
    console.log(formData);

    const modal = document.getElementById("myModalValidation");
    modal.classList.remove("hidden");
    const supermodalClose = document.getElementById("mySuperModalClose");
  supermodalClose.style.height = document.body.offsetHeight + "px";
  let priceValidation = document.getElementById('priceValidation');
  let nameValidation = document.getElementById('nameValidation');
  let firstnameValidation = document.getElementById('firstnameValidation');
  let quantityValidation = document.getElementById('quantityValidation');
  let emailValidation= document.getElementById('emailValidation')

  priceValidation.textContent = getTotalInfo(cart).totalPriceFormated
  quantityValidation.textContent = getTotalInfo(cart).totalQuantity
  nameValidation.textContent = formData.nom
  firstnameValidation.textContent = formData.prenom
  emailValidation.textContent = formData.email
    closeModalConformation()
  });
}

function closeModalConformation(){
  const btnCloseValidation = document.getElementById("btnCloseValidation")
  btnCloseValidation.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
   

  });
}

window.onload = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function removeCartItem(cart, articleId) {
  const index = cart.findIndex(article => article.id === articleId);
  if (index > -1) {
    cart.splice(index, 1);
  }
}







