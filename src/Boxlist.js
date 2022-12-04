import React, { Component } from 'react'
import Box from './Box'
import Boxform from './Boxform'
class Boxlist extends Component{
    constructor(props){
        super(props)
        this.state = {box:[]}
        this.showBox = this.showBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }
    showBox(item){
        this.setState(b=>({
            box:[...b.box,item]
        }))
    }
    removeBox(id){
        this.setState({
            box: this.state.box.filter(n=> n.id !== id)
        })
    }
    render(){
       let boxes = this.state.box.map((b)=>(
            <Box key={b.id} width={b.width} height={b.height} color={b.color} remove={this.removeBox}/>
        ))
        return(
            <div>
                <Boxform add={this.showBox}/>
                <h2>Boxes are....</h2>
                {boxes}
            </div>
        )
    }
}
export default Boxlist