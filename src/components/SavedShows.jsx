import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [ movies, setMovies ] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slide = document.getElementById('slider');
    slide.scrollLeft = slide.scrollLeft-500;
  }

  const slideRight = () => {
    var slide = document.getElementById('slider');
    slide.scrollLeft = slide.scrollLeft+500;
  }

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    })
  }, [user?.email]);

  const deleteShow = (id) => {
    updateDoc(doc(db, "users", `${user?.email}`), { savedShows: movies.filter(item => item.id !== id) });
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='flex items-center relative group'>
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, index) => (
            <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}/>
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center text-wrap'>{item?.title}</p>
                <p onClick={() => deleteShow(item?.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
      </div>
    </>
  )
}

export default SavedShows;