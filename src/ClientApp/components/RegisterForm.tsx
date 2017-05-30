import * as React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as FormStore from '../store/Form';

class RegisterForm extends Form {

    componentDidMount(){
        // this method MUST be called with the controller method address and the
        // form field names, otherwise the form wont work properly
        this.props.initilize("/account/register",
            ["firstName", "lastName", "email", "department", "password", "passwordConfirm"]);
    }

    renderFormContent(){
        return (
            <div>
                {this.createInput("firstName", "text", "Nome", 
                    this.props.values["firstName"], this.props.errors["firstName"])}

                {this.createInput("lastName", "text", "Sobrenome", 
                    this.props.values["lastName"], this.props.errors["lastName"])}

                {this.createInput("email", "text", "Email", 
                    this.props.values["email"], this.props.errors["email"])}

                {this.createInput("department", "text", "Departamento", 
                    this.props.values["department"], this.props.errors["department"])}

                {this.createPasswordWithConfirmationInput("password", "Senha", this.props.values["password"],
                    this.props.values["passwordConfirm"], this.props.errors["password"],
                    this.props.errors["passwordConfirm"])}

                {this.createSubmitButton("Cadastrar")}
            </div>
        );
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.registerForm, // Selects which state properties are merged into the component's props
    FormStore.actionCreators                 // Selects which action creators are merged into the component's props
)(RegisterForm);

