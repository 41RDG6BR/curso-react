import React from "react";
import Filho from './Filho'

export default props => {
    let lugarInformado = 'Nenhum'
    const notificarSaida = 
    lugar => {
        lugarInformado = lugar
        console.log(lugarInformado)
    }
    return (
        <div>
        {lugarInformado}
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}