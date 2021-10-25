import React from 'react';
import Layout from "../../components/Layout";

const AddNews = () => {
    return (
        <Layout>
            <form className=''>
                <div className="mb-5">
                    <input
                        type="text"
                        name="default"
                        placeholder="News title"
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>
                <textarea rows="4" maxLength="210" className="bg-green-500 w-3/5 mt-1 py-2 px-3 rounded-md shadow-sm focus:outline-none "/>
                <div>
                    <button className='bg-blue-500 hover:bg-blue-800 text-white ml-4 py-2 px-3 rounded-lg'>Create news</button>
                </div>
            </form>
        </Layout>
    );
};

export default AddNews;