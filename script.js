var items=document.querySelectorAll("ul li a");
var product=document.querySelector(".products  .p-name");
var proprice=document.querySelector(".products  .p-price");
var btn=document.querySelector(".purchase .show-price");
var price=document.querySelector(".purchase  .price");
var inc=document.querySelector(".cart-count .inc");
var quant=document.querySelector(".cart-count .quantity");
var dec=document.querySelector(".cart-count .dec");
var contImg=document.querySelectorAll(".purchase ul li img");
var show=document.querySelector(".product-content .product-img #cb");
var totalPrice=0;

items.forEach(function(item){
    item.onclick=function(){
        product.innerHTML +=item.textContent;
        proprice.innerHTML +=item.getAttribute("price");
        totalPrice += +(item.getAttribute("price"));
      
        if(item.innerHTML !=""){
            btn.style.visibility="visible";
        }
    }
})
btn.onclick=function(){
        price.innerHTML=totalPrice;
    }

// function max(){
//     show.style.visibility="visible";
//     show.style.zIndex="1000";
//     }

contImg.forEach(function(cont){
    cont.onclick=function(){
        this.getAttribute("href");
        show.style.visibility="visible";
        show.style.zIndex="1000";
    }
})


if (inc) {
    inc.addEventListener('click', function () {
      quant.textContent = parseInt(quant.textContent, 10) + 1;
    });
  }
  
  if (dec) {
    dec.addEventListener('click', function () {
      const qty = parseInt(quant.textContent, 10);
  
      if (qty > 0) {
        quant.textContent = qty - 1;
      }
    });
  }