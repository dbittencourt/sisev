import * as React from 'react';
import { Field } from 'redux-form';
import { validateField } from '../helpers/formValidation';

export default class NewInput extends React.Component<any, undefined>{

    constructor(props){
        super(props);
    }

    public render(){
        switch (this.props.type){
            case "text":
            case "password":
                return this.renderTextInput();
            case "checkbox":
                return this.renderCheckboxInput();
            case "submit":
                return this.renderSubmitButtonInput();
            default:
                return null;
            }
    }

    private renderTextInput(){
        return (
                <Field name={this.props.name} component={this.renderField} type={this.props.type} 
                label={this.props.label} placeholder={this.props.label} validate={this.validate(this.props.name)} />
        );
    }

    private renderCheckboxInput(){
        return (
           <div className="form-check">
                <label className="form-check-label" htmlFor={this.props.name}>
                    <Field name={this.props.name} className="form-check-input" component="input" type="checkbox" /> {this.props.label}
                </label>
            </div>
        );
    }

    private renderSubmitButtonInput(){
        return (
                <input type="submit" className="btn btn-primary" value={this.props.label} 
                disabled={this.props.disabled} />
        );
    }

    private renderField(props){
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <input {...props.input} className="form-control" placeholder={props.label} type={props.type} />
                {props.meta.touched && (props.meta.error && <span className="text-danger has-error">{props.meta.error}</span>)}
            </div>
        ); 
    }

    private validate(field){
        return (value, allValues) => {
            return validateField(this.props.name, value, allValues);
        }
    }
}