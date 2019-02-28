"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from './ConcessionariaDao'
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Dao_1 = require("./Dao");
var PessoaDao_1 = require("./PessoaDao");
var Pessoa_1 = __importDefault(require("./Pessoa"));
//let dao: ConcessionariaDao =  new ConcessionariaDao()
// let dao2: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.default('', []);
var dao2 = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_1.default('', '');
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
