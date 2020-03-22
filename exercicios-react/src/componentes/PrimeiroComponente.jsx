import React from 'react'
//Componente com arrow function retorna inplicitamente
const isLegal = true

export default (props) => 
<>
<h1>{props.valor}</h1>
<h2>{props.aBcD}</h2>
<p>É legal? {isLegal ? 'Sim' : 'Não'}</p>
<p>{Math.random()}</p>
</>
//Componente com arrow function retorna inplicitamente
//export default () => <h1>Primeiro componente! (Arrow)</h1>

//Componente com arrow function conservando os parenteses
// export default () => (
//     <h1>Primeiro componente!</h1>
// )

//Componente com arrow function
// export default () => {
//     return <h1>Primeiro componente!</h1>
// }

// function primeiro() {
//     return <h1>Primeiro componente!</h1>
// }

// export default primeiro