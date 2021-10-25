import React from 'react';
import Layout from "../../components/Layout";

const AddNews = () => {
    const handleSubmit = () => {

    }
    return (
        <Layout>
            <div className="flex mx-auto items-center justify-center shadow-lg mx-8 mb-4 max-w-lg">
                <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add news</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <input type='text' className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body"  required/>
                        </div>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" required/>
                        </div>
                        <div className="w-full md:w-full flex items-start md:w-full px-3">
                            <div className="-mr-1">
                              <button className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">Add news</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/*<form classNameName=''>*/}
            {/*    <div classNameName="mb-5">*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            name="default"*/}
            {/*            placeholder="News title"*/}
            {/*            classNameName="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <textarea rows="4" maxLength="210" classNameName="bg-green-500 w-3/5 mt-1 py-2 px-3 rounded-md shadow-sm focus:outline-none "/>*/}
            {/*    <div>*/}
            {/*        <button classNameName='bg-blue-500 hover:bg-blue-800 text-white ml-4 py-2 px-3 rounded-lg'>Create news</button>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </Layout>
    );
};

export default AddNews;