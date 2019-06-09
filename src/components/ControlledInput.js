// Code ControlledInput Component Here
import React, {Component} from 'react'


class ControlledInput extends Component{

  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName : ""
    }
  }

  handleChange= event => {
    // debugger
    this.setState({
      [event.target.name] : event.target.value,
      [event.target.name] : event.target.value
    })
  }


  handleOnSubmit= (event) =>{
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>FirstName:
          <input type="text" name="firstName" id="firstname" value={this.state.firstName} onChange={event => this.handleChange(event)} />
          </label>
          <br /><br />
          <label>LastName:
          <input type="text" name="lastName" id="lastname" value={this.state.lastName} onChange={event => this.handleChange(event)} />
          </label>
          <br /><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default ControlledInput
