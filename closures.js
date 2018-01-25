function greetingsFamily(lastName) {
    return function greetingsFamilyMember(name) {
        console.log(`Hi ${name} ${lastName}`)
    }
}

const greetingsFamilyWithArrowFunctions = lastName => name => console.log(`Hi ${name} ${lastName}`)

const greetingsGomez = greetingsFamily("Gomez")
const greetingsPerez = greetingsFamily("Perez")

const greetingsConnor = greetingsFamilyWithArrowFunctions("Connor")


greetingsGomez("Roger")
greetingsGomez("Valery")
greetingsPerez("Nydia")

greetingsConnor("John")
greetingsConnor("Sarah")