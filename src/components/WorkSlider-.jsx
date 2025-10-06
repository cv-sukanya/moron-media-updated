import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AnanyaPandeyWork from "../assets/images/AnanyaPandeyWork.webp";
import DiljitWork from "../assets/images/DiljitWork.webp";
import KapilWork from "../assets/images/KapilWork.webp";
import KareenaWork from "../assets/images/KareenaWork.webp";
import ShaanWork from "../assets/images/ShaanWork.webp";
import TumHoTohWork from "../assets/images/TumHoTohWork.webp";
import VirajGhelani from "../assets/images/VirajGhelani.webp";
import BonkersWork from "../assets/images/BonkersWork.webp";
import JasmineWork from "../assets/images/JasmineWork.webp";
import LollaWork from "../assets/images/LollaWork.webp";
import RedLorry from "../assets/images/reel covers/RedLorry.webp";
import Ace from "../assets/images/Ace.webp";
import CarlsbergWork from "../assets/images/CarlsbergWork.webp"


function WorkSlider() {
  const workData = [
    {
      image: DiljitWork,
      title: "Diluminati Tour",
      link: "/work/diluminati-tour",
    },
    {
      image: BonkersWork,
      title: "Bonkers Corner",
      link: "/work/bonkers-corner",
    },
    {
      image: JasmineWork,
      title: "Jasmine Sandlas",
      link: "https://www.instagram.com/reel/DENHzCUyjZr",
    },
    {
      image: LollaWork,
      title: "Lollapalooza India",
      link: "/work/lollapalooza",
    },
    {
      image: RedLorry,
      title: "Red Lorry Film Festival",
      link: "/work/red-lorry-film-festival",
    },
    {
      image: CarlsbergWork,
      title: "Carlsberg Brand Work at Generation Speed 2025",
      link: "/work/carlsberg",
    },
    {
      image: Ace,
      title: "Ace Tech",
      link: "/work/ace-tech",
    },
    {
      image: KareenaWork,
      title: "PVR x Kareena Kapoor Interview",
      link: "https://youtu.be/KVOyMXdv8_E?",
    },
    {
      image: AnanyaPandeyWork,
      title: "We the Women Asia",
      link: "/work/we-the-women-asia",
    },
    {
      image: TumHoTohWork,
      title: "Tum Ho Toh Music Video",
      link: "https://youtu.be/Q4LRnTyWXRw",
    },
    {
      image: KapilWork,
      title: "The Kapil Sharma Show Promo",
      link: "/",
    },
    {
      image: VirajGhelani,
      title: "Viraj Ghelani",
      link: "https://www.instagram.com/reel/C7HDVM5R0xn",
    },
    {
      image: ShaanWork,
      title: "Shaan",
      link: "https://www.instagram.com/p/DBWKYJCo5kF",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px",
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul>{dots}</ul>
      </div>
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute bottom-[-90px] right-[0%] sm:right-[10%] border border-white rounded-3xl px-4 sm:px-8 py-1 text-white font-manrope font-semibold text-xl sm:text-3xl hover:bg-white hover:text-black hover:cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={onClick}
      >
        &gt;
      </button>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute bottom-[-90px] right-[25%] sm:right-[20%] border border-white rounded-3xl px-4 sm:px-8 py-1 text-white font-manrope font-semibold text-xl sm:text-3xl hover:bg-white hover:text-black hover:cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={onClick}
      >
        &lt;
      </button>
    );
  }

  return (
    <div className="p-4 relative pb-28">
      <Slider {...settings}>
        {workData.map((work, index) => (
          <a href={work.link} target="_blank" rel="noopener noreferrer">
            <div key={index} className="px-1">
              <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-1/6 object-cover"
                />
                <div className="bg-transparent p-4 border-t border-black">
                  <h1 className="text-white font-helvetica font-semibold text-2xl text-center">
                    {work.title}
                  </h1>
                  {/* <p className="text-black font-manrope mt-2">
                  {work.description}
                </p> */}
                </div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default WorkSlider;
