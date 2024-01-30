const url = new URLSearchParams(window.location.search);
console.log(url);
const id = url.get("id");
console.log(id);

   axios.get("https://dummyjson.com/products")
   .then(function (res)  {
     
     const products = res.data.products;
     

     
 
     const result = products.map(function (product) {
       return `
         <h2>${product.title}</h2>
         <img src="${product.thumbnail}" />
         <a href="detailes.html?id=${product.id}">details</a>
       `;
     }).join('');
 
     document.querySelector(".products").innerHTML = result;
   })