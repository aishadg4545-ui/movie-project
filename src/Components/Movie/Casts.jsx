import React from "react";
import { Calendar, Globe, Star, LayoutGrid, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const reviewPrevRef = useRef(null);
  const reviewNextRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div></div>
  );
};



export default MovieDetail;
