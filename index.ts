import { User } from "./models/User";
import { fakeApi } from "./infra/fakeApi";

async function main() {
    try{
        const api = new fakeApi();
        const users = await api.listUsers();
        console.log(users);
    }
    catch(error){
        console.error('Error ao obter usuarios:', error);
    }
}

main();