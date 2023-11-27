const btn_click = document.getElementById("btn-click")
btn_click.addEventListener("click", (e)=>{
    e.preventDefault()
    const name = document.getElementById("addon1").value
    const price = document.getElementById("addon2").value
    const Image = document.getElementById("addon3").value
    const Imagebrand = document.getElementById("addon4").value
    var product_data = JSON.parse(localStorage.getItem("products"))
    var products = [
        {
            name:name,
            price:price,
            Image :Image,
            Imagebrand:Imagebrand
        }
    ]
    var main =document.getElementById("cards")
    for(let item of products){
        var item_div = document.createElement("div")
        item_div.innerHTML =`
        <div class="card-wrapper">
        <div class="card-cover" id="cover3">
           <img src=${item.Imagebrand} id="manufacturer" > 
           <h3> $${item.price} </h3>
           <h2>${item.name}</h2>
           <p> The runner’s engineered mesh upper is coated in black, while volt is seen on the underneath.</p>
           <img src=${item.Image} id="product2">
           <div class="card-btn" id="card-btn3">
              <button> Add to cart</button>
              <a href="" id="a2"> View Product</a>
           </div>
        </div>
     </div>
        `
        main.appendChild(item_div)
    }
        if(product_data == null){
              product_data = [products]
              localStorage.getItem("products" , JSON.stringify (product_data))
        }else{
            product_data.push(products)
            localStorage.getItem("products" ,JSON.stringify(product_data))
        }
        localStorage.setItem("user_info", JSON.stringify (products))
})
btn_click.addEventListener("click", (e)=> {
     e.preventDefault
    var user_info = JSON.parse(localStorage.getItem("user_info"))
    console.log("user_info")
})
