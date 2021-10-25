import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";
import {isAuth} from "../../lib/helpers";
import axios from "axios";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios("http://localhost:8000/api/v1/news")
            .then(({data}) => setNews(data))
    }, [])
    return (
        <Layout>
            <div className='flex items-center justify-between'>
                <h2 className="text-4xl">News</h2>
                {
                    isAuth() && <Link to='/add_news'
                                      className='bg-green-500 hover:bg-green-800 text-white ml-4 py-2 px-3 rounded-lg'>Add
                        news</Link>

                }
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-7x1">
                    <div className="flex flex-wrap -m-4">
                        {
                            news.map(item =>
                                <div className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="bg-white p-6 rounded-lg">
                                        <img
                                            className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/1200px-BBC_World_News_red.svg.png"
                                            alt=""/>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                        <p className="leading-relaxed text-base">{item.description}</p>
                                        <div className='flex items-center justify-between'>
                                            <h3 className="tracking-widest text-red-700 text-lg font-medium title-font ">{item?.author?.name} - {item?.author?.role}</h3>
                                            <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.createdAt.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default News;