import React from 'react'
import ContentMen from '../components/ContentMen/ContentMen'
import { Route, Switch } from 'react-router-dom';
import ContentSingleProduct from '../components/ContentSingleProduct/ContentSingleProduct';

function Men({match}) {
    return (
        <Switch>
            <Route path={`${match.path}`} exact component={ContentMen}/>
            <Route path={`${match.path}/:id`} component={ContentSingleProduct}/>
        </Switch>
    )
}

export default Men
