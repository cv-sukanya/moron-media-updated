import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Diljit from "../assets/images/new-projects/dilu-minati-tour-2024.webp";
import AceTech from "../assets/images/new-projects/ace-tech.webp";
import AliaBhatt from "../assets/images/new-projects/alia-bhatt-fuji-film.webp";
import AngelOne from "../assets/images/new-projects/angel-one.webp";
import BharatTex from "../assets/images/new-projects/bharat-tex-2025.webp";
import Bonkers from "../assets/images/BonkersWork.webp";
import BrutMcd from "../assets/images/new-projects/brut-mcd.webp";
import Lollapalooza from "../assets/images/new-projects/lollapalooza.webp";
import Carlsburg from "../assets/images/new-projects/carlsberg.webp";
import ComicCon from "../assets/images/new-projects/comic-con.webp";
import DeesanGroup from "../assets/images/new-projects/deesan-group.webp";
import G20 from "../assets/images/new-projects/g20-summit-2025.webp";
import KapilSharma from "../assets/images/KapilSharma.webp";
import LakmeFashion from "../assets/images/new-projects/lakme-fashion-week.webp";
import PhirseMilo from "../assets/images/new-projects/phirse-milo.webp";
import TataMarathon from "../assets/images/new-projects/tata-marathon.webp";
import TumHoToh from "../assets/images/new-projects/tum-ho-toh.webp";
// import KareenaKpoor from "../assets/images/new-projects/kareena-kapoor"; add this later 
import Heineken from "../assets/images/new-projects/heineken.webp";
import MetaIndia from "../assets/images/new-projects/meta-india.webp";
import Filmfare from "../assets/images/new-projects/filmfare.webp";
import Satrangi from "../assets/images/new-projects/satrangi-re.webp";
import Rangmorla from "../assets/images/new-projects/rangmorla-aditya-gadhvi.webp";
// import { image } from "framer-motion/client";

