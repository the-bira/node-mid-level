interface TableProps {
  start: number
  end: number
}

function displayTable({ start, end }: TableProps): void {
  for (let i = 1; i <= end; i++) {
    console.log(`${start} x ${i} = ${start * i}`)
  }
}

function main() {
  const tableProps: TableProps = { start: 5, end: 10 }
  displayTable(tableProps)
}

main()