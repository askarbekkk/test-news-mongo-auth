import React from 'react';
import Layout from "../../components/Layout";

const Admin = () => {
    return (
        <Layout>
            <div className="flex h-screen w-full bg-gray-800 ">
                <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 sm:block">
                    <div className="mb-6">
                        <div className="flex justify-center">
                            <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
                                    className="rounded-full w-auto"
                                />
                            </div>
                        </div>
                        <div>
                            <ul className="mt-6 leading-10 px-4">
                                <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer">
                                <i className="fas fa-align-left fa-sm text-white"/>
                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-pink-400 cursor-pointer">
                                <i className="fas fa-question-circle fa-sm text-white"/>
                            </li>
                            <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                                <i className="fas fa-headphones fa-sm text-white"/>
                            </li>
                            <li className="absolute bottom-0 mb-3 p-2 rounded-full flex items-center mx-auto bg-white cursor-pointer">
                                <i className="fas fa-power-off fa-sm text-indigo-600"/>
                            </li>
                        </ul>
                    </div>
            </div>
            </aside>
            <aside className="animate__animated animate__fadeInLeft w-52 relative z-0 flex-shrink-0 hidden px-4 overflow-y-auto bg-gray-100 sm:block "
                   x-show="openMenu ==  1">
            <div className="mb-6">
                <div className="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-chart-pie fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Dashboard</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-calculator fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Calculator</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-wallet fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Wallet</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-archive fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Saving</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-money-bill-wave-alt fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Currencies</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                            <i className="fas fa-shopping-basket fa-sm text-indigo-600"/>
                        </div>
                        <p className="text-xs mt-1 text-center font-semibold">Expenses</p>
                    </div>
                </div>
            </div>
        </aside>
    <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
            <div className="grid pb-10  mt-4 ">
                <div className="mb-2">
                    <p className="text-lg font-semibold text-gray-400">Invoices</p>
                </div>
                <div className="grid grid-cols-12 gap-6 border-b-2 pb-5">
                    <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-3">
                            <div className="p-4">
                                <p className="text-xl font-bold">RM 45,941</p>
                                <p className="text-xs font-semibold text-gray-400">Overdue</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xl font-bold">RM 37,500</p>
                                <p className="text-xs font-semibold text-gray-400">Total Outstanding</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xl font-bold">RM 9,200</p>
                                <p className="text-xs font-semibold text-gray-400">In Process</p>
                            </div>
                            <div className=" p-4">
                                <p className="text-xl font-bold">RM 5,700</p>
                                <p className="text-xs font-semibold text-gray-400">Paid Today</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
                        <div className="p-4">
                            <p className="text-sm text-gray-400">Outstanding Revenue</p>
                            <div className="shadow w-full bg-gray-100 mt-2">
                                <div className="bg-indigo-600 text-xs leading-none py-1 text-center text-white"></div>
                            </div>
                            <p className="text-xs font-semibold text-gray-400 mt-2">RM 45,941 Overdue</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                    <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                        <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                            <div>
                                <h3 className="text-center text-white text-lg">
                                    Total Balance
                                </h3>
                                <h3 className="text-center text-white text-3xl mt-2 font-bold">
                                    RM 27,580
                                </h3>
                                <div className="flex space-x-4 mt-4">
                                    <button className="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">
                                        Transfer
                                    </button>
                                    <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline 
                                   focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">
                                        Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                        <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                                <div className="text-white text-lg flex space-x-2 items-center">
                                    <div className="bg-white rounded-md p-2 flex items-center">
                                        <i className="fas fa-toggle-off fa-sm text-yellow-300"/>
                                    </div>
                                    <p>Finished Appt</p>
                                </div>
                                <h3 className="text-white text-3xl mt-2 font-bold">
                                    120
                                </h3>
                                <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                                    4 not confirmed
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                                <div className="text-white text-lg flex space-x-2 items-center">
                                    <div className="bg-white rounded-md p-2 flex items-center">
                                        <i className="fas fa-clipboard-check fa-sm text-blue-800"/>
                                    </div>
                                    <p>Finished Appt</p>
                                </div>
                                <h3 className="text-white text-3xl mt-2 font-bold">
                                    72
                                </h3>
                                <h3 className="text-white text-lg mt-2 ">
                                    3.4% <span className='font-semibold text-blue-200'>vs last month</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
        </Layout>
    );
};

export default Admin;