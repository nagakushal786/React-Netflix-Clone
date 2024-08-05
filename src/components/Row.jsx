import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    axios.get(fetchURL)
    .then((response) => setMovies(response.data.results))
  }, [fetchURL]);

  const slideLeft = () => {
    var slide = document.getElementById('slider'+rowID);
    slide.scrollLeft = slide.scrollLeft-500;
  }

  const slideRight = () => {
    var slide = document.getElementById('slider'+rowID);
    slide.scrollLeft = slide.scrollLeft+500;
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='flex items-center relative group'>
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, index) => (
            <Movie key={index} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
      </div>
    </>
  )
}

export default Row;