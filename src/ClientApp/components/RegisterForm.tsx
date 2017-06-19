import * as React from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import Form from './Form';

class RegisterForm extends Form {

    protected renderFormContent(){
        return (
            <div>
                {this.CreateInput("firstName", "text", "Nome")}
                {this.CreateInput("lastName", "text", "Sobrenome")}
                {this.CreateInput("email", "text", "Email")}
                {this.CreateInput("cpf", "text", "CPF")}
                {this.CreateInput("department", "text", "Departamento")}
                {this.CreateInput("password", "password", "Senha")}
                {this.CreateInput("passwordConfirm", "password", "Confirmar senha")}
                {this.CreateSubmitButton("Registrar")}
            </div>
        );
    }

    protected async onSubmit(values){
        return await this.submitForm("account/register", values);  
    }
}

export default reduxForm({
    form: 'register',
    fields: ['firstName', 'lastName', 'email', 'department', 'password'],
    onSubmitSuccess: (result, dispatch, props) => {
        dispatch({
            type: "LOGIN",
            user: result["user"]
        });
        browserHistory.push(result["redirectUrl"]);
    }
})(RegisterForm);
