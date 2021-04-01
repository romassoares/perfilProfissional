function calc(one, two, op) {
    const x = one.value
    const y = two.value
    const p = op.value
    const result = document.querySelector('#result')
    if (result) {
        if (p == '+') {
            const soma = x + y
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