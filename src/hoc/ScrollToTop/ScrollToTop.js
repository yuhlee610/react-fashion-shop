import { useEffect } from "react"

const withScrollToTop = (WrappedComponent) => {
  return ({...props}) => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })

      return () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    }, [])

    return <WrappedComponent {...props}/>
  }
}

export default withScrollToTop