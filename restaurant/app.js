let fullMenu = document.getElementById('fullMenu')
let starterBtn = document.getElementById('starters')
let entreeBtn = document.getElementById('entrees')
let dessBtn = document.getElementById('desserts')

 dishes.map(function(dishes) {
    let liItems = `<li class="liobj">
        <img src=${dishes.imageURL} class="foodimg">
            <h4>${dishes.title}  -  ${dishes.price}</h4>
            <span>${dishes.course}</span>
            <span>${dishes.description}</span>
            </li>`

    fullMenu.innerHTML += liItems
  })

starterBtn.addEventListener('click', function() {
    let starters = dishes.filter(function(starter) {
        return starter.course == "Starters"
    })
    let startershtml = starters.map(function(dishes){
        return `<li class="liobj">
        <img src=${dishes.imageURL} class="foodimg">
        <h4>${dishes.title}  -  ${dishes.price}</h4>
        <span>${dishes.course}</span>
        <span>${dishes.description}</span>
        </li>`
    }) 
    fullMenu.innerHTML = startershtml.join('')

})

entreeBtn.addEventListener('click', function() {
    let entrees = dishes.filter(function(entree) {
        return entree.course == "Entrees"
    })
    let entreeshtml = entrees.map(function(dishes){
        return `<li class="liobj">
        <img src=${dishes.imageURL} class="foodimg">
        <h4>${dishes.title}  -  ${dishes.price}</h4>
        <span>${dishes.course}</span>
        <span>${dishes.description}</span>
        </li>`
    }) 
    fullMenu.innerHTML = entreeshtml.join('')

})

dessBtn.addEventListener('click', function() {
    let desserts = dishes.filter(function(dessert) {
        return dessert.course == "Desserts"
    })
    let desserthtml = desserts.map(function(dishes){
        return `<li class="liobj">
        <img src=${dishes.imageURL} class="foodimg">
        <h4>${dishes.title}  -  ${dishes.price}</h4>
        <span>${dishes.course}</span>
        <span>${dishes.description}</span>
        </li>`
    }) 
    fullMenu.innerHTML = desserthtml.join('')

})