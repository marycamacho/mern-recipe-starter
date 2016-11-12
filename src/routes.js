/**
 * Created by mary on 5/29/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MyItems from './components/items';
import ItemDetail from './components/item-detail';
import NotFound from './components/not-found';




export default (
    <Route path="/" component={App}>
        <IndexRoute component={ MyItems } />
        <Route path="items/:id" component={ItemDetail} />
        <Route path="*" component={NotFound} />
    </Route>
);