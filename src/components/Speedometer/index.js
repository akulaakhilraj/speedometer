import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header"> Speedometer </h1>

        <img
          src=" https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image-container"
          alt="speedometer"
        />

        <h1 className="para"> Speed is {count} mph</h1>
        <p className="para1">Min limit is 0 mph Max limit is 200 mph</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="button" type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
