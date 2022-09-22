import {Component} from 'react'

import Welcome from './components/Welcome/index'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  //   Using if else Statement
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state

  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //         return <button>Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state
    // Using Element Variables
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button>Logout</button>
    // }else {
    //      authButton = <button>Login</button>
    // }

    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {/* {this.renderAuthButton()} */}
        {/* Using Ternary Operators
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
        {/* {isLoggedIn ? <button>Logout</button> : null} */}
        {/* Using Logical && Operator
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>} */}
      </div>
    )
  }
}

export default App
