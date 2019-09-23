import React from 'react';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super()
    this.state = {
      result: 0,
      disabled: false
    }
    this.handleClear = this.handleClear.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCalculate = this.handleCalculate.bind(this)
  }
  
  handleClear() {
    this.setState({
      result: 0,
      disabled: false
    })
  }
  
  handleClick(e) {
    const value = e.target.value
    if (e.target.className == "decimalBtn") {
      this.setState({
        disabled: true,
      })
    }
    if (e.target.className == "functionBtn") {
      this.setState({
        disabled: false,
      })
    }
    this.setState({
       result: (this.state.result + value).replace(/^0+(?!\.|$)/, '').replace(/([\/+\-/*=])([\/+\*=])/g, '$2' ).replace(/^0+(?=[1-9])/,"")
      })
    if (this.state.result.length > 12) {
      this.setState({
        result: "Number Limit"
      })
    }
  }
  
  handleCalculate() {
    try {
            this.setState({
                result: (eval(this.state.result)),
                disabled: false
            })
        } catch (e) {
            this.setState({
                result: "Error"
            })
        }
  }
  
  render() {
    return (
      <div className = "calculator">
        <div className = "screen" id = "display">
          {this.state.result}
        </div>
        <div className= "buttons">
           <button 
                    className = "functionBtn"
                    id = "clear"
                    value = 'ac'
                    onClick = {this.handleClear}
            >
            AC
          </button>
          <button 
                    className = "functionBtn"
                    id = "add"
                    value = '+'
                    onClick = {this.handleClick}
           >
          +
          </button>
          <button
                    className = "functionBtn"
                    id = "subtract"
                    value = '-'
                    onClick = {this.handleClick}
             >
           -
          </button>
          <button  
                    className = "functionBtn"
                    id = "multiply"
                    value = '*'
                    onClick = {this.handleClick}
           >
          x
          </button>
          <button 
                    className = "numberBtn"
                    id = "seven"
                    value = '7'
                    onClick = {this.handleClick}
            >
            7
          </button>
          <button 
                    className = "numberBtn"
                    id = "eight"
                    value = '8'
                    onClick = {this.handleClick}
            >
            8
          </button>
          <button 
                    className = "numberBtn"
                    id = "nine"
                    value = '9'
                    onClick = {this.handleClick}
            >
            9
          </button>
          <button 
                    className = "functionBtn"
                    id = "divide"
                    value = '/'
                    onClick = {this.handleClick}
            >
            /
          </button>
          <button 
                    className = "numberBtn"
                    id = "four"
                    value = '4'
                    onClick = {this.handleClick}
            >
            4
          </button>
          <button 
                    className = "numberBtn"
                    id = "five"
                    value = '5'
                    onClick = {this.handleClick}
            >
            5
          </button>
          <button 
                    className = "numberBtn"
                    id = "six"
                    value = '6'
                    onClick = {this.handleClick}
            >
            6
          </button>
          <button 
                    className = "decimalBtn"
                    id = "decimal"
                    value = '.'
                    disabled = {this.state.disabled}
                    onClick = {this.handleClick}
            >
            .
          </button>
          <button 
                    className = "numberBtn"
                    id = "one"
                    value = '1'
                    onClick = {this.handleClick}
            >
            1
          </button>
          <button 
                    className = "numberBtn"
                    id = "two"
                    value = '2'
                    onClick = {this.handleClick}
            >
            2
          </button>
          <button   
                    className = "numberBtn"
                    id = "three"
                    value = '3'
                    onClick = {this.handleClick}
            >
            3
          </button>
          <button 
                    className = "functionBtn"
                    id = "exponent"
                    value = "E"
                    onClick = {this.handleClick}
            >
            E
          </button>
          <button 
                    className = "functionBtn"
                    id = "equals"
                    value = '='
                    onClick = {this.handleCalculate}
            >
            =
          </button>
          <button 
                    className = "numberBtn"
                    id = "zero"
                    value = '0'
                    onClick = {this.handleClick}
            >
            0
          </button>
          <button 
                    className = "functionBtn"
                    id = "pi"
                    value = '3.141592'
                    onClick = {this.handleClick}
            >
            Pi
          </button>
          <button 
                    className = "functionBtn"
                    id = "remainder"
                    value = '%'
                    onClick = {this.handleClick}
            >
            R
          </button>
        </div>
      </div>
    );
  }
}


export default Calculator;
