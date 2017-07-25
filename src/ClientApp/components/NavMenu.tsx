import * as React from "react";
import { Link } from "react-router";

export default class NavMenu extends React.Component<any, undefined> {

    renderManageMenuItems(){
        if (this.props.loggedIn)
            return(
                <li>
                    <Link to={ "/register" } activeClassName="active">
                        <span className="glyphicon glyphicon-user"></span> Criar usuário
                    </Link>
                    <Link to={ "/category" } activeClassName="active">
                        <span className="glyphicon glyphicon-plus"></span> Criar categoria
                    </Link>
                </li>
            );
    }

    public render() {
        return <div className="main-nav">
                <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to={ "/" }>SISEV</Link>
                </div>
                <div className="clearfix"></div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to={ "/" } activeClassName="active">
                                <span className="glyphicon glyphicon-home"></span> Home
                            </Link>
                        </li>
                        {this.renderManageMenuItems()}
                    </ul>
                </div>
                
            </div>
        </div>;
    }
}
