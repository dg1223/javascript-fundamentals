const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Boshonto kale tomay bolte pari na. Shada shada kala kala rong jomeche shada kala'

const searchString = 'Pakhi'
// const doesExist = lyrics.includes(searchString)
// const lyricsLowerCase = lyrics.toLowerCase()
// const searchStringLower = searchString.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchStringLower)

const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase())

// console.log(doesExist)

// console.log(lyrics.indexOf('kalaa'))

console.log(lyrics.startsWith('tumi'))
console.log(lyrics.endsWith('shada'))