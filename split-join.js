const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Boshonto kale tomay bolte pari na. Shada shada kala kala rong jomeche shada kala'

const part = lyrics.split(' ')

const sentences = lyrics.split('.')

// console.log(part)
// console.log(sentences)

const chars = lyrics.split('')
// console.log(chars)

const partial = lyrics.slice(5, 8)
// console.log(partial)

const partial2 = lyrics.substring(5, 8)
// console.log(partial2)

const lines = ['Tumi bondhu kala pakhi ami jeno ki',
                'Boshonto kale tomay bolte pari na', 
                'Shada shada kala kala rong jomeche shada kala']

const newSong = lines.join('. ')
console.log(newSong)