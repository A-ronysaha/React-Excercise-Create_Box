import React, { Component } from 'react'
const {v4: uuidv4} = require('uuid')
class Boxform extends Component {
    constructor(props){
        super(props)
        this.state = {width:"",height:"",color:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e)
    {   
        e.preventDefault()
        let newBoxes = {...this.state,id:uuidv4()}
        this.props.add(newBoxes)
        this.setState({ height: "" ,  width: "" , color: ""});
    }
    render(){
        return(
            <div>
        <h1>Create BOX F_O_R_M</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="height">Set Height:: </label>
            <input
              type="text"
              id="height"
              name="height"  // same as in this.state
              placeholder="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="width">Set Width:: </label>
            <input
              type="text"
              id="width"
              name="width"  // same as in this.state
              placeholder="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">Set Color: </label>
            <input
              type="text"
              id="color"
              name="color"  // same as in this.state
              placeholder="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    );
    }
}
export default Boxform

