function calc(one, two, op) {
    let x = parseInt(one.value)
    let y = parseInt(two.value)
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