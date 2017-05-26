import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as FormStore from '../store/Form';
import Input from './Input';
import validate from '../helpers/formValidation';

type FormProps = FormStore.FormState & typeof FormStore.actionCreators;

export default class Form extends React.Component<FormProps, undefined>{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createInput = this.createInput.bind(this);
        this.renderGlobalErrors = this.renderGlobalErrors.bind(this);
    }

    public render(){
        if(this.props.submitted)
            this.props.redirect();
        return (<form onSubmit={this.handleSubmit}>
                    {this.renderGlobalErrors()}
                    {this.renderFormContent()}
                </form>);
    }

    protected renderFormContent(){

    }

    protected createInput(name, type, label, value, error){
        return <Input name={name} type={type} label={label} onChange={this.props.change} 
        onError={this.props.updateErrors} value={value} error={error} />
    }

    protected createPasswordWithConfirmationInput(name, label, value, confirmValue, error, confirmError){
        return (<div>
                    <Input name={name} type="password" label={label} 
                    onChange={this.props.change} onError={this.props.updateErrors} 
                    value={value} error={error} comparator={confirmValue}/>

                    <Input name={name + "Confirm"} type="password" label="Confirmação" 
                    onChange={this.props.change} onError={this.props.updateErrors} 
                    value={confirmValue} error={confirmError} comparator={value}/>
                </div>);
    }

    protected createCheckbox(name, label, value){
        return <Input type="checkbox" name={name} label={label} 
        value={value} onChange={this.props.change}/>
    }

    protected createSubmitButton(label){
        return <Input type="submitButton" label={label}/>
    }

    protected handleSubmit(event){
        event.preventDefault();
        var errors = validate(this.props.values);
        var hasError = Object.keys(errors).filter(field => errors[field] != "").length > 0;
        if (hasError)
            this.props.updateErrors(errors);
        else
            this.props.submit(); 
    }

    protected renderGlobalErrors(){
        var errors = this.props.errors["global"];
        if (errors != null && errors != undefined && errors.length > 0){
            return (
                <div className="alert alert-danger">
                    {errors.map((error, index) => 
                        <p key={index}>{error}</p>
                    )}
                </div>
            );
        }
    }

    componentWillUnmount(){
        this.props.reset();
    }
}