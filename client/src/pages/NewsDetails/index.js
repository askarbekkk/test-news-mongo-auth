import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getOneNews} from "../../redux/actions/newsAction";
import {addComment, deleteOneComment, disLike, like} from "../../redux/actions/commentsAction";

const NewsDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const auth = useSelector(s => s.user.auth)
    const userId = useSelector(s => s.user.user._id)
    const oneNews = useSelector(s => s.news.newsDetails)
    const [comment, setComment] = useState({content: ""})
    const [news, setNews] = useState({})


    useEffect(() => {
       dispatch(getOneNews(id))
    }, [id])

    const handleChange = (e) => {
        setComment({content: e.target.value})
    }

    const pushComment = () => {
        const newComment = {...comment, author: userId, news: id}
        dispatch(addComment(newComment))
        setComment({content: ""})
    }

    const handleLikes = (id) => {
        dispatch(like(id))
        // axios.patch(`http://localhost:8000/api/v1/comments/like/${id}`)
        //     .then(({data}) => {
        //         setNews({
        //             ...news, comments: news.comments.map(el => {
        //                 if (el._id === id) {
        //                     return data
        //                 }
        //                 return el
        //             })
        //         })
        //         toast.success("Comment liked")
        //     })
        //     .catch(() => toast.error("Error"))
    }

    const handleDisLikes = (id) => {
        dispatch(disLike(id))
        // axios.patch(`http://localhost:8000/api/v1/comments/dislike/${id}`)
        //     .then(({data}) => {
        //         setNews({
        //             ...news, comments: news.comments.map(el => {
        //                 if (el._id === id) {
        //                     return data
        //                 }
        //                 return el
        //             })
        //         })
        //         toast.success("Comment disliked")
        //     })
        //     .catch(() => toast.error("Error"))
    }

    const deleteComment = (id) => {
      dispatch(deleteOneComment(id))
    }

    return (
        <Layout>
            <ToastContainer/>
                        <div className='flex'>
                            <img
                                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-64 object-cover object-center mb-6 mr-10"
                                src={oneNews?.image} alt=""/>
                            <div>
                                <h1>{oneNews?.title}</h1>
                                <p>{oneNews?.description}</p>
                            </div>
                        </div>
                        <div>
                            <section className="rounded-b-lg  mt-4 ">
                                {
                                    auth && <div className='flex flex-col-reverse'>
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
                                        oneNews?.comments?.map(item =>
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
        </Layout>
    )
}

export default NewsDetails;