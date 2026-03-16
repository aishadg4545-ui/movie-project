import React, { useRef } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const MovieDetail = () => {
  const castPrevRef = useRef(null);
  const castNextRef = useRef(null);
  const reviewPrevRef = useRef(null);
  const reviewNextRef = useRef(null);

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-[1700px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

        
        <div className="lg:col-span-8 space-y-8">

       
          <DetailCard title="Description">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              A fiery young man clashes with an unflinching forest officer in a south
              Indian village where spirituality, fate and folklore rule the lands.
            </p>
          </DetailCard>

       
          <div className="bg-[#141414] border border-[#262626] p-10 rounded-xl">
            <div className="flex items-center mb-10 justify-between">
              <h1 className="font-bold text-2xl text-gray-400">Cast</h1>
              <div className="flex gap-2 bg-[#1a1a1a] rounded-lg p-2">
                <button ref={castPrevRef} className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a] transition">←</button>
                <button ref={castNextRef} className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a] transition">→</button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView="auto"
              navigation={{
                prevEl: castPrevRef.current,
                nextEl: castNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = castPrevRef.current;
                swiper.params.navigation.nextEl = castNextRef.current;
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <SwiperSlide key={i} className="!w-[110px]">
                  <Link to={`/actor/${i}`} className="group cursor-pointer text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border border-[#333] group-hover:border-red-600 transition">
                      <img
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        alt="actor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          
          <DetailCard
            title="Reviews"
            action={
              <div className="flex items-center gap-4">
                <button className="bg-[#141414] border border-[#262626] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1a1a1a]">
                  + Add Your Review
                </button>
                <div className="flex gap-2 bg-[#1a1a1a] rounded-lg p-1">
                  <button ref={reviewPrevRef} className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a]">←</button>
                  <button ref={reviewNextRef} className="w-10 h-10 rounded-lg bg-black text-white hover:bg-[#2a2a2a]">→</button>
                </div>
              </div>
            }
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              navigation={{
                prevEl: reviewPrevRef.current,
                nextEl: reviewNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = reviewPrevRef.current;
                swiper.params.navigation.nextEl = reviewNextRef.current;
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <SwiperSlide key={i}>
                  <ReviewBox 
                    name="Aniket Roy" 
                    rating="4.5" 
                    text="This movie was recommended to me by a very dear friend.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </DetailCard>
        </div>

        
        <div className="lg:col-span-4">
          <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-2xl space-y-10">
            <SidebarItem icon="fa-calendar" label="Released Year" value="2022" />
            
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-solid fa-language"></i>
                <span>Available Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Tamil", "Telegu"].map((lang) => (
                  <div key={lang} className="bg-[#0f0f0f] border border-[#262626] px-4 py-2 rounded-lg text-sm text-white">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <i className="fa-regular fa-star"></i>
                <span>Ratings</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <RatingBox label="IMDb" score="4.5" />
                <RatingBox label="Streamvibe" score="4" />
              </div>
            </div>

            <SidebarPerson label="Director" name="Rishab Shetty" img="./img/Hero.png" />
            <SidebarPerson label="Music" name="B. Ajaneesh Loknath" img="https://i.pravatar.cc/100?u=music" />
          </div>
        </div>

      </div>
    </div>
  );
};



const DetailCard = ({ title, children, action }) => (
  <div className="bg-[#1a1a1a] border border-[#262626] p-8 rounded-[15px]">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-gray-400 text-lg">{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
      <i className={`fa-regular ${icon}`}></i>
      <span>{label}</span>
    </div>
    <p className="text-white text-xl font-bold">{value}</p>
  </div>
);

const SidebarPerson = ({ label, name, img }) => (
  <div>
    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
      <i className="fa-regular fa-user"></i>
      <span>{label}</span>
    </div>
    <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl flex items-center gap-4">
      <img src={img} className="w-12 h-12 rounded-xl object-cover" alt={name} />
      <div>
        <p className="text-white text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500">From India</p>
      </div>
    </div>
  </div>
);

const RatingBox = ({ label, score }) => (
  <div className="bg-[#0f0f0f] border border-[#262626] p-4 rounded-xl">
    <p className="text-white text-sm font-semibold mb-2">{label}</p>
    <div className="flex items-center gap-1">
      <Star size={14} fill="#E50000" className="text-[#E50000]" />
      <span className="text-white text-sm font-semibold">{score}</span>
    </div>
  </div>
);

const ReviewBox = ({ name, rating, text }) => (
  <div className="bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 h-full">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h4 className="text-white font-semibold text-sm">{name}</h4>
        <p className="text-[10px] text-gray-500">From India</p>
      </div>
      <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full">
        <Star size={12} fill="#E50000" className="text-[#E50000]" />
        <span className="text-xs font-semibold text-white">{rating}</span>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 italic">"{text}"</p>
  </div>
);

export default MovieDetail;