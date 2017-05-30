import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as AppStore from '../store/App';
import Login from './Login'; 

type AppProps = ApplicationState & typeof AppStore.actionCreators;

class App extends React.Component<AppProps, undefined>{

    public render(){
        if (this.props.app.loggedIn)
            return (
                <div>
                    Clique aqui para sair:
                    <button onClick={this.props.logout}>Sair</button>
                </div>
            );

        return <Login />;
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.loginForm.submitted)
            this.props.login(nextProps.loginForm.response);
    }
}

export default connect(
    (state: ApplicationState) => state,
    AppStore.actionCreators
)(App);