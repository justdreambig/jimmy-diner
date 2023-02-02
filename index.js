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
        removeItem ()
    }    
         
    })

    function removeItem (){
        console.log('remove')
    
    }

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
        getOrderHtml(addedOrderItems)
    }
    
    function getOrderHtml(arr) {
        const orderList = document.getElementById('order');
        console.log(arr)
        let orderHtml = ``

        for(let i = 0; i < arr.length; i++) {
            
            orderHtml += `
                <div class="menu-item-description order-item flex">   
                    <div class="menu-item-name order-name"> ${arr[i].name} </div>
                    <div class="menu-item-name remove data-remove="${arr[i].id}"> remove </div>
                    <div class="menu-item-price order-price">$${arr[i].price}</div>
                </div>
            `; 
            
        }  
        orderList.innerHTML = orderHtml;  
         
         
}




    
        console.log("Let's Go")


       