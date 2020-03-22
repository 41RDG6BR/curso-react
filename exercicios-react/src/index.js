import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaNogueira from './componentes/FamiliaNogueira'
// import Familia from './componentes/Familia'
// import FamiliaNogueira from './componentes/FamiliaNogueira'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
    <Contador numero={0}/>
    {/* <ComponenteClasse valor={''}/> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome='Nogueiraa' numero={123}>
        <Membro nome='Rodrigo' />
    </Familia>
    <FamiliaNogueira sobrenome='Nogueira' /> */}
    {/* <Familia sobrenome='Nogueira'>
        <Membro nome='Rodrigo' sobrenome='Nogueira'/>
        <Membro nome='Rodrigo' sobrenome='Nogueira'/>
    </Familia> */}
    {/* <FamiliaNogueira /> */}
    {/* <MultiElementos/> */}
        {/* <PrimeiroComponente valor="Bom dia!" aBcD={2**8}/>   
        <CompA valor="Componentes A"/>  
        <B valor="Componentes B"/>   */}
    </div>
, elemento)



// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento)

// ReactDOM.render(
//     <ul>
//         <li>Rodrigo</li>
//         <li>Maria</li>
//         <li>Ana</li>
//     </ul>
// , elemento)