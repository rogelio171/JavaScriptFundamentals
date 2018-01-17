const birthday = new Date(1986, 1, 28)

const today = new Date()

const timeFromBirthday = today - birthday

const timeFromBirthdayInSeconds = timeFromBirthday / 1000

const timeFromBirthdayInMinutes = timeFromBirthdayInSeconds / 60

const timeFromBirthdayInHours = timeFromBirthdayInMinutes / 60

const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())

const daysInSpanish = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado"
]

console.log(daysInSpanish[nextBirthday.getDay()])