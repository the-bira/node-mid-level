interface CalculatorProps {
  num1: number
  num2: number
  operator: string
}

function calculator({ num1, num2, operator }: CalculatorProps): number | string {
  if (operator === '+') {
    return num1 + num2
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === '*') {
    return num1 * num2
  } else if (operator === '/') {
    if (num2 !== 0) {
      return num1 / num2
    } else {
      return "Error: Cannot divide by zero"
    }
  } else {
    return "Error: Invalid operator"
  }
}

function extract({ input }: { input: string }): CalculatorProps {
  const regex = /(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)/
  const matches = input.match(regex)

  if (!matches || matches.length !== 6) {
    throw new Error("Invalid input. Please provide two numbers and an operator (+, -, *, /).")
  }

  const num1 = parseFloat(matches[1])
  const operator = matches[3]
  const num2 = parseFloat(matches[4])

  return { num1, num2, operator }
}

function main() {
  const input = "5.5 * 2.5"
  try {
    const props = extract({ input })
    const result = calculator(props)
    console.log("Result:", result)
  } catch (error) {
    console.error(error)
  }
}

main()
