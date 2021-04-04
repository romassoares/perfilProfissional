const formProduct = document.querySelector('#productForm')
const formIngredient = document.querySelector('#ingredients')
const inputProduct = document.querySelector('#productInput')
const inputName = document.querySelector('#nameInput')
const inputAmount = document.querySelector('#amountInput')
const tbodyEl = document.querySelector('#tbody')
const tHead = document.querySelector('#trHead')

const id = () => { return Number(Math.abs(Math.random()).toFixed(2)) }
// localStorage.removeItem() para remover um par específico;
// localStorage.clear() apaga TODOS os pares gravados pro aquele domínio;

const localStorageIngredients = JSON.parse(localStorage.getItem('Ingredients'))
let Ingredients = localStorage.getItem('Ingredients') !== null ? localStorageIngredients : []

const localStorageProduct = JSON.parse(localStorage.getItem('@Product'))
let Product = localStorage.getItem('@Product') == null ? localStorageProduct : ''

const updateDom = itens => {
    var trEL = document.createElement('tr')
    let tags = `
        <td>${itens.id}</td>
        <td>${itens.name}</td>
        <td>${itens.amount}</td>
        <td><button id="${itens.id}"><i class="fas fa-trash"></i> </button></td>
        `
    trEL.innerHTML = tags
    tbodyEl.appendChild(trEL)
}
const updateDomProduct = () => {
    const thEL = document.createElement('tr')
    const result = JSON.parse(localStorage.getItem('@Product'))
    if (result != null) {
        let tag = `<th>${result.name}</th>`
        thEL.innerHTML = tag
        tHead.appendChild(thEL)
    }
}

function start() {
    tbodyEl.innerHTML = ''
    tHead.innerHTML = ''
    Ingredients.forEach(updateDom)
    updateDomProduct(Product)
}

start()
const updateLocalStorageIngredient = () => {
    localStorage.setItem('Ingredients', JSON.stringify(Ingredients))
}
const updateLocalStorageProduct = item => {
    localStorage.setItem('@Product', JSON.stringify(item))
}

formIngredient.addEventListener('submit', event => {
    event.preventDefault()
    const ingredientName = inputName.value
    const ingredientAmount = inputAmount.value
    if (ingredientName === '' || ingredientAmount === '') {
        alert('campos vazios')
        return
    }
    const ingredient = { id: id(), name: ingredientName, amount: Number(ingredientAmount) }
    Ingredients.push(ingredient)
    start()
    updateLocalStorageIngredient()
    ingredientName.innerHTML = ''
    ingredientAmount.innerHTML = ''
})

formProduct.addEventListener('submit', event => {
    event.preventDefault()
    const productValue = inputProduct.value
    if (productValue === '') {
        alert('campo vazio')
        return
    }
    const result = { id: id(), name: productValue }
    updateLocalStorageProduct(result)
    start()
    productValue = ''
})