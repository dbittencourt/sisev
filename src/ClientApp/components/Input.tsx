import * as React from 'react';
import validate from '../helpers/formValidation';

export default class Input extends React.Component<any, undefined>{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public render(){
        return this.renderInput();
    }

    private renderInput(){
        switch (this.props.type){
            case "text":
            case "password":
                return this.renderTextInput();
            case "checkbox":
                return this.renderCheckboxInput();
            case "submitButton":
                return this.renderSubmitButtonInput();
            default:
                return null;
        }
    }

    private renderTextInput(){
        return (<div>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type={this.props.type} name={this.props.name} value={this.props.value} 
                    placeholder={this.props.label} onChange={this.handleChange}/>
                    {this.renderError(this.props.error)}
                </div>);
    }

    private renderCheckboxInput(){
        return (<div>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type="checkbox" name={this.props.name} value={this.props.value}
                    onChange={this.handleChange}/>
                </div>);
    }

    private renderSubmitButtonInput(){
        return (<div>
                    <input type="submit" value={this.props.label} />
                </div>);
    }

    private renderError(error){
        if (error != null && error != undefined && error != "")
            return <span>{error}</span>;
    }

    // calls the store to update the form state and then validates the field value
    private handleChange(event){
        var field = {};
        if (this.props.type == "checkbox")
            field[this.props.name] = event.target.checked;
        else
            field[this.props.name] = event.target.value;
        // this.props.comparator is optional and only used in few cases, 
        // like password confirmation fields
        var error = validate(field, this.props.comparator);
        this.props.onChange(this.props.name, field[this.props.name]);
        this.props.onError(error);
    }
}