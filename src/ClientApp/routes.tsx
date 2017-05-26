import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './containers/Layout';
import Home from './containers/Home';
import Register from './containers/Register';


export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/register' components={{body: Register }} />
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
