import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

const Signup = () => {
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setValues({...values,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Layout>
            <div className="font-sans">
                <div className="relative  flex flex-col sm:justify-center items-center ">
                    <div className="relative sm:max-w-sm w-full">
                        <div
                            className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div
                            className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Registration
                            </label>
                            <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>
                                <div>
                                    <input type="text" placeholder="Add name" onChange={handleChange} name='name' required
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"/>
                                </div>
                                <div  className="mt-7">
                                    <input type="email" placeholder="Add email" onChange={handleChange} name='email' required
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"/>
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Add password" onChange={handleChange} name='password' required
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"/>
                                </div>
                                <div className="mt-7">
                                    <button
                                        className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Sign up
                                    </button>
                                </div>

                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                        <label className="block font-medium text-sm text-gray-600 w-full">
                                            Sign up with
                                        </label>
                                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                </div>

                                <div className="flex mt-7 justify-center w-full">
                                    <button
                                        className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Facebook
                                    </button>
                                    <button
                                        className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Signup;