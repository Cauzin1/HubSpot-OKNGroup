"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeApi = void 0;
const Address_1 = require("../models/Address");
const Company_1 = require("../models/Company");
const User_1 = require("../models/User");
const axios_1 = __importDefault(require("axios"));
const token = 'pat-na1-9951c7b3-a4fe-43d2-81bf-1960076f0e7b';
class fakeApi {
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users');
            return response.data.map((user) => {
                const address = new Address_1.Address(user.address.street, user.address.city, user.address.address, user.address.zipcode);
                const company = new Company_1.Company(user.company.name, address);
                return new User_1.User(user.name, user.email, company, address);
            });
        });
    }
}
exports.fakeApi = fakeApi;
/* //listUsers retorna uma Promise que resolve para um array de User
return axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => response.data)
//quando a requisição for bem sucedida extrai os dados da resposta
.then((data: any[]) => data.map((user: any) => new User(
    //mapeia os dados para um array de User para cada objeto de resposta
    //acessa os campos de company e address e cria objetos de Company e address
    user.name,
    user.email,
    user.company,
    user.address
))); */ 
