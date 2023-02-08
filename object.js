const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{name: 'no. 1', year: 2025},
             {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like the best')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        make: 2022,
        manufacturer: {
            name: 'Tesla',
            CEO: 'Elon Musk',
            country: 'USA'
        }
    }
}

// console.log(nayok.car)
console.log(nayok.act)
nayok.act()