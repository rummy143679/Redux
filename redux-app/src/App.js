import './App.css';
import { connect } from 'react-redux'
import { IncAction, DecAction, setInput } from './actions';
import { useState } from 'react';

function App({ local_variable, IncAction, DecAction, setInput }) {

  // const [input, setInput] = useState({
  //   name: ""
  // })

  // function handleInput(e){
  //   const { type, name, value} = e.target
  //   setInput((prev) => {
  //     return {
  //       ...prev,
  //       [name] : [value]
  //     }
  //   })
  // }

  function handleInput(e) {
    const { type, name, value } = e.target
    setInput(value)
    // console.log(value)
  }
  // console.log(local_variable.name)
  return (
    <div className="App">
      {local_variable.count}
      <button onClick={IncAction} >Increament</button>
      <button onClick={DecAction} >Decreament</button><br />
      <input
        type='text'
        name='name'
        value={local_variable.name}
        onChange={handleInput}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  local_variable: state ,
})

const mapDispatchToProps = {
  setInput,
  IncAction,
  DecAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
