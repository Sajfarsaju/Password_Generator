import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/use-password-generator'
import PasswordStrengthIndicator from './components/StrengthChecker'
import Button from './components/Button'
import Checkbox from './components/Checkbox'

function App() {

  const [length, setLength] = useState(4)
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ])
  const [copied, setCopied] = useState(false)

  const handleCheckboxChange = (indx) => {
    const updatedCheckboxData = [...checkBoxData];//*Copying
    updatedCheckboxData[indx].state = !updatedCheckboxData[indx].state;//*Changing state item
    setCheckBoxData(updatedCheckboxData);//*Updating state array
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const { password, errorMessage, generatePassword } = usePasswordGenerator()

  return (
    <div className='container'>
      {/* Password text and copy */}
      {password && (
        <div className='header'>
          <div className="title">{password}</div>
          <Button onClick={handleCopy} text={copied ? "copied" : "copy"} customeClass={'copyBtn'} />
        </div>
      )}
      {/* Character Length */}
      <div className="charLength">
        <span>
          <label>Character length</label>
          <label>{length}</label>
        </span>

        <input type="range"
          min={'4'}
          max={'20'}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkBoxes">
        {checkBoxData.map((checkBox, indx) => {
          return (
            <Checkbox
              key={indx}
              title={checkBox.title}
              onChange={() => handleCheckboxChange(indx)}
              state={checkBox.state} />
          )
        })}
      </div>
      {/* Strength */}
      <PasswordStrengthIndicator password={password} />
      {/* Error Handling */}
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
      {/* Generate button */}
      <Button
        onClick={() => generatePassword(checkBoxData, length)}
        text={"Generate Password"}
        customeClass={'generateBtn'} />
    </div>
  )
}

export default App
