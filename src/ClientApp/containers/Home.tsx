import * as React from 'react';
import LoginForm from '../components/LoginForm';

export default class Home extends React.Component<void, void> {
    
    public render() {
        return (<div>
                    <h2>Sisev</h2>
                    <h4>Faça seu login</h4>
                    <hr />
                    <LoginForm />
                    
                </div>);
    }
}
