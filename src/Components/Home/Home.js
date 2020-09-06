import React, { useState, useEffect } from 'react';
import AllNews from '../AllNews/AllNews';
import Header from '../Header/Header';

const Home = () => {
    const [news, setNews] = useState([])
    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setNews(data)
        })
    },[])
    return (
        <div>
            <Header/>
            {
                news.map(data => <AllNews news={data}></AllNews>)
            }
        </div>
    );
};
export default Home;