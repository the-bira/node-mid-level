import path from 'path'
import fs from 'fs'
import Li from './Li'

const Header = () => {

  const questionsDir = path.join(process.cwd(), 'src', 'questions')
  const questions = fs.readdirSync(questionsDir)

  return (
    <header className="header">
      <h1>Aimberê</h1>
      <nav>
        <ul className="menu">
          {questions.map(item => (
            <Li key={item} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header