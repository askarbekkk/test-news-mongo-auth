import React from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";
import {isAuth} from "../../lib/helpers";

const News = () => {
    return (
        <Layout>
            <div className='flex items-center justify-between'>
                <h2 className="text-4xl">News</h2>
                {
                    isAuth() &&  <Link to='/add_news' className='bg-green-500 hover:bg-green-800 text-white ml-4 py-2 px-3 rounded-lg'>Add news</Link>

                }
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-7x1">
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-6 rounded-lg">
                                <img
                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                                    src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                                    alt=""/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-6 rounded-lg">
                                <img
                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                                    src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg"
                                    alt=""/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-6 rounded-lg">
                                <img
                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                                    src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574"
                                    alt=""/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of
                                    Giza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-6 rounded-lg">
                                <img
                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                                    src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg"
                                    alt=""/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default News;