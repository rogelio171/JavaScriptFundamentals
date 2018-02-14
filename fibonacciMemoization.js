function fibonnaci(number, memo = {}) {

    if (memo[number]) return memo[number]
    if (number == 1) return 0
    if (number == 2) return 1

    return memo[number] = fibonnaci(number - 1, memo) + fibonnaci(number - 2, memo)
}