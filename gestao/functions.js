const transationUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransationName = document.querySelector('#text')
const inputTransationAmount = document.querySelector('#amount')

const localStorageTransations = JSON.parse(localStorage.getItem('transations'))
let transations = localStorage.getItem('transations') !== null ? localStorageTransations : []

const removeTransation = ID => {
    transations = transations.filter(transation => transation.id != ID)
    updateLocalStorage()
    init()
}

const addTransationIntoDOM = transation => {
    const operator = transation.amount < 0 ? '-' : '+'
    const CSSClass = transation.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transation.amount)

    const li = document.createElement('li')
    li.classList.add(CSSClass)

    var tags = `${transation.name} <span>${operator}R$ ${amountWithoutOperator}</span>
    <button class="delete-btn" onClick="removeTransation(${transation.id})"> x </button>`

    li.innerHTML = tags
    transationUl.appendChild(li)
}

const updateBalenceValues = () => {
    const transationsAmounts = transations
        .map(transation => transation.amount)
    const total = transationsAmounts
        .reduce((accumulator, transation) => accumulator + transation, 0)
        .toFixed(2)
    const income = transationsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, transation) => accumulator + transation, 0)
        .toFixed(2)
    const expense = Math.abs(transationsAmounts
        .filter(value => value < 0)
        .reduce((accumulator, transation) => accumulator + transation, 0))
        .toFixed(2)
    balanceDisplay.textContent = `${total}`
    incomeDisplay.textContent = `${income}`
    expenseDisplay.textContent = `${expense}`

}

const init = () => {
    transationUl.innerHTML = ''
    transations.forEach(addTransationIntoDOM)
    updateBalenceValues()
}

init()

const updateLocalStorage = () => {
    localStorage.setItem('transations', JSON.stringify(transations))
}

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault()
    const transationName = inputTransationName.value.trim()
    const transationAmount = inputTransationAmount.value.trim()

    if (transationName === '' || transationAmount === '') {
        alert('campos vazios')
        return
    }

    const transation = {
        id: generateID(),
        name: transationName,
        amount: Number(transationAmount)
    }
    transations.push(transation)
    init()
    updateLocalStorage()

    inputTransationName = ''
    inputTransationAmount = ''
})
