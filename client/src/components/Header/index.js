import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'
                    className="flex lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" width="40"
                         alt="logo"/>
                    <span className="ml-3 text-xl">Facebook</span>
                </Link>
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to='/'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Home</Link>
                    <Link to='/private'
                        className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Private</Link>
                    <Link to='/admin' className="mr-5  cursor-pointer border-b border-transparent hover:border-indigo-600">Admin</Link>
                </nav>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <Link to='/signin'
                       className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                        Signin
                    </Link>
                    <Link to='/signup'
                          className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
                        Signup
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;