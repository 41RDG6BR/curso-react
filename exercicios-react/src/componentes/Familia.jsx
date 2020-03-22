import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props => 
<div>
    <h1>Família</h1>    
    {filhosComProps(props)}
    {/* {React.children.map(props.children, componenteFilho => { 
        return React.cloneElement(componenteFilho, { ...props })}
    )} */}
    {/* Criando clone do objeto e passando todas as propriedades clonadas para os filhos */}
    {/* {React.cloneElement(props.children, { ...props })} */}
    {/* Passando diretamente a referencia de props */}
    {/* {React.cloneElement(props.children, props)} */}
    {/*{React.cloneElement(props.children, 
       { sobrenome: props.sobrenome})}
    {props.children} */}
</div>