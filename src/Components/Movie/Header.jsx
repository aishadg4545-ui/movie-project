import React, { useState } from 'react'
import './Movie.css'

const Movie_inside = () => {
 
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-black py-10'>
      <div className='max-w-[1600px] m-auto  hero h-[75vh] bg-no-repeat bg-cover relative rounded-2xl'>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center px-6 pb-12 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Avengers : Endgame</h1>
          <p className="text-gray-400 text-[12px] md:text-[14px] max-w-4xl mb-8 leading-relaxed opacity-80">
            With the help of remaining allies, the Avengers must assemble once more...
          </p>

          <div className="flex gap-3 items-center">
            
            <button 
              onClick={() => setShowVideo(true)}
              className="bg-[#E50000] hover:bg-red-700 transition px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold"
            >
              <span className="text-lg">▶</span> Play Now
            </button>

            <button className="bg-[#0F0F0F] border border-[#262626] p-3 rounded-lg"><i className="fa-solid fa-plus"></i></button>
            <button className="bg-[#0F0F0F] border border-[#262626] p-3 rounded-lg"><i className="fa-solid fa-thumbs-up"></i></button>
          </div>
        </div>
      </div>


      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
    
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-10 right-10 text-white text-4xl hover:text-red-600 transition"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

        
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1" // Сюда вставь ID своего видео
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie_inside