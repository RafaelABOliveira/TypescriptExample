import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

// criar carros
let carroA = new Carro('dodge journey', 4);
let carroB = new Carro ('Veloster', 3)
let carroC = new Carro ('cerato', 4)

// monte a lista de carros da concessionária
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

//exibir a lista de carros
console.log(concessionaria.mostrarListaDeCarros())

//comprar carro
let cliente = new Pessoa('Rafael', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        //comprar carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())