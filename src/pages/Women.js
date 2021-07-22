import React from 'react'
import ContentWomen from '../components/ContentWomen/ContentWomen'
import { Route, Switch } from 'react-router-dom';
import ContentSingleProduct from '../components/ContentSingleProduct/ContentSingleProduct';

function Women({match}) {
    return (
        <Switch>
            <Route path={`${match.path}`} exact component={ContentWomen}/>
            <Route path={`${match.path}/:id`} component={ContentSingleProduct}/>
        </Switch>
    )
}

export default Women
