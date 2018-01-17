let lifeGoku = 100
let lifeSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const bothAreAlive = () => lifeGoku > 0 && lifeSuperman > 0

const calculateAttack = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const gokuIsAlive = () => lifeGoku > 0;

let round = 1

while(bothAreAlive()) {
    console.log(`Round ${round}`)

    const hitGoku = calculateAttack()
    const hitSuperman = calculateAttack()

    if(hitGoku > hitSuperman) {
        console.log(`Goku attacks Superman with a hit of ${hitGoku}`)
        lifeSuperman -= hitGoku
        console.log(`Superman has ${lifeSuperman} of life.`)
    } else {
        console.log(`Superman attacks Goku with a hit of ${hitSuperman}`)
        lifeGoku -= hitSuperman
        console.log(`Goku has ${lifeGoku} of life.`)
    }
    round++
}

if(gokuIsAlive()) {
    console.log(`Goku wins. His life is ${lifeGoku}.`)
} else {
    console.log(`Superman wins. His life is ${lifeSuperman}`)
}