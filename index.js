import { menuArray } from "./data.js";

// Building the menu from a list of items in menuArray
const menuList = document.getElementById("menu");
function getMenuHtml() {
  let menuHtml = ``;

  menuArray.forEach(function (menu) {
    menuHtml += `

        <div class="menu-container flex"> 

                    <div class="menu-item-emoji">${menu.emoji} 
                    </div> 
                        
                    <div class="menu-item-description">
                        <div class="menu-item-name ${menu.class}"> ${menu.name} </div>
                        <div class="menu-item-ingredients"> ${menu.ingredients} </div>
                        <div class="menu-item-price"> $${menu.price} </div>  
                    </div> 

                    <div class="add-item" id="add-item" data-add-items-id="${menu.id}"> +
                    </div>
                    
        </div>
        
            <div class="menu-item-container-divder"> </div>
        `;
  });
  return menuHtml;
}
menuList.innerHTML = getMenuHtml();

// Order Sequence //

const order = document.getElementById("order");
let addedOrderItems = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.addItemsId) {
    handleAddItem(e.target.dataset.addItemsId);
  } else if (e.target.dataset.remove) {
    removeOrderItem(e.target.dataset.remove);
  } else if (e.target.dataset.completeBtn) {
    modal.classList.toggle("hidden");
  }
});

function getOrderHtml() {
  const orderList = document.getElementById("added-order-items");
  let orderHtml = ``;

  addedOrderItems.forEach(function (order) {
    orderHtml += `
                        <div class="menu-item-description order-item flex">   
                            <div class="menu-item-name order-name"> ${order.name} </div>
                            <div class="menu-item-name remove" data-remove="${order.id}"> remove </div>
                            <div class="menu-item-price order-price">$${order.price}</div>
                        </div>
                    `;
  });

  orderList.innerHTML = orderHtml;
  getOrderTotalPrice();
  hideOrder();
}

// when the + is clicks it adds one item addedOrderItem array and toggles hidden to show order list
function handleAddItem(menuId) {
  const targetMenuObj = menuArray.filter(function (menu) {
    return Number(menu.id) === Number(menuId);
  })[0];

  addedOrderItems.push(targetMenuObj);
  getOrderHtml();
}

// removes one of the selected items from the order form - when the array is empty it hides the order form

function removeOrderItem(orderItemId) {
  for (let i = 0; i < addedOrderItems.length; i++) {
    if (Number(addedOrderItems[i].id) === Number(orderItemId)) {
      addedOrderItems.splice(i, 1);
      break;
    }
  }
  getOrderHtml();
}

// Toggle between hidden and shown if order has items

function hideOrder() {
  if (addedOrderItems.length > 0) {
    if (order.classList.contains("hidden")) order.classList.remove("hidden");
  } else {
    order.classList.add("hidden");
  }
}

// totals all the added items

function getOrderTotalPrice() {
  const totalPrice = addedOrderItems.reduce((sum, item) => sum + item.price, 0);
  const totalElement = document.getElementById("total");
  totalElement.innerHTML = totalPrice;
}

// Listen for submit - brings up Thank you message and triggers  removeOrderPayThankYou() //

const modal = document.getElementById("modal");
const paymentForm = document.getElementById("payment-form");
const thankYou = document.getElementById("thank-you");

paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const paymentFormData = new FormData(paymentForm);
  const name = paymentFormData.get("fullName");
  thankYou.innerHTML = `Thanks, ${name} Your order is on its way! `;

  removeOrderPayThankYou();
});

function removeOrderPayThankYou() {
  order.classList.toggle("hidden");
  thankYou.classList.remove("hidden");
  modal.classList.toggle("hidden");
  addedOrderItems.length = 0;
  paymentForm.reset();
  const myTimeout = setTimeout(removeThankYou, 5000);
}

function removeThankYou() {
  thankYou.classList.add("hidden");
}

console.log(
  "🐠 🐳  Just Keep Swimming and don't forget to JustDreamBig! 🚀 🚀"
);
