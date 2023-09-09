
import './App.css'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {

  function handleClick (){
    alert ('button clicked')
  }

  const handleClick2 = () => {
    alert ('handle click 2')
  }

  const addToFive = (num) => {
    alert (num + 15)
  }

  return (
    <>
      
      <h2>React core concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={ () => {alert('click button 3')}}>Click 3</button>
      {/* vejaill */}
      <button onClick={ () => addToFive(7) }>Click 4</button>
     
    </>
  )
}

export default App
