import * as React from "react";
import NavMenu from "../components/NavMenu";
import { connect } from "react-redux";
import { ApplicationState }  from "../store";
import * as AppStore from "../store/App";
import { AppPropsType } from "../components/App";

interface LayoutProps {
    body: React.ReactElement<any>;
}
type newType = LayoutProps & AppPropsType;

class Layout extends React.Component<newType, void> {

    public render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <NavMenu loggedIn={this.props.loggedIn}/>
                </div>
                <div className="col-sm-9">
                    { this.props.body }
                </div>
            </div>
        </div>;
    }
}
export default connect(
    (state: ApplicationState) => state.app,
    AppStore.actionCreators
)(Layout);
