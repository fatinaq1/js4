const url = new URLSearchParams(window.location.search);
const id = url.get("id");
axios.get(`https://dummyjson.com/products/${id}`)
.then(function (res)  {
    
  
  const products = res.data;
 
document.querySelector(".product h2").textContent = products.title;
document.querySelector(".product img").src = products.thumbnail;
document.querySelector(".product p").textContent += products.description;
document.querySelector(".product span").textContent += products.price;
  

  
})