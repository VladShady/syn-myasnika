$(document).ready(function () {
    const recomendation = document.getElementById("recomendation");
    document.querySelectorAll(".count").forEach(el => {
        el.disabled = disabled;
    })

    for (let i = 0; i < 4; i++) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(productsData, i);
        itemElement.id = productsData[i].id;

        recomendation.appendChild(itemElement);
    };

    openProductPage();
    makeOrderWork();

    let cartItemsContainer = document.getElementById("cart-items");
    let currentCartItems = JSON.parse(localStorage.getItem("cartItems"));

    for (let i = 0; i < currentCartItems.length; i++) {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart__item');
        cartItem.innerHTML = cartItemTemplate(currentCartItems, i);
        cartItem.id = currentCartItems[i].id;

        cartItemsContainer.prepend(cartItem);
    };

    let totalPrice = 0;
    currCartElements = document.querySelectorAll(".cart__item");

    for (let i = 0; i < currentCartItems.length; i++) {
        totalPrice += parseInt(currCartElements[i].querySelector(".sum-text").innerText);
        document.querySelector(".price-text").innerText = totalPrice;
    }

    function deleteCartItem(event) {
        let updatedCartItems = cartItems.filter(item => {
            if (item.id != event.target.parentNode.id) {
                return item;
            }
        })

        const currItemPrice = event.target.parentNode.querySelector(".sum-text").innerText;

        document.querySelector(".price-text").innerText -= currItemPrice;

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        cartItems = updatedCartItems;

        event.target.parentNode.remove()
    }

    document.querySelectorAll(".cart__item-delete").forEach(el => {
        el.addEventListener('click', deleteCartItem);
        el.addEventListener('click', () => {
            document.querySelectorAll(".shop-cart-counter").forEach(el => el.innerText = cartItems.length);
            if (!document.querySelector(".cart__item")) {
                document.querySelector(".sum-title").setAttribute("style", "display: none");
            }
        })
    });

    if (!document.querySelector(".cart__item")) {
        document.querySelector(".sum-title").setAttribute("style", "display: none");
    }

    let plusMinusWidgets = document.querySelectorAll(".v-counter");

    for (let i = 0; i < plusMinusWidgets.length; i++) {
        plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", returnInputValue);
        plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", returnInputValue);
    };

});