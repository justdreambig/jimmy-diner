import { menuArray } from './data.js'
const completeOrder = document.getElementById("complete-order");

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
let addedOrderItemsTotal =[]

document.addEventListener('click', function(e){
     
    if (e.target.dataset.addItemsId) {
        handleAddItem(e.target.dataset.addItemsId)
        toggleHiddenOrder()
        
    } else if (e.target.dataset.remove){

    }

    })



        function handleAddItem(menuId){
        const targetMenuObj = menuArray.filter(function(menu){
        return Number(menu.id) === Number(menuId)
        })[0]
        
        addedOrderItems.push(targetMenuObj)
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

        if (document.getElementById('order').classList == ('hidden')){
            document.getElementById('order').classList.toggle('hidden');
        }

        orderList.innerHTML = orderHtml;  
        
}

console.log("Let's Go")
