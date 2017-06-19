import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as AppStore from '../store/App';
import { Link } from 'react-router';
import { AppProps } from '../components/App';
import LoginForm from '../components/LoginForm';

class Login extends React.Component<AppProps, undefined> {
    
    componentWillMount(){
        
    }

    public render(){
        if (this.props.loggedIn)
            return this.renderLogout();
        else 
            return this.renderLogin();
    }

    public renderLogin(){
        return (
            <div>
                <h4>Faça seu login</h4>
                <LoginForm />
                <hr />
                <p>Para se cadastrar, clique <Link to="/register">aqui</Link></p>          
            </div>
        );
    }

    public renderLogout(){
        return (<div>
                    <h4>Clique aqui para sair: </h4>
                    <button onClick={this.props.logout}>Sair</button>
                </div>);
    }
}

export default connect(
    (state: ApplicationState) => state.app,
    AppStore.actionCreators
)(Login);
