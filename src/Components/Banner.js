import axios from './../axios';
import React, { useEffect, useState } from 'react';
import request from '../request';
import '../banner.css'

const Banner= ()=>{
    const [movie, setmovie]= useState([]);

    useEffect(()=>{
        const fetchData =async()=>{
            const req = await axios.get(request.fetchNetflixOriginals);
            setmovie(req.data.results[Math.floor(Math.random()*req.data.results.length-1)]);           
            console.log(movie);
        }
        fetchData();
},[])

function trancate(str,n){
    return str?.length>n? str.substr(0,n-1) + "..." : str;
}
    return (
        <div>
                <header
                className='banner'
                style={{
                    backgroundSize:'cover',
                    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
                    backgroundPosition:'center center'
                }}
                > 

                    
                <div className='banner_contents'>
                    <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    
                         {/*title*/}
                <div
                className='banner_buttons'
                >
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>     {/*this will get have 2 btns*/}
                <h1 className='banner_description'>
                    {trancate(movie?.overview,150)}
                </h1>      {/*description*/}
                </div>
                <div className="banner-fadebutton"></div>
                </header> {/*this will get a background image*/}
        </div>

    );

}
export default Banner;