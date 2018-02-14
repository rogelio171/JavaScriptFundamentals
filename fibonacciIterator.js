function fibonacci() {
    let a = 0,
        b = 1

    return {
        next: () => {
            let f = a
            a = b
            b = f + a
            return { value: f, done: false }
        }
    }
}

const fibo = {}
fibo[Symbol.iterator] = fibonacci

let i = 0
for (let value of fibo) {
    console.log(value)
    i++
    if (i > 10) break
}