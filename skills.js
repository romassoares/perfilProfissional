function calc(one, two, op) {
    let x = parseFloat(one.value)
    let y = parseFloat(two.value)
    let p = op.value
    const result = document.querySelector('#result')
    if (result) {
        if (p == '+') {
            let soma = x + y
            result.innerText = soma
        }
        if (p == '-') {
            const sub = x - y
            result.innerText = sub
        }
        if (p == '/') {
            const div = x / y
            result.innerText = div
        }
        if (p == '*') {
            const mul = x * y
            result.innerText = mul
        }
    }
}
// ***************************************************************************

const squeresUl = document.querySelector('#squares')

for (let i = 0; i < 10; i++) {

    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))

    const position = random(1, 89)

    const delay = random(4, 0.1)

    const duration = random(24, 12)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`
    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-buzier(${Math.random()},${Math.random()},${Math.random()},${Math.random()},${Math.random()}  )`


    // console.log(li, i, 'dsfasd')

    squeresUl.appendChild(li);
}