let cartIcon = document.querySelector("#cart-icon");
let cartsmallicon =document.querySelector('.cart-small-icon');
let bagmenu = document.querySelector('.bag-menu');
let cart= document.querySelector('.cart');
let closeCart=document.querySelector('#close-cart');

value=0;

cartsmallicon.onclick=()=>{
    cart.classList.add('acive')
};
closeCart.onclick=()=>{
    cart.classList.remove('acive')
};

function opencart(){
    document.getElementById("cart").style.right="0";
    if(value==0){
        document.getElementById("cart-img").src="";
        document.getElementById("cart-title").innerHTML="Your Cart is Empty :(";
        document.getElementById("cart-price").innerhtml="Rs. 0/-"
        document.getElementById("finalamount").innerhtml="Rs.0/-"
        document.getElementById("qty").value=0;
        document.getElementById("total").innerHTML="Rs. 0/-"
       
        
    }
    
    
};
function removecart(){
    document.getElementById("cart").style.right="-100%";
};
function opencart1(){
    document.getElementById("cart-price").innerHTML="Rs.";
    document.getElementById("itemrate").innerHTML="rrr";
    document.getElementById("cart-title").innerHTML="Chaos Typography";
    document.getElementById("qty").value=1;
    cartimg= document.getElementById("chaos").src;
    document.getElementById("cart-img").src=cartimg;
    document.getElementById("cart").style.right="0";
    document.getElementById("final-cart-price").innerHTML="Rs. ";
    

}
function opencart2(){
    document.getElementById("cart-title").innerHTML="Assymetric Typography";
    document.getElementById("cart-price").style.innerHTML="Rs.799/-";
    document.getElementById("qty").value="1";
    cartimg= document.getElementById("ast").src;
    document.getElementById("cart").style.right="0";
    document.getElementById("cart-img").src=cartimg
}
function opencart3(){
    document.getElementById("cart-title").innerHTML="Band Jam Graphic";
    document.getElementById("cart-price").style.innerHTML="Rs.799/-";
    document.getElementById("qty").value="1";
    cartimg= document.getElementById("bg").src;
    document.getElementById("cart").style.right="0";
    document.getElementById("cart-img").src=cartimg
}
function opencart4(){
    document.getElementById("cart-title").innerHTML="One sided Fun Typography";
    document.getElementById("cart-price").style.innerHTML="Rs.799/-";
    document.getElementById("qty").value="1";
    cartimg= document.getElementById("osf").src;
    document.getElementById("cart").style.right="0";
    document.getElementById("cart-img").src=cartimg
}
function opencart5(){
    document.getElementById("cart-title").innerHTML="Collapse Typography";
    document.getElementById("cart-price").style.innerHTML="Rs.799/-";
    document.getElementById("qty").value="1";
    cartimg= document.getElementById("col").src;
    document.getElementById("cart").style.right="0";
    document.getElementById("cart-img").src=cartimg
}
function opencart6(){
    document.getElementById("cart-title").innerHTML="Spiral Typography";
    document.getElementById("cart-price").style.innerHTML="Rs.799/-";
    document.getElementById("qty").value="1";
    cartimg= document.getElementById("spi").src;
    document.getElementById("cart").style.right="0";
    document.getElementById("cart-img").src=cartimg;
    document.getElementById("cart-price").innerHTML="799"
}
<div class="cart-content">
                <div class="cart-box">
                    <img  alt="" id="cart-img" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title" id="cart-title"></div>
                        <div class="cart-price" id="cart-price">Rs.</div>
                        <input type="number" id="qty" value="1" clas="cart-quantity">
                    </div>
                    <i id="trash-can" class="fa-solid fa-trash cart-remove"></i>
                </div>