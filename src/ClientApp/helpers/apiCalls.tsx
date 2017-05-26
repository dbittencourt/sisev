import 'isomorphic-fetch';

const requestHeader = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
};

interface DefaultRequest {
    method: string,
    headers: {},
    body?: {}
}

export default class ApiCalls {

    //TODO: implement other http commands
    public static request(address, method, requestBody){
        var lower = method.toLowerCase();
        var requestInit;
        switch(lower){
            case 'post':
                requestInit = this.createRequest('post', requestBody);
                break;
            case 'get':
            default:
                requestInit = this.createRequest();
        }
        return fetch(address, requestInit);
    }

    private static createRequest(requestMethod = 'get', body = null): DefaultRequest {
        let req: DefaultRequest ={
            method: requestMethod,
            headers: requestHeader
        };
        if (body != null)
            req.body = JSON.stringify(body);

        return req;
    }
}