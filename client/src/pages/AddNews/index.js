import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addNews} from "../../redux/actions/newsAction";

const AddNews = () => {
    const userId = useSelector(s => s.user.user._id)
    const dispatch = useDispatch()
    const [values, setValues] = useState({title: "", description: ""})
    const handleValue = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newNews = {...values, author: userId}
        dispatch(addNews(newNews))
        setValues({title: "", description: ""})
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