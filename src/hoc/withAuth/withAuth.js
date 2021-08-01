import React, { useEffect, useState } from 'react'

const withAuth = (WrappedComponent) => {
    return ({ ...props }) => {
        const [checkResize, setCheckResize] = useState(false)

        useEffect(() => {
            resizeHandler()
        }, [])

        const resizeHandler = () => {
            if (window.innerWidth <= 574) {
                setCheckResize(true)
            } else {
                setCheckResize(false)
            }
        }

        window.addEventListener('resize', resizeHandler)

        return (
            <WrappedComponent {...props} checkResize={checkResize}/>
        )
    }
}

export default withAuth