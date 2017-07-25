import * as React from "react";
import LoginForm from "../components/LoginForm";

export default class Login extends React.Component<any, undefined>{

    public render(){
        return (
            <div>
                <h4>Faça seu login</h4>
                <LoginForm />    
            </div>
        );
    }
}