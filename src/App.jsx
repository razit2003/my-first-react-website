import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './friends'
function App() {
  function handleClick(){
    alert('btn clicked')
  }
 const handleClick2 =() =>{
  alert ('btn clicked 2')
 }
const addToFive =(num) =>{
alert(num +5);
}
  return (
    <>

      <h3> React core concepts part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={ handleClick2 }>Click 2</button>
      <button onClick={()=>{alert('third btn clicked')}}>Third clicked</button>
      <button onClick={() => addToFive(5)}>Four</button>

    </>
  )
}

export default App
