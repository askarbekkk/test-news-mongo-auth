import React, {useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {isAuth} from "../../lib/helpers";

const AddNews = () => {

    const [values, setValues] = useState({
        title: "",
        description: ""
    })

    const handleValue = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const author = isAuth()._id
        axios.post("http://localhost:8000/api/v1/news", {...values, author})
            .then(() => toast.success("News successfully created!"))
            .catch(() =>toast.error("Error to created news!"))
            .finally(() => setValues({name:"", email:"", password:""}))
    }

    return (
        <Layout>
            <ToastContainer />
            <div className="flex mx-auto items-center justify-center shadow-lg mx-8 mb-4 max-w-lg">
                <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add news</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <input onChange={handleValue} type='text' className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="title" value={values.title}  required/>
                        </div>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea onChange={handleValue} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="description" value={values.description} required/>
                        </div>
                        <div className="w-full md:w-full flex items-start md:w-full px-3">
                            <div className="-mr-1">
                              <button className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">Add news</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AddNews;