function WorkSlider() {
  
  const workData = [
    {
      image:  Filmfare,
      title: "Filmfare Awards 2025",
      link: "https://www.instagram.com/reel/DPtN0OVDzvn/?igsh=MTU2dmh0bWNkb3RvZQ=="
    },
    {
      image: Satrangi,
      title: "Sonu Nigam India Tour",
      link: "https://www.instagram.com/reel/DQ3VHAQiBSd/?igsh=dzEwZ3ByNHowNTIx"
    },
    {
      image: Rangmorla,
      title: "Rang Morla",
      link: "https://www.instagram.com/reel/DQbGtXojZhq/?igsh=MTYzMXQ2MWdncTk1dQ%3D%3D"
    },
    {
      image: Diljit,
      title: "Diluminati Tour Official Documentary",
      link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
    },

    {
      image: Bonkers,
      title: "Bonkers Corner Fashion Film",
      link: "/work/bonkers-corner",
    },
    {
      image: G20,
      title: "G20 Summit 2025",
      link: "/",
    },
    {
      image: Carlsburg,
      title: "Carlsberg",
      link: "https://drive.google.com/file/d/1tYZBzrtBPNMXJIrDk42LGY47gOythpPU/view?usp=drive_link",
    },
    {
      image: BrutMcd,
      title: "Mcdonalds Corporate Film",
      link: "https://youtu.be/OY5vJBVxIOk",
    },
    {
      image: Lollapalooza,
      title: "Lollapalooza",
      link: "/",
    },
    {
      image: Heineken,
      title: "Heineken X UCL 2025",
      link: "https://drive.google.com/file/d/1oHATd99CK8PNSuTl3Mq4Ekq4NZQM8AP2/view?usp=drivesdk",
    },
    {
      image: MetaIndia,
      title: "Meta India",
      link: "https://drive.google.com/file/d/1hna9Oeq55D-XeDrJpSX-iWvJbZ3GluPT/view?usp=sharing",
    },
    {
      image: AceTech,
      title: "Acetech Delhi & Hyderabad 2024",
      link: "/work/ace-tech",
    },
    {
      image: AliaBhatt,
      title: "Alia Bhatt x Fujifilm",
      link: "/",
    },
    {
      image: AngelOne,
      title: "Angel One",
      link: "/",
    },
    {
      image: BharatTex,
      title: "Bharat Tex 2025",
      link: "https://drive.google.com/file/d/1MXN3VyymFEu3TyO38UOjnRdFMMsHzJZW/view?usp=drivesdk",
    },
    {
      image: TumHoToh,
      title: "Tum Ho Toh Music Video",
      link: "https://youtu.be/Q4LRnTyWXRw",
    },
    {
      image: KapilSharma,
      title: "The Kapil Sharma Show Promo",
      link: "https://www.instagram.com/p/DAyY5b_sCkw/",
    },
    {
      image: ComicCon,
      title: "Mumbai Comic Con",
      link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view?usp=drivesdk",
    },
    {
      image: DeesanGroup,
      title: "Deesan Group Corporate Film",
      link: "https://www.instagram.com/p/CY_a8UxhQth/",
    },
    
    // {
    //   image: KareenaKapoor,
    //   title: "Celebrity Interviews",
    //   link: "https://www.youtube.com/watch?v=KVOyMXdv8_E&feature=youtu.be",
    // },
    {
      image: LakmeFashion,
      title: "Lakmé Fashion Week",
      link: "https://www.youtube.com/watch?si=Q5HYD_Rl9qzeplWn&v=GjS7ucwqoxg&feature=youtu.be",
    },
    {
      image: PhirseMilo,
      title: "Phir Se Milo Music Video",
      link: "https://www.youtube.com/watch?si=xIOJFolygmmoxlcp&v=UH3k66tGqSE&feature=youtu.be",
    },
    {
      image: TataMarathon,
      title: "Tata Marathon 2023",
      link: "https://www.instagram.com/reel/CtHMTqTAJU9/?utm_source=ig_web_copy_link&igsh=MTFkdDRveGpveTlreQ==",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   pauseOnHover: false,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   appendDots: (dots) => (
  //     <div style={{ bottom: "-40px" }}>
  //       <ul>{dots}</ul>
  //     </div>
  //   ),
  //   nextArrow: <CustomNextArrow />,
  //   prevArrow: <CustomPrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //       },
  //     },
  //   ],
  // };

  // function CustomNextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button
  //       className="absolute bottom-[-90px] right-[0%] sm:right-[10%] border border-white rounded-3xl px-4 sm:px-8 py-1 text-white font-manrope font-semibold text-xl sm:text-3xl hover:bg-white hover:text-black hover:cursor-pointer hover:scale-110 transition-all duration-300"
  //       onClick={onClick}
  //     >
  //       &gt;
  //     </button>
  //   );
  // }

  // function CustomPrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button
  //       className="absolute bottom-[-90px] right-[25%] sm:right-[20%] border border-white rounded-3xl px-4 sm:px-8 py-1 text-white font-manrope font-semibold text-xl sm:text-3xl hover:bg-white hover:text-black hover:cursor-pointer hover:scale-110 transition-all duration-300"
  //       onClick={onClick}
  //     >
  //       &lt;
  //     </button>
  //   );
  // }

  // return (
  //   <div className="p-4 relative pb-28">
  //     <Swiper {...settings}>
  //       {workData.map((work, index) => (
  //         <a href={work.link} target="_blank" rel="noopener noreferrer">
  //           <div key={index} className="px-1">
  //             <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">
  //               <img
  //                 src={work.image}
  //                 alt={work.title}
  //                 className="h-1/6 object-cover"
  //               />
  //               <div className="bg-transparent p-4 border-t border-black">
  //                 <h1 className="text-white font-helvetica  text-2xl text-center">
  //                   {work.title}
  //                 </h1>
  //                 {/* <p className="text-black font-manrope mt-2">
  //                 {work.description}
  //               </p> */}
  //               </div>
  //             </div>
  //           </div>
  //         </a>
  //       ))}
  //     </Swiper>
  //   </div>
  // );


  return (
    <div className="p-8 relative pb-24">

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2800 }}
        loop={true}
        slidesPerView={4.5}
        centeredSlides={true}
        spaceBetween={20}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
          0:   { slidesPerView: 1 } 
        }}
      >
        {workData.map((work, index) => (
          <SwiperSlide key={index}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">

                <img
                  src={work.image}
                  alt={work.title}
                  className="h-1/6 object-cover"
                />

                <h1 className="text-white font-helvetica text-xl mt-4 text-center">
                  {work.title}
                </h1>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAV BUTTONS */}
      <div className="flex justify-center gap-12 mt-10">
        <button className="prev-btn border border-white rounded-3xl px-8 py-2 text-white text-3xl hover:bg-white hover:text-black transition-all duration-300">
          &lt;
        </button>
        <button className="next-btn border border-white rounded-3xl px-8 py-2 text-white text-3xl hover:bg-white hover:text-black transition-all duration-300">
          &gt;
        </button>
      </div>
    </div>
  );
}


export default WorkSlider;
