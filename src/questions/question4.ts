function isPalindrome(word: string): boolean {
  const sanitizedWord = word.toLowerCase().replace(/\W/g, '')
  const reversedWord = sanitizedWord.split('').reverse().join('')
  return sanitizedWord === reversedWord
}

function main() {
  const exampleWord = "level"
  const result = isPalindrome(exampleWord.trim())

  if (result) {
    console.log(`${exampleWord} is a palindrome.`)
  } else {
    console.log(`${exampleWord} is not a palindrome.`)
  }
}

main()
