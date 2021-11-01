import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {isAuth} from "../../lib/helpers";
import Spinner from "../../components/Spinner";

const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [comment, setComment] = useState({
        content: ""
    })

    useEffect(() => {
        axios(`http://localhost:8000/api/v1/news/${id}`)
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
            })
            .catch(() => console.log("Error"))
    }, [id])

    const handleChange = (e) => {
        setComment({content: e.target.value})
    }

    const pushComment = () => {
        axios.post("http://localhost:8000/api/v1/comments", {...comment, author: isAuth()?._id, news: id})
            .then(({data}) => {
                setNews({...news, comments: [...news.comments, data]})
                toast.success("Comment added")
            })
            .catch(() => toast.error("Error"))
            .finally(() => setComment({content: ""}))
    }

    const handleLikes = (id) => {
        axios.patch(`http://localhost:8000/api/v1/comments/like/${id}`)
            .then(({data}) => {
                setNews({
                    ...news, comments: news.comments.map(el => {
                        if (el._id === id) {
                            return data
                        }
                        return el
                    })
                })
                toast.success("Comment liked")
            })
            .catch(() => toast.error("Error"))
    }

    const handleDisLikes = (id) => {
        axios.patch(`http://localhost:8000/api/v1/comments/dislike/${id}`)
            .then(({data}) => {
                setNews({
                    ...news, comments: news.comments.map(el => {
                        if (el._id === id) {
                            return data
                        }
                        return el
                    })
                })
                toast.success("Comment disliked")
            })
            .catch(() => toast.error("Error"))
    }

    const deleteComment = (id) => {
      axios.delete(`http://localhost:8000/api/v1/comments/delete/${id}`)
          .then(({data}) => toast.success("Comment deleted"))
    }

    return (
        <Layout>
            <ToastContainer/>
            {
                isLoading ? <Spinner /> :
                    <>
                        <div className='flex'>
                            <img
                                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-64 object-cover object-center mb-6 mr-10"
                                src={news.image} alt=""/>
                            <div>
                                <h1>{news.title}</h1>
                                <p>{news.description}</p>
                            </div>
                        </div>
                        <div>
                            <section className="rounded-b-lg  mt-4 ">
                                {
                                    isAuth() && <div className='flex flex-col-reverse'>
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
                                }
                                <div id="task-comments" className="pt-4">
                                    {
                                        news?.comments?.map(item =>
                                            <div key={item._id}
                                                 className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                                <div className="flex flex-row justify-center mr-2">
                                                    <img alt="avatar" width="48" height="48"
                                                         className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                                                         src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
                                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{item.author?.name}</h3>
                                                </div>
                                                <p className="text-gray-600 text-lg text-center md:text-left ">{item?.content}</p>
                                                <p>{
                                                    !!item.likes && <><i
                                                        className="fas text-red-700 fa-heart"/> {item.likes} Likes</>
                                                }</p>
                                                <div className='flex'>
                                                    <button onClick={() => handleLikes(item._id)}><i
                                                        className="far fa-thumbs-up text-green-600 mr-3"/></button>
                                                    {
                                                        !!item.likes && <button onClick={() => handleDisLikes(item._id)}><i
                                                            className="far fa-thumbs-down text-red-500"/></button>
                                                    }
                                                </div>
                                                <button onClick={() => deleteComment(item._id)}><i className="far fa-trash-alt text-red-700"/></button>
                                            </div>
                                        )
                                    }
                                </div>
                            </section>
                        </div>
                    </>
            }
        </Layout>
    )
}

export default NewsDetails;