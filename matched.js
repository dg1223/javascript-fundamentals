const numbers = [45, 65, 23, 98, 19]

// for (let i = 0; i < numbers.length; i++) {
//     const numbers = numbers[i]
//     console.log(number)
// }

// for (const number of numbers) {
//     console.log(number)
// }

const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'macbook air', price: 19000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'DELL inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung galaxy note 7', price: 19000},
    {id: 7, name: 'M1 chip not cheap Laptop', price: 19000},
    {id: 8, name: 'Phone One plus', price: 19000},
]

// for (const product of products) {
//     console.log(product)
// }

function matchedProducts (products, search) {
    const matched = []
    for (const product of products) {
        // console.log(product.name.includes(search))
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched
}

const result = matchedProducts(products, 'laptop')
console.log(result)