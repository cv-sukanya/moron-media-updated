import React, { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Diljit from "../assets/images/new-projects/dilu-minati-tour-2024.webp";
// import AceTech from "../assets/images/new-projects/ace-tech.webp";
import AliaBhatt from "../assets/images/new-projects/alia-bhatt-fuji-film.webp";
import AngelOne from "../assets/images/new-projects/angel-one.webp";
// import BharatTex from "../assets/images/new-projects/bharat-tex-2025.webp";
import Bonkers from "../assets/images/BonkersWork.webp";
import BrutMcd from "../assets/images/new-projects/brut-mcd.webp";
import Lollapalooza from "../assets/images/new-projects/lollapalooza.webp";
// import Carlsburg from "../assets/images/new-projects/carlsberg.webp";
import ComicCon from "../assets/images/new-projects/comic-con.webp";
import DeesanGroup from "../assets/images/new-projects/deesan-group.webp";
// import G20 from "../assets/images/new-projects/g20-summit-2025.webp";
// import KapilSharma from "../assets/images/KapilSharma.webp";
import LakmeFashion from "../assets/images/new-projects/lakme-fashion-week.webp";
import PhirseMilo from "../assets/images/new-projects/phirse-milo.webp";
// import TataMarathon from "../assets/images/new-projects/tata-marathon.webp";
import TumHoToh from "../assets/images/new-projects/tum-ho-toh.webp";
// import KareenaKpoor from "../assets/images/new-projects/kareena-kapoor";
// import Heineken from "../assets/images/new-projects/heineken.webp";
// import MetaIndia from "../assets/images/new-projects/meta-india.webp";
import Filmfare from "../assets/images/new-projects/filmfare.webp";
import Satrangi from "../assets/images/new-projects/satrangi-re.webp";
import Rangmorla from "../assets/images/new-projects/rangmorla-aditya-gadhvi.webp";
import Gyansrota from "../assets/images/new-projects/gyansrota.webp";
import Savera from "../assets/images/savera.webp";
import HumareRam from  "../assets/images/humare-ram.webp";
import AllYouCan from "../assets/images/All-you-can.webp";
import RedLorry from "../assets/images/Red-lorry.webp";
import WeTheWomen from "../assets/images/WeTheWomen.webp";
import RollingLoud from "../assets/images/reel covers/FINK.webp";
import Upthrust from "../assets/images/upthrust.webp";
import RangiloRe from "../assets/images/RangiloRe.webp";
import RedBull from "../assets/images/red-bull.webp";
// import { image } from "framer-motion/client";

function WorkSlider() {
  const [activeTab, setActiveTab] = useState("media");
  const swiperRef = useRef(null);

  const moronMedia = [
    { image: AliaBhatt,
      title: "Alia Bhatt x Fujifilm",
      link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
    },
    { image: RedBull,
      title: "Red Bull Solo Legends Trailer",
      link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
    },
    {
      image: AngelOne,
      title: "Angel One",
      link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
    },
    {
      image: TumHoToh,
      title: "Tum Ho Toh Music Video",
      link: "https://www.youtube.com/watch?v=Q4LRnTyWXRw",
    },
    {
      image: PhirseMilo,
      title: "Phir Se Milo Music Video",
      link: "https://www.youtube.com/watch?v=UH3k66tGqSE",
    },
    {
      image: DeesanGroup,
      title: "Deesan Group Corporate Film",
      link: "https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D",
    },
    {
      image: Gyansrota,
      title: "Gyanstrotra",
      link: "https://www.youtube.com/watch?v=gh0GYDOkD1U",
    },
    // {
    //   image: CelebrityHouseTour,
    //   title: "Celebrity House Tour",
    //   link: "/",
    // },
    {
      image: Savera,
      title: "Savera Music Video",
      link: "https://www.youtube.com/watch?v=fOJZgFkvl0s&feature=youtu.be",
    },

    {
      image: Bonkers,
      title: "Bonkers Corner Fashion Film",
      link: "https://www.instagram.com/p/DCCIHyjT3II/?igsh=aGdzMWx3cGcwMDJv",
    },
    {
      image: BrutMcd,
      title: "Mcdonalds Corporate Film",
      link: "https://www.youtube.com/watch?v=OY5vJBVxIOk",
    },
    // {
    //   image: Lashika,
    //   title: "Lashika",
    //   link: "/",
    // },

  ];

  const moronMediaLive = [
    {
      image:  Filmfare,
      title: "Filmfare Awards 2025",
      link: "https://www.instagram.com/reels/DPtP0tYjI1r/"
    },
    {
      image: Diljit,
      title: "Diluminati India Tour",
      link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
    },
    {
      image: Lollapalooza,
      title: "Lollapalooza",
      link: "/",
    },
    {
      image: HumareRam,
      title: "Humare Ram",
      link: "https://www.instagram.com/reels/DQO00dOgflh/",
    },
    {
      image: Rangmorla,
      title: "Rang Morla",
      link: "https://www.instagram.com/reels/DQghrNOjJ_-/"
    },
    {
      image: RangiloRe,
      title: "Rangilo Re",
      link: "https://www.instagram.com/reels/DPHtt8EDQBY/"
    },
    {
      image: Satrangi,
      title: "Satrangi Re - Sonu Nigam India Tour",
      link: "https://www.instagram.com/reels/DQ4wygNiEht/"
    },
    {
      image: AllYouCan,
      title: "All You Can Street",
      link: "https://drive.google.com/drive/folders/1SuEjjfhd6NXSqKKfQhcYwsi5moAibdpm"
    },
    {
      image: RedLorry,
      title: "Red Lorry Film Festival",
      link: "https://www.instagram.com/reels/DIN1hjkyP5G/"
    },
    {
      image: LakmeFashion,
      title: "Lakmé Fashion Week",
      link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
    },
    {
      image: WeTheWomen,
      title: "We the Women Asia",
      link: "https://www.instagram.com/reels/DRzQNM-CqZe/",
    },
    {
      image: ComicCon,
      title: "Mumbai Comic Con",
      link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view",
    },
    {
      image: RollingLoud,
      title: "Rolling Loud",
      link: "https://www.instagram.com/p/DSNQdLdjBaj/?igsh=bDVibXc3bGFxcjZs",
    },
    // {
    //   image: SitarForMentalHealth,
    //   title: "Sitar for Mental Health",
    //   link: "https://www.instagram.com/moronmedialive/reel/DIeGqyfijUu/",
    // },

    // {
    //   image: WCG,
    //   title: "WCG 2025",
    //   link: "https://www.youtube.com/watch?v=TmtBTlk-0pg",
    // },
    {
      image: Upthrust,
      title: "Upthrust Diwali Battle",
      link: "https://www.instagram.com/reels/C2zQ3bGIi8y/",
    }

  ];

  const currentData =
    activeTab === "media" ? moronMedia : moronMediaLive;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.slideToLoop(0, 0);
    }
  }, [activeTab]);


  // const workData = [
  //   {
  //     image:  Filmfare,
  //     title: "Filmfare Awards 2025",
  //     link: "https://www.instagram.com/reels/DPtP0tYjI1r/"
  //   },
  //   {
  //     image: Satrangi,
  //     title: "Sonu Nigam India Tour",
  //     link: "https://www.instagram.com/reels/DQ4wygNiEht/"
  //   },
  //   {
  //     image: Rangmorla,
  //     title: "Rang Morla",
  //     link: "https://www.instagram.com/reels/DQghrNOjJ_-/"
  //   },
  //   {
  //     image: Diljit,
  //     title: "Diluminati Tour Official Documentary",
  //     link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
  //   },

  //   {
  //     image: Bonkers,
  //     title: "Bonkers Corner Fashion Film",
  //     link: "https://www.instagram.com/p/DCCIHyjT3II/?igsh=aGdzMWx3cGcwMDJv",
  //   },
  //   {
  //     image: G20,
  //     title: "G20 Summit 2025",
  //     link: "https://drive.google.com/file/d/1j6R9aijpeiHSLGNZhnXqN9kLJGiJ-WSn/view",
  //   },
  //   {
  //     image: Carlsburg,
  //     title: "Carlsberg",
  //     link: "https://www.instagram.com/p/DGnsiDkP5JQ/?igsh=ZGliY3c3dXQ1MGFj",
  //   },
  //   {
  //     image: BrutMcd,
  //     title: "Mcdonalds Corporate Film",
  //     link: "https://www.youtube.com/watch?v=OY5vJBVxIOk",
  //   },
  //   {
  //     image: Lollapalooza,
  //     title: "Lollapalooza",
  //     link: "/",
  //   },
  //   {
  //     image: Heineken,
  //     title: "Heineken X UCL 2025",
  //     link: "https://drive.google.com/file/d/1oHATd99CK8PNSuTl3Mq4Ekq4NZQM8AP2/view",
  //   },
  //   {
  //     image: MetaIndia,
  //     title: "Meta India",
  //     link: "https://drive.google.com/file/d/1hna9Oeq55D-XeDrJpSX-iWvJbZ3GluPT/view?usp=sharing",
  //   },
  //   {
  //     image: AceTech,
  //     title: "Acetech Delhi & Hyderabad 2024",
  //     link: "https://www.youtube.com/watch?v=Ux2fNFdv5fI",
  //   },
  //   {
  //     image: AliaBhatt,
  //     title: "Alia Bhatt x Fujifilm",
  //     link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  //   },
  //   {
  //     image: AngelOne,
  //     title: "Angel One",
  //     link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
  //   },
  //   {
  //     image: BharatTex,
  //     title: "Bharat Tex 2025",
  //     link: "https://drive.google.com/file/d/1MXN3VyymFEu3TyO38UOjnRdFMMsHzJZW/view",
  //   },
  //   {
  //     image: TumHoToh,
  //     title: "Tum Ho Toh Music Video",
  //     link: "https://www.youtube.com/watch?v=Q4LRnTyWXRw",
  //   },
  //   {
  //     image: KapilSharma,
  //     title: "The Kapil Sharma Show Promo",
  //     link: "https://www.instagram.com/p/DAyY5b_sCkw/",
  //   },
  //   {
  //     image: ComicCon,
  //     title: "Mumbai Comic Con",
  //     link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view",
  //   },
  //   {
  //     image: DeesanGroup,
  //     title: "Deesan Group Corporate Film",
  //     link: "https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D",
  //   },
    
  //   // {
  //   //   image: KareenaKapoor,
  //   //   title: "Celebrity Interviews",
  //   //   link: "https://www.youtube.com/watch?v=KVOyMXdv8_E&feature=youtu.be",
  //   // },
  //   {
  //     image: LakmeFashion,
  //     title: "Lakmé Fashion Week",
  //     link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
  //   },
  //   {
  //     image: PhirseMilo,
  //     title: "Phir Se Milo Music Video",
  //     link: "https://www.youtube.com/watch?v=UH3k66tGqSE",
  //   },
  //   {
  //     image: TataMarathon,
  //     title: "Tata Marathon 2023",
  //     link: "https://www.instagram.com/reel/CtHMTqTAJU9/?utm_source=ig_web_copy_link&igsh=MTFkdDRveGpveTlreQ==",
  //   },
  // ];

  return (
    <div className="p-8 relative pb-24">
      <div className="flex justify-center mb-8">
        <div className="flex border border-white rounded-full overflow-hidden">

          <button
            onClick={() => setActiveTab("media")}
            className={`px-8 py-2 text-sm tracking-wide transition-all
              ${activeTab === "media"
                ? "bg-white text-black"
                : "text-white"}`}
          >
            Moron Media
          </button>

          <button
            onClick={() => setActiveTab("live")}
            className={`px-8 py-2 text-sm tracking-wide transition-all
              ${activeTab === "live"
                ? "bg-white text-black"
                : "text-white"}`}
          >
            Moron Media Live
          </button>

        </div>
      </div>

      <Swiper
        key={`${activeTab}-${currentData.length}`}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2800 }}
        loop={true}
        slidesPerView={4.5}
        centeredSlides={true}
        initialSlide={0}
        watchSlidesProgress={true}
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
        {currentData.map((work, index) => (
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
