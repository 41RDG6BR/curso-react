const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useMongoClient: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = 
    "o '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "'{VALUE}' nao é valido para o atributo '{PATH}'."