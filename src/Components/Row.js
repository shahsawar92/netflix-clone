import React, { useEffect, useState } from 'react';
import axios from '../axios';
import '../Rows.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const Row = ({title, fetchURL, isLargeRow})=>{
    const [movies, setmovies]= useState([]);
    const [trailerUrl, settrailerUrl]= useState('');
    const base_url="https://image.tmdb.org/t/p/original";
    // console.log("hallooo from Row before useeffect");

    useEffect(() => {
        // console.log("hallooo from Row inside useeffect");
        // Update the document title using the browser API
        async function fetchData(){
            const req = await axios.get(fetchURL);
            setmovies(req.data.results);
            return req; 
        }
        fetchData();

      },[fetchURL]);
    //   console.log("hallooo from Row after useeffect");
      
    const opts ={
        
        width:"100%",
        height:"390px", 
        playerVars:{
            autoplay:1
        }
    }
    const handleClick=(movie)=>{
        console.log("image clicked");
        if(trailerUrl){
            settrailerUrl("");
        }else{
        movieTrailer(movie?.name || "").then(url=>
            {
                const urlParms=new URLSearchParams( new URL(url).search);
                settrailerUrl( urlParms.get('v'));
            }
        ).catch(error=>console.log(error))

    }
    }
return(
    <div className='row'> 
        {/* title */}
        <div className='row-title'>{title}</div>
        <div className="row-posters">
            {
                movies.map(movie=>( 
                    <img
                    onClick={()=>handleClick(movie)}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                    key={movie.id}
                    src={`${base_url}${isLargeRow?movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))
            }
        </div>
        {/* containers -> posters -> images */}
        { trailerUrl && <YouTube videoId={trailerUrl} opts={
            opts
        }></YouTube>}
    </div>
)
}

export default Row;