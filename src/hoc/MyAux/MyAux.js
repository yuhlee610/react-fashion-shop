import React from 'react'
import { useHistory } from 'react-router'
const withAux = (WrappedComponent, gender) => {
    return ({ ...props }) => {
        let subcategory = []
        if (gender === "men") {
            subcategory = ['All men', 'Shirts', 'Shorts', 'Jackets', 'Boardshorts']
        }
        else {
            subcategory = ['All women', 'Dresses', 'Jackets', 'Shirts', 'Pants']
        }

        const history = useHistory()

        const clickProductHandler = (id) => {
            history.push(`/${gender}/${id}`)
        }

        return <WrappedComponent {...props} subcategory={subcategory} clickProductHandler={clickProductHandler}/>

    }
}

export default withAux
