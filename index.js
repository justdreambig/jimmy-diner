import { menuArray } from './data.js'

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

                    <div class="add-item" data-add-items-id="${menu.id}"> +
                    </div>
                    
        </div>
        
            <div class="menu-item-container-divder"> </div>
        `   
    })
return menuHtml
}

function renderMenu(){
    document.getElementById('menu-list').innerHTML = getMenuHtml()
} 
renderMenu()

// Order Screen //

// document.addEventListener('click', function(e){
//     if (e.target.dataset.addItemsId) {
//         handleAddItem(e.target.dataset.addItemsId)
//     }})

//     function handleAddItem(menuId){
//         const targetMenuObj = menuArray.filter(function(menu){
//         return Number(menu.id) === Number(menuId)
//         })[0] 
//             getOrderHtml(targetMenuObj)
//             renderOrder()
//             console.log(targetMenuObj.name)
// }



    function getOrderHtml() {
            let orderHtml = ``
           
            orderHtml += `

                <div class="order-container"> 
                            <div class="your-order-title"> Your Order 
                            </div>

                            <div class="menu-item-description order-description">
                                <div class="item-one flex">   
                                    <div class="menu-item-name order-name"> Pizza </div>
                                    <div class="menu-item-name remove"> remove </div>
                                    <div class="menu-item-price order-price"> $14 </div>
                                </div>  

                                <div class="item-two flex"> 
                                    <div class="menu-item-name order-name"> Beer </div>
                                    <div class="menu-item-name remove"> remove </div>
                                    <div class="menu-item-price order-price"> $14 </div>
                                </div>
                            </div>

                            <div class="order-item-divder"> 
                            </div>
                            
                            <div class="flex order-total">
                                <div class="menu-item-price total-price"> Total price: </div>
                                <div class="menu-item-price total-number"> $14 </div> 
                            </div>
                            

                            <button id="complete-order" type="button"> Compelete Order 
                            </button> 
                </div>



                `   
            
        return orderHtml
        }


    function renderOrder(){
            document.getElementById('order-list').innerHTML = getOrderHtml()
        } 
        renderOrder()
       
    
    
    
        console.log("You're Good")