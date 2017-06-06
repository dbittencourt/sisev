import * as React from 'react';
import ApiCalls from '../helpers/apiCalls';
import Input from './Input';
import { SubmissionError } from 'redux-form';

export default abstract class Form extends React.Component<any, undefined>{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onSubmitFail = this.onSubmitFail.bind(this);
    }

    public render(){
        const { handleSubmit } = this.props;
        return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
            {this.renderGlobalErrors()}
            {this.renderFormContent()}
        </form>);
    }

    // this method must be implemented because it contains the form's fields
    protected abstract renderFormContent();

    protected CreateInput(name, type, label, disabled = false){
        return <Input name={name} type={type} label={label} disabled={disabled}/>
    }

    protected CreateSubmitButton(label){
        return <Input type="submit" label={label} disabled={this.props.submitting}/>
    }

    // this method must be implemented and call submitForm with the correct controller address
    protected abstract onSubmit(values);

    // submits the form to the specified controller address
    protected async submitForm(address, values){
        var result = await ApiCalls.request(address, "post", values);
        if (result.validationErrors)
                this.onSubmitFail(result);
        else 
            return result;
    }

    // if submission fails, creates submission errors with information retrieved from controller
    protected onSubmitFail(errors){
        var error = { _error: errors.validationErrors[""]};
        throw new SubmissionError(error);
    }

    // renders submission errors retrieved from controller
    private renderGlobalErrors(){
        var errors = this.props.error;
        if (errors)
            return (<div className="alert alert-danger">
                {errors.map((error, index) => <p key={index}>{error}</p>)}
            </div>);
    }
}
