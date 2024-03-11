import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users';
import Counter from './Counter';
import Team from './Team'
import Posts from './Posts';



function App() {
  function clickHandler() {
    alert("it's a button")
  }

  const clickHandler2 = () => {
    alert("It's a arrow function")
  }

  const clickHandler5 =(num)=>{
    alert(num + 5);
  }

  return (
    <>

      <h1>React Concepts part two</h1>
<Posts></Posts>

      <Users></Users>

     <Team></Team>
     <Counter></Counter>


      <button onClick={clickHandler}>Click me</button>
      <button onClick={clickHandler2}>Click me2</button>
      <button onClick={function clickHandler3() {
        alert("it's a button")
      }}>Click3</button>

     <button onClick={()=>{alert('thgfdsrtujnbgg')}}>Click4</button>

     <button onClick={()=> clickHandler5(3)}>Click5</button>


    </>
  )
}

export default App
