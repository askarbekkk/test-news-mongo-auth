import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {isAuth, logout} from "../../lib/helpers";
import logo from "../../images/1608376673794-removebg-preview.png"

const Header = () => {
    const history = useHistory()
    return (
        <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'
                    className="flex lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src={logo} className='logo-img'
                         alt="logo"/>
                </Link>
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to='/'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Home</Link>
                    <Link to='/private'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Private</Link>
                    {
                        isAuth()?.role === "admin" &&
                        <Link to='/admin' className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Admin</Link>

                    }
                </nav>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    {
                        isAuth() ? <button onClick={() =>{
                            logout()
                            history.push("/")
                        }
                        } className='bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg' >Logout</button> : <>
                            <Link to='/signin'
                                  className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                                Signin
                            </Link>
                            <Link to='/signup'
                                  className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                                Signup
                            </Link>
                        </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;