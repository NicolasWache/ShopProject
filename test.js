function readArticleInBasket(data){
  const cartArticles = document.getElementById("cartArticles")
  console.log(data)
    data.forEach(article => {
      cartArticles.innerHTML += (`
    <div class="card card-side bg-base-100 shadow-lg h-48 mb-10">
              <figure>
                <img
                  class="object-cover h-full w-56"
                  src="${article.img}"
                  alt="Movie"
                />
              </figure>
              <div class="card-body flex flex-row justify-between items-center">
                <h2 class="uppercase text-xl">${article.brand}</h2>
                <p class="text-xl">${article.name}</p>
                <p class="uppercase text-xs text-slate-500">
                  Quantité:
                  <select id="selectQuantityOnCart"
                    class="select select-bordered select-sm w-16 max-w-xs text-center"
                  >
                  
                  <option id="selectQuantity_${article.id}_1">1</option>
                  <option id="selectQuantity_${article.id}_2">2</option>
                  <option id="selectQuantity_${article.id}_3">3</option>
                  <option id="selectQuantity_${article.id}_4">4</option>
                  <option id="selectQuantity_${article.id}_5">5</option>
                  <option id="selectQuantity_${article.id}_6">6</option>
                  <option id="selectQuantity_${article.id}_7">7</option>
                  <option id="selectQuantity_${article.id}_8">8</option>
                  <option id="selectQuantity_${article.id}_9">9</option> 
                    <option>Supprimer</option>
                  </select>
                </p>
                <button
                  class="btn btn-sm btn-success text-lg pointer-events-none text-white w-16"
                >
                ${article.price*article.quantity +"€"}
                </button>
              </div>
            </div>
    `)
    const selectedQuantity = document.getElementById("selectQuantity_"+article.id+"_"+article.quantity);
    if (selectedQuantity) {
      selectedQuantity.selected=true;
    }
    const selectQuantity = document.getElementById('selectQuantityOnCart');
    selectQuantity.addEventListener('change', (event) => {
    const QuantitySelected = parseInt(event.target.value);
    console.log(QuantitySelected)
    if(article.quantity != QuantitySelected){
      updateCartItemQuantity(cart,article.id,QuantitySelected)
    }
    });
  })
  }