import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {isAuth} from "../../lib/helpers";

const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})
    const [comment, setComment] = useState({
        content:""
    })
    useEffect(() =>{
        axios(`http://localhost:8000/api/v1/news/${id}`)
            .then(({data}) => setNews(data))
    },[id, news.comments ])

    const handleChange = (e) => {
      setComment({ content: e.target.value})
    }
    const pushComment = () => {
      axios.post("http://localhost:8000/api/v1/comments", {...comment, author: isAuth()._id, news: id})
          .then(() => toast.success("Comment added"))
          .catch(() => toast.error("Error"))
          .finally(() => setComment({content: ""}))
    }

    return (
        <Layout>
            <ToastContainer />
            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-64 object-cover object-center mb-6" src={news.image} alt=""/>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
            <div>
                <section className="rounded-b-lg  mt-4 ">
                      <div className='flex flex-col-reverse'>
                          <button onClick={pushComment}
                              className="font-bold py-2 px-4 w-96 bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment
                          </button>
                            <textarea
                                onChange={handleChange}
                                value={comment.content}
                                className="w-96 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
                                placeholder="Add comment" cols="6" rows="6" id="comment_content"
                                spellCheck="false"/>
                      </div>
                    <div id="task-comments" className="pt-4">
                        {
                            news?.comments?.map(item =>
                                <div key={item._id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                    <div className="flex flex-row justify-center mr-2">
                                        <img alt="avatar" width="48" height="48"
                                             className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                                             src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
                                        <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{item.author}</h3>
                                    </div>
                                    <p className="text-gray-600 text-lg text-center md:text-left ">{item?.content}</p>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default NewsDetails;