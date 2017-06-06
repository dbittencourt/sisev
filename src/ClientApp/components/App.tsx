import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as AppStore from '../store/App';

export type AppProps = AppStore.AppState & typeof AppStore.actionCreators;

class App extends React.Component<AppProps, undefined>{

}

connect(
    (state: ApplicationState) => state.app,
    AppStore.actionCreators
)(App);
