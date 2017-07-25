import * as React from "react";
import { Route } from "react-router";
import Layout from "./containers/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Category from "./containers/Category";

export default function getRoutes(store){
    
    const state = store.getState().app;
    function checkClaim(necessaryClaim: string){
        return (state.loggedIn && state.user.claims[necessaryClaim] != undefined);
    }

    function checkClaimValue(necessaryClaim: string, necessaryLevel: string){
        return (state.loggedIn && state.user.claims[necessaryClaim] != undefined
                && state.user.claims[necessaryClaim] == necessaryLevel);
    }

    function requireAnonymous(nextState, replace){
        if (checkClaim("sub"))
            replace("/");
    }

    function requireAdmin(nextState, replace){
        if (!checkClaimValue("canCreate", "admin"))
            replace("/");
    }

    function requireUser(nextState, replace){
        if (!checkClaim("sub"))
            replace("/");
    }

    return <Route component={ Layout } >
                <Route path="/" components={{ body: Home }} />
                <Route path="/login" components={{ body: Login }} onEnter={requireAnonymous} />
                <Route path="/register" components={{ body: Register }} onEnter={requireAdmin} />
                <Route path="/category" components={{ body: Category}} onEnter={requireAdmin} />
            </Route>;
}

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
