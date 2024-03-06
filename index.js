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
Object.defineProperty(exports, "__esModule", { value: true });
const fakeApi_1 = require("./infra/fakeApi");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const api = new fakeApi_1.fakeApi();
            const users = yield api.listUsers();
            console.log(users);
        }
        catch (error) {
            console.error('Error ao obter usuarios:', error);
        }
    });
}
main();
