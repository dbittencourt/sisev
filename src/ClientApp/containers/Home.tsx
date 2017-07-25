import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState }  from "../store";
import * as AppStore from "../store/App";
import { App } from "../components/App";
import Login from "./Login";

class Home extends App {

    public render(){
        return (
            <div>
                <h2>Sisev</h2>
                <hr />
                {this.showStatusMessage()}
                {this.renderContent()}
            </div>
        );
    }

    private showStatusMessage(){
        var statusMessage = this.props.getStatusMessage();
        if (statusMessage){
            return <div className="alert alert-success">{statusMessage}</div>;
        }
    }

    private renderContent(){
        if(this.props.loggedIn){
            return (
                <div>
                    <h4>Seja bem-vindo, {this.props.user.firstName}.</h4>
                    <p>Clique aqui para sair: </p>
                    <button onClick={this.props.logout}>Sair</button>
                </div>
            );
        }
        else return <Login />
    }

    componentWillUnmount(){
        this.props.clearStatusMessage();
    }
}

export default connect(
    (state: ApplicationState) => state.app,
    AppStore.actionCreators
)(Home);
