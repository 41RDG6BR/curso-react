import React, { Component } from 'react'
import Button from 'react'

export default class ComponenteClasse extends Component {
    render(){
        return (
            <h1>{this.props.valor || 'Padrão'}</h1>
            
        )
    }
}

// export default class ComponenteClasse extends Component {
//       constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log('Clicado');
//   }
//     render (){
//          return (
//             <button onClick={this.handleClick}>Clique em mim!</button>
//             )
//     }
// }
