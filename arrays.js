const add = (...numbers) => numbers.reduce((acum, number) => acum += number, 0)

const doubles = (...numbers) => numbers.map(number => number * 2)

const pairs = (...numbers) => numbers.filter((number) => number % 2 == 0)

add(4, 12, 8954, 7)
doubles(4, 8, 9, 12)
pairs(7, 2, 4, 9)