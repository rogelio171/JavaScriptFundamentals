const roger = {
    name: 'Roger',
    lastName: 'Waters'
}

function greetings(times, uppercase) {
    let str = `Hi ${this.name} ${this.lastName}`
    str = uppercase ? str.toUpperCase() : str
    for(let i = 0; i < times; i++) {
        console.log(str)
    }
}

greetings.call(roger, 3, true)

greetings.apply(roger, [3, true])

const params = [2, false]
greetings.call(roger, ...params)
