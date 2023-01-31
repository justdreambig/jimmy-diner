import { menuArray } from './data.js'
const completeOrder = document.getElementById("complete-order")


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

function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml()
} 
renderMenu()

// Order Screen //

let addedOrderItems = []


document.addEventListener('click', function(e){
    if (e.target.dataset.addItemsId) {
        handleAddItem(e.target.dataset.addItemsId)
        toggleHiddenOrder()
    }})

    function isHidden(el) {
        return window.getComputedStyle(el).display === "none";
      }

    function toggleHiddenOrder(){

        let element = document.querySelector("#order");
            if (isHidden(element)) {
               
                document.getElementById('order').classList.toggle('hidden');
            } 
        
    }
    

    function handleAddItem(menuId){
        const targetMenuObj = menuArray.filter(function(menu){
        return Number(menu.id) === Number(menuId)
        })[0]
    
        addedOrderItems.push(targetMenuObj)
        renderOrder()
        console.log(addedOrderItems)
    }
    
    function getOrderHtml() {
        let orderHtml = ``

            addedOrderItems.forEach(function(item) {

            orderHtml += `
                <div class="menu-item-description order-item flex">   
                    <div class="menu-item-name order-name"> ${item.name} </div>
                    <div class="menu-item-name remove"> remove </div>
                    <div class="menu-item-price order-price">$${item.price}</div>
                </div>
            `   
        })
    
        return orderHtml
        
}
    
    function renderOrder(){
        document.getElementById('items').innerHTML = getOrderHtml()
    } 
    
    renderOrder()
    
   
    
    
        console.log("Let's Go")