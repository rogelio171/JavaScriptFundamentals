class Person {
    constructor(name, friends = []) {
        this.name = name
        this.friends = friends
    }

    printFriends() {
        this.friends.forEach(friend => console.log(`Hi, my name is ${this.name} and I am friend of ${friend}`))
    }
}

const roger = new Person("Roger", ["Thor", "Tony", "Natasha"])
roger.printFriends()