import 'isomorphic-fetch';

const requestHeader = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
};

const requestCredentials = "same-origin";

interface DefaultRequest {
    method: string,
    headers: {},
    credentials: string
    body?: {}
}

export default class ApiCalls {

    //TODO: implement other http commands
    public static async request(address, method, requestBody = null){
        var lower = method.toLowerCase();
        var requestInit;
        switch(lower){
            case 'post':
                requestInit = this.createRequest(requestBody, 'post');
                break;
            case 'get':
            default:
                requestInit = this.createRequest(requestBody);
        }

        return await fetch(address, requestInit).then(response => response.json());
    }

    private static createRequest(body, requestMethod = 'get'): DefaultRequest {
        let req: DefaultRequest ={
            method: requestMethod,
            headers: requestHeader,
            credentials: requestCredentials
        };
        if (body != null)
            req.body = JSON.stringify(body);

        return req;
    }
}