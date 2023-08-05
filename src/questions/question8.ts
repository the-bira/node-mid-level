interface InvestmentProps {
  initialCapital: number;
  interestRate: number;
  investmentTimeMonths: number;
}

function calculateFinalValue({ initialCapital, interestRate, investmentTimeMonths }: InvestmentProps): number {
  const monthlyInterestRate = interestRate / 100
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTimeMonths)
  return finalValue
}

function main() {
  const userInput: InvestmentProps = {
    initialCapital: 1000,
    interestRate: 5,
    investmentTimeMonths: 12
  }

  const finalValue = calculateFinalValue(userInput)

  console.log(`The final value of the investment is: $${finalValue.toFixed(2)}`)
}

main()