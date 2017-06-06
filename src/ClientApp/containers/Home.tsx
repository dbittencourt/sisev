import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as AppStore from '../store/App';
import { AppProps } from '../components/App';
import Login from './Login';

class Home extends React.Component<AppProps, undefined>{

    public render(){
        return (
            <div>
                <h2>Sisev</h2>
                <hr />
                <Login />
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.app,
    AppStore.actionCreators
)(Home);
