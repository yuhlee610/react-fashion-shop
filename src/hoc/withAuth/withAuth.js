import React, { useEffect, useState } from 'react'

const withAuth = (WrappedComponent, width) => {
    return ({ ...props }) => {
        const [checkResize, setCheckResize] = useState(false)

        useEffect(() => {
            resizeHandler()
        }, [])

        const resizeHandler = () => {
            if (window.innerWidth <= width && !checkResize) {
                setCheckResize(true)
            } 
            else if (window.innerWidth > width && checkResize) {
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