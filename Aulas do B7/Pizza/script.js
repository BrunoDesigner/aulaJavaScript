const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    
    pizzaItem.querySelector('.pizza-item--name').innerHTML= item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    document.querySelector('.pizza-area').append(pizzaItem)
})
