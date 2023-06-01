import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}> 
    {props.text}
  </button>
  )

const StatisticsLine = ({ text, value, type }) => (
    <tbody>
      <tr>
        <td> {text} </td>
        <td> {value} {type}</td>  
      </tr>
    </tbody>
  )

const Statistics = ({ good, neutral, bad, all }) => {

  if (all === 0) {
    return(
    <div>
      
      <p>No feedback given</p>
    </div>
    )
  } else {
    return(
      <table>
        <StatisticsLine text = "good" value = {good}/>
        <StatisticsLine text = "neutral" value = {neutral}/>
        <StatisticsLine text = "bad" value = {bad}/> 
        <StatisticsLine text = "average" value = {((good*1) + (neutral*0) + (bad*-1))/all}/>
        <StatisticsLine text = "positive" value = {good/all*100} type = "%"/>
      </table>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>statistics</h1>
    
      <Statistics good = {good} neutral ={neutral} bad ={bad} all ={all}/>
    </div>
    
  )
}

export default App