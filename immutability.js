birthday = function(person) {
    const clone = Object.assign({}, person)
    clone.age++
        return clone
}

let person = { name: 'Kathleen', age: 17 }

birthday(person)

oldPerson = birthday(person)

person === oldPerson