//import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria';

import {Dao} from './Dao'
import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa'

//let dao: ConcessionariaDao =  new ConcessionariaDao()
// let dao2: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao()
let dao4: Dao<Pessoa> = new Dao()

dao3.inserir(concessionaria)

dao4.remover(5);


