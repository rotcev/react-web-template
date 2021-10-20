import HttpService from "../api/HttpService";
import {AxiosResponse} from "axios";

export default class AuthenticationService {

    private static instance?: AuthenticationService;

    public static $(): AuthenticationService {
        if (this.instance === undefined) {
            this.instance = new AuthenticationService();
        }
        return this.instance;
    }

    public currentUser(): Token {
        return undefined;
    }

    login(username: string, password: string): Promise<Token> {
        return HttpService.$().post<Token>('/login', {
            username: username,
            password: password,
        }).then(response => response.data);
    }
}

type Token = {
    auth: string
} | undefined

export type { Token }
