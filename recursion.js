// let sum = 0
// for (let i = 5; i >= 1; i--) {
//     sum = sum + i
// }

function sum(i) {
    if (i == 1) {
        return 1;
    }
    console.log(i)
    return i + sum(i-1)
}
const result = sum(5)
console.log(result)