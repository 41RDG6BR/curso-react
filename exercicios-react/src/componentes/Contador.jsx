import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm = () =>{
        // console.log(e)
        console.log(this)
        this.setState({ numero: this.state.numero + 1})
        // this.state.numero = this.state.numero++
    }

    render(){
        return (
        <div>
            <div>Número: {this.state.numero}</div>
            <button onClick={this.maisUm}>Inc</button>
            <button>Dec</button>
        </div>
        )
    }
}
//  Solução this 01   
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução this 02
// {/* <button onClick={() => this.maisUm()}>Inc</button> */}