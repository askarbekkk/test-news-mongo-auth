import React from 'react'
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto my-8'>{children}</div>
        </div>
    )
}

export default Layout