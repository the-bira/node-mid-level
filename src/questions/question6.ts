interface VowelCounterProps {
  sentence: string
}

function countVowels({ sentence }: VowelCounterProps): number {
  const vowelRegex = /[aeiou]/gi
  const matches = sentence.match(vowelRegex)
  return matches ? matches.length : 0
}

function main() {
  const userInput = "Hello, how are you?" // Substitua pela frase desejada
  const numVowels = countVowels({ sentence: userInput })

  console.log(`The sentence "${userInput}" has ${numVowels} vowels.`)
}

main()