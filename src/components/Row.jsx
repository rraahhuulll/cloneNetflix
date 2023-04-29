import axios  from 'axios';
import React from 'react'
import {FaHeart , FaRegHeart} from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react'

function Row({title , fetchURL}) {
    const [movies , setMovies]= useState([]);
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    // console.log(movie);
  return (
    <>
    <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'}>
            {movies?.map((item,id)=>(
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center h-full items-center'  >{item?.title}</p>
                </div>
                </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Row