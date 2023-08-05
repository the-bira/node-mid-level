interface FactorialProps {
  num: number
}

function calculateFactorial({ num }: FactorialProps): number {
  if (num === 0 || num === 1) {
    return 1
  }

  return num * calculateFactorial({ num: num - 1 })
}

function main() {
  const num = 5 // Change to the desired number to calculate the factorial
  if (num < 0 || !Number.isInteger(num)) {
    console.log("Please enter a non-negative integer.")
  } else {
    const factorial = calculateFactorial({ num })
    console.log(`The factorial of ${num} is: ${factorial}`)
  }
}

main()