// while loop
var roastgiven = 0
while (roastgiven < 7) {
    // console.log('Roast den, please')
    // console.log(roastgiven)
    roastgiven++
}

// for loop
for (var roastgiven = 0; roastgiven < 7; roastgiven++) {
    // console.log('Roast den, please')
}

// display all elements of an array
var numbers = [45, 87, 89, 56, 32, 51, 25]
for (var i=0; i<7; i++){
    // console.log(numbers[i])
}

// break and continue
// for () {
//     if (){
//         break;
//     }
// }

// continue -> skip and iterate
for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    if (number>50){
        continue;
    }
    console.log(number)
}