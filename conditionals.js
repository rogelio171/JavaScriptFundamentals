const starWars7 = 'Star Wars: The Force Awakens'
const pgStarWars7 = 13

const nameAdult = 'Adult'
const ageAdult = 26

const nameChild = 'Child'
const ageChild = 12

function canWatchStarWars7(name, age, isWithAdult = false) {
    if (age > pgStarWars7) {
        alert(`The ${name} can watch ${starWars7}.`)
    } else if (isWithAdult) {
        alert(`The ${name} can watch ${starWars7} even when his/her age is ${age} years old because is accompanied by an adult`);
    } else {
        alert(`The ${name} can't watch ${starWars7}. Has ${age} years old and must to have ${pgStarWars7} years old.`)
    }
}

canWatchStarWars7(nameAdult, ageAdult)
canWatchStarWars7(nameChild, ageChild, true)