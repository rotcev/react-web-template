import axios, {Axios, AxiosRequestConfig} from "axios";

export default class HttpService {
    private static instance?: HttpService

    private http: Axios;

    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 1000,
        } as AxiosRequestConfig)
    }

    public static $(): Axios {
        if (this.instance === undefined) {
            this.instance = new HttpService();
        }
        return this.instance.http;
    }


}