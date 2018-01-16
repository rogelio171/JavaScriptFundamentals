const nombre = "Roger"

const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]

function run() {
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min) + min)
}

let totalKms = 0
for (let i = 0; i < days.length; i++) {
    const kms = run()
    totalKms += kms
    console.log(`The day ${days[i]} ${nombre} ran ${kms} kms.`)
}

const average = totalKms / days.length
console.log(`In the week ${nombre} ran ${totalKms} kms.`)
console.log(`In average ${nombre} ran ${average} kms. daily.`)