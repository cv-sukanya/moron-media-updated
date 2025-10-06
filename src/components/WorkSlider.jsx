import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Diljit from "../assets/images/new-projects/dilu-minati-tour-2024.png";
import AceTech from "../assets/images/new-projects/ace-tech.jpg";
import AliaBhatt from "../assets/images/new-projects/alia-bhatt-fuji-film.png";
import AngelOne from "../assets/images/new-projects/angel-one.png";
import BharatTex from "../assets/images/new-projects/bharat-tex-2025.png";
import Bonkers from "../assets/images/BonkersWork.webp";
import BrutMcd from "../assets/images/new-projects/brut-mcd.png";
import Lollapalooza from "../assets/images/new-projects/lollapalooza.jpeg";
import Carlsburg from "../assets/images/new-projects/carlsberg.png";
import ComicCon from "../assets/images/new-projects/comic-con.png";
import DeesanGroup from "../assets/images/new-projects/deesan-group.png";
import G20 from "../assets/images/new-projects/g20-summit-2025.png";
import KapilSharma from "../assets/images/KapilSharma.webp";
import LakmeFashion from "../assets/images/new-projects/lakme-fashion-week.png";
import PhirseMilo from "../assets/images/new-projects/phirse-milo.png";
import TataMarathon from "../assets/images/new-projects/tata-marathon.png";
import TumHoToh from "../assets/images/new-projects/tum-ho-toh.png";
// import KareenaKpoor from "../assets/images/new-projects/kareena-kapoor"; add this later 
import Heineken from "../assets/images/new-projects/heineken.png"
import MetaIndia from "../assets/images/new-projects/meta-india.png"


function WorkSlider() {
  const workData = [
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
                  <h1 className="text-white font-helvetica  text-2xl text-center">
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
