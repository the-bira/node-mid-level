interface GradeAverageProps {
  grades: number[]
}

function calculateAverage({ grades }: GradeAverageProps): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0)
  return sum / grades.length
}

function main() {
  const gradeProps: GradeAverageProps = { grades: [8.5, 7.9, 9.2, 6.8, 7.5] }
  const average = calculateAverage(gradeProps)

  console.log(`The average grade is: ${average.toFixed(1)}`)
}

main()