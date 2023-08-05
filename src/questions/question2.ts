interface Props {
  num?: number
  count?: number
}

function isPrime({ num }: Props): boolean {
  if (num === undefined || num <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

function printPrimes({ count }: Props): number[] {
  const primes: number[] = []
  let num = 2

  while (primes.length < count) {
    if (isPrime({ num })) {
      primes.push(num)
    }
    num++
  }

  return primes
}

function main() {
  const count = 10
  const primes = printPrimes({ count })
  console.log(`${count} prime numbers:`, primes)
}

main()