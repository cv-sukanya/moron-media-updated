import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PoojaHegde from "../assets/images/artists/PoojaHegde.webp";
import Kareena from "../assets/images/artists/KareenaKapoorKhan.webp";
import SonuNigam from "../assets/images/artists/SonuNigam.webp";
import Diljit from "../assets/images/artists/DiljitDosanjh.webp";
import Sanam from "../assets/images/artists/SanamTheBand.webp";
import SaraAliKhan from "../assets/images/artists/SaraAliKhan.webp";
import PrakritiKakkar from "../assets/images/artists/PrakritiKakkar.webp";

function ArtistSLider() {
  const workData = [
    {
      image: Diljit,
      title: "Diljit Dosanjh",
    },
    {
      image: SonuNigam,
      title: "Sonu Nigam",
    },
    {
      image: Kareena,
      title: "Kareena Kapoor Khan",
    },
    {
      image: SaraAliKhan,
      title: "Sara Ali Khan",
    },
    {
      image: PoojaHegde,
      title: "Pooja Hegde",
    },
    {
      image: PrakritiKakkar,
      title: "Prakriti Kakkar",
    },
    {
      image: Sanam,
      title: "Sanam The Band",
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
          <div key={index} className="px-1">
            <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">
              <img
                src={work.image}
                alt={work.title}
                className="h-1/6 object-cover"
              />
              <div className="bg-white p-4 border-t border-black">
                <h1 className="text-black font-helvetica font-semibold text-xl text-center">
                  {work.title}
                </h1>
                {/* <p className="text-black font-manrope mt-2">
                  {work.description}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArtistSLider;
