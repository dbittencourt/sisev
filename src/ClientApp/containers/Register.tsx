import * as React from "react";
import RegisterForm from "../components/registerForm";

export default class Register extends React.Component<any, undefined> {

    public render(){
        return (<div>
            <h2>Cadastro</h2>
            <h4>Crie um novo usuário.</h4>
            <hr />
            <RegisterForm />
        </div>); 
    }
}

