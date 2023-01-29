import { menuArray } from './data.js'

// addItems: "0"

document.addEventListener('click', function(e){
    if (e.target.dataset.addItems) {
        console.log(e.target.dataset.addItems)
    }
    
})

function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(menu){

            menuHtml += `

        <div class="menu-container flex"> 

                    <div class="menu-item-emoji">${menu.emoji} 
                    </div> 
                        
                    <div class="menu-item-description">
                        <div class=menu-item-name> ${menu.name} </div>
                        <div class=menu-item-ingredients> ${menu.ingredients} </div>
                        <div class=menu-item-price> $${menu.price} </div>  
                    </div> 

                    <button class="add-item" data-add-items="${menu.id}" type="button"> +
                    </button>
                    
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

// function getOrderHtml (){
//     let orderHtml = ``

//         orderHtml += `

//         <div class="menu-item-description">
//         <div class=menu-item-name> Pizza
//         </div>


//     `
// return orderHtml
// }

// function renderOrder() {
//     document.getElementById('order-list').innerHTML = getOrderHtml()
// } 

// renderOrder()

console.log("Hello World!")

