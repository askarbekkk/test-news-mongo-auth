import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const UserPage = () => {
    const [userInfo, setUserInfo] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:8000/api/v1/user/${id}`)
            .then(({data}) => setUserInfo(data))
    },[])

    return (
        <Layout>
            <h2>Name: {userInfo.name}</h2>
            <h4>Email: {userInfo.email}</h4>
            <div className="flex flex-wrap -m-4">
                {
                    userInfo?.news?.map(item =>
                        <div className="xl:w-1/3 md:w-1/2 p-4" key={item._id}>
                            <div className="bg-white p-6 rounded-lg">
                                <img
                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/1200px-BBC_World_News_red.svg.png"
                                    alt=""/>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                                <div className='flex items-center justify-between'>
                                    <Link to={`/user/${item?.author?._id}`} className="tracking-widest text-red-700 text-lg font-medium title-font ">{item?.author?.name}</Link>
                                    <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.createdAt.slice(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default UserPage;