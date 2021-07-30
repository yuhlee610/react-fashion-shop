import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ContentCollection from '../../components/ContentCollection/ContentCollection';
import ContentSingleProduct from '../../components/ContentSingleProduct/ContentSingleProduct';

function Collection({match}) {
    const gender = match.path.slice(1)
    return (
        <Switch>
            <Route path={`${match.path}`} exact render={() => <ContentCollection gender={gender}/>} />
            <Route path={`${match.path}/:id`} component={ContentSingleProduct}/>
        </Switch>
    )
}

export default Collection
