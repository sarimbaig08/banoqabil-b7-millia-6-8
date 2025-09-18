
let cardsContainer = document.getElementById("cardsContainer")

const getProducts = async()=>{
    try {
        let products = await fetch("https://fakestoreapi.com/products")
        // products = products.json()
         products = await products.json()
        console.log(products)
        
         products.map((product, index)=>{
        
            let productCard = `<div
        class="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          class="w-full h-56 object-cover"
          src="${product.image}"
          alt="Product Image"
        />
        <div class="p-5">
          <h2 class="text-xl font-semibold text-gray-800">${product.title}</h2>
          <p class="text-gray-600 text-sm mt-2">
           ${product.description}
          </p>

          <div class="flex items-center justify-between mt-4">
            <span class="text-lg font-bold text-green-600">$${product.price}</span>
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>`

        cardsContainer.innerHTML += productCard
         })

    } catch (error) {
        console.log(error)
    }
}

getProducts()