import * as React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as FormStore from '../store/Form';

class LoginForm extends Form {

    componentDidMount(){
        this.props.initilize("/account/login", ["email", "passwordLogin", "remember"]);
    }

    renderFormContent(){
         return (<div>
                    {this.createInput("email", "text", "Email", 
                        this.props.values["email"], this.props.errors["email"])}
                    
                    {this.createInput("passwordLogin", "password", "Senha", 
                        this.props.values["passwordLogin"], this.props.errors["passwordLogin"])}

                    {this.createCheckbox("remember", "Lembrar de mim", this.props.values["remember"])}

                    {this.createSubmitButton("Entrar")}
                </div>);
     }
 }

export default connect(
    (state: ApplicationState) => state.form,
    FormStore.actionCreators
)(LoginForm);