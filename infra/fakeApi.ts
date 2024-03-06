import { Address } from "../models/Address";
import { Company } from "../models/Company";
import { User } from "../models/User";
import axios from "axios";
const token = 'pat-na1-9951c7b3-a4fe-43d2-81bf-1960076f0e7b'

export class fakeApi{
    async listUsers(): Promise<User[]> {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return response.data.map((user: any) =>{
                const address =
                new Address(user.address.street, user.address.city, user.address.zipcode);
                const company = new Company(user.company.name, address);
                return new User(
                    user.name,
                    user.email,
                    company,
                    address
                )
        });
    }
}


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