import * as React from "react";
import { browserHistory } from "react-router";
import { reduxForm } from "redux-form";
import Form from "./Form";

class LoginForm extends Form {

    protected renderFormContent(){
        return (
            <div>
                {this.CreateInput("email", "text", "Email")}
                {this.CreateInput("password", "password", "Senha")}
                {this.CreateInput("remember", "checkbox", "Lembrar de mim")}
                {this.CreateSubmitButton("Entrar")}
            </div>
        );
    }

    protected async onSubmit(values){
        return await this.submitForm("account/authenticate", values);  
    }
}

export default reduxForm({
    form: "login",
    fields: ["email", "password", "remember"],
    onSubmitSuccess: (result, dispatch, props) => {
        dispatch({
            type: "LOGIN",
            user: result["user"]
        });
        if (typeof window !== "undefined"){
            window.localStorage.setItem("user", JSON.stringify(result["user"]));
        }
            
        browserHistory.push(result["redirectUrl"]);
    }
})(LoginForm);
