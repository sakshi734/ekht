
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
function opencart1(){
    document.getElementById("cart-price").innerHTML="Rs.";
    document.getElementById("cart-title").innerHTML="Chaos Typography";
    document.getElementById("qty").value=1;
    cartimg= document.getElementById("chaos").src;
    document.getElementById("cart-img").src=cartimg;
    document.getElementById("cart").style.right="0";
    document.getElementById("final-cart-price").innerHTML="Rs. ";
    

}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("cart-remove")
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        console.log("remove")
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
        console.log("change")
    }

    var addToCartButtons = document.getElementsByClassName("cart-small-icon")
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName("btn-buy")[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName("cart")[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    opencart()
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
    
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('shop-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="shop-item-image" src="{imageSrc}" width="100" height="100">
            <span class="shop-item-price">Rs. {title}</span>
        </div>
        <span class="cart-price cart-column">Rs. {price}</span>
        <div class="cart-quantity-input cart-column">
            <input class="cart-quantity" type="number" value="1">
            <button class="cart-remove"> <i id="trash-can" class="fa-solid fa-trash "></i></button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs. ', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = 'Rs. ' + total
}

