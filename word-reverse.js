function reverseWords(str){
    const words = str.split(' ')
    result = []
    for(let i=words.length-1; i>=0; i--){
        const element = words[i]
        result.push(element)
    }
    const reversed = result.join(' ')
    return reversed
    // console.log(words)
}

const myString = 'I am a good boy'
console.log(reverseWords(myString))