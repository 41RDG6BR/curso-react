import { combineReducers } from 'redux'

const rootReducer = combineRducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            description: 'Pagar faturas',
            done: true
        },{
            description: 'Reuniao',
            done: false
        }]
    })
})

export default rootReducer