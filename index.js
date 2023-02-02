import { menuArray } from './data.js'
// const completeOrder = document.getElementById("complete-order");

// Building the menu from a list of items in menuArray from data.js
const menuList = document.getElementById('menu');
function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(menu){

            menuHtml += `

        <div class="menu-container flex"> 

                    <div class="menu-item-emoji">${menu.emoji} 
                    </div> 
                        
                    <div class="menu-item-description">
                        <div class="menu-item-name"> ${menu.name} </div>
                        <div class="menu-item-ingredients"> ${menu.ingredients} </div>
                        <div class="menu-item-price"> $${menu.price} </div>  
                    </div> 

                    <div class="add-item" id="add-item" data-add-items-id="${menu.id}"> +
                    </div>
                    
        </div>
        
            <div class="menu-item-container-divder"> </div>
        `   
    })
return menuHtml 
}
menuList.innerHTML = getMenuHtml();


// Order Screen //

let addedOrderItems = []

    document.addEventListener('click', function(e){
     
        if (e.target.dataset.addItemsId) {
            handleAddItem(e.target.dataset.addItemsId)
            
        } else if (e.target.dataset.remove){
            removeOrderItem (e.target.dataset.remove)
            }
        })
            function handleAddItem(menuId){
                const targetMenuObj = menuArray.filter(function(menu){
                return Number(menu.id) === Number(menuId)
                })[0]
            
                addedOrderItems.push(targetMenuObj)
                getOrderHtml()
            }

            function removeOrderItem (orderItemId) {
                for (let i = 0; i < addedOrderItems.length; i++) {
                    if (Number(addedOrderItems[i].id) === Number(orderItemId)) {
                        addedOrderItems.splice(i, 1);
                        break;
                    }
                }
                getOrderHtml()
            }

        function getOrderHtml() {
            const orderList = document.getElementById('added-order-items');
            let orderHtml = ``

            // for(let i = 0; i < arr.length; i++) 
            addedOrderItems.forEach(function(order) {
                
                orderHtml += `
                    <div class="menu-item-description order-item flex">   
                        <div class="menu-item-name order-name"> ${order.name} </div>
                        <div class="menu-item-name remove" data-remove="${order.id}"> remove </div>
                        <div class="menu-item-price order-price">$${order.price}</div>
                    </div>
                `; 
                
            })

            orderList.innerHTML = orderHtml;
            getOrderTotalPrice()
            hideOrder ()  
    }

    function getOrderTotalPrice() {
        const totalPrice = addedOrderItems.reduce((sum, item) => sum + item.price, 0);
        const totalElement = document.getElementById("total");
        totalElement.innerHTML = totalPrice;
        
    }

    // Toggle between hidden and shown if order has items or not 

        function hideOrder () {
            
            if(addedOrderItems.length > 0 ) {
                let order = (document.getElementById('order'))
                    if (order.classList.contains('hidden')) 
                        order.classList.remove('hidden')
                        
                    } else { 
                        order.classList.add('hidden')
                        
                    }
                }
                

console.log("🐠 🐳  Just Keep Swimming!  🐙 🐡 ")
 