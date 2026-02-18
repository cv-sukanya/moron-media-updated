import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AMD from "../assets/images/AMD.webp";
import Diljit from "../assets/images/Diljit.webp";
// import DiljitDoc from "../assets/images/DiljitDoc.webp";
// import Ace from "../assets/images/Ace.webp";
import AnanyaPandey from "../assets/images/reel covers/AnanyaPandey.webp";
import RedLorry from "../assets/images/reel covers/RedLorry.webp";
// import SaraAliKhan from "../assets/images/artistsPage/SaraAliKhan.webp";
import Lollapaooza from "../assets/images/reel covers/Lollapalooza.webp";
// import FINK from "../assets/images/reel covers/FINK.webp";
// import Bhisma from "../assets/images/reel covers/Bhisma.webp";
// import BhismaPooja from "../assets/images/reel covers/BhismaPooja.webp";
// import BookmyshowLive from "../assets/images/reel covers/BookmyshowLive.webp";
import ComicCon from "../assets/images/reel covers/ComicCon.webp";
// import Gigabyte from "../assets/images/reel covers/Gigabyte.webp";
// import HyTech1 from "../assets/images/reel covers/HyTech1.webp";
// import HyTech2 from "../assets/images/reel covers/HyTech2.webp";
// import IITBombay from "../assets/images/reel covers/IITBombay.webp";
// import Jasmine from "../assets/images/artistsPage/JasmineSandlas.webp";
// import HouseTour from "../assets/images/reel covers/HouseTour.webp";
// import Ladakh from "../assets/images/reel covers/Ladakh.webp";
import Lashika from "../assets/images/reel covers/Lashika.webp";
// import McDBrut from "../assets/images/reel covers/McDBrut.webp";
import Papon from "../assets/images/reel covers/Papon.webp";
import Sanam from "../assets/images/reel covers/Sanam.webp";
import SaveraMusicVideo from "../assets/images/reel covers/SaveraMusicVideo.webp";
import Shaan from "../assets/images/reel covers/Shaan.webp";
import SpotifyCreators from "../assets/images/reel covers/SpotifyCreators.webp";
import TiagoEV from "../assets/images/reel covers/TiagoEV.webp";
import TumHoToh from "../assets/images/reel covers/TumHoToh.webp";
import Upthrust from "../assets/images/reel covers/Upthrust.webp";
import Samsung from "../assets/images/SamsungEvent.webp";
import VirajGhelani from "../assets/images/VirajGhelani.webp";
import WorkCard from "../components/WorkCard";
import BonkersCorner1 from "../assets/images/reel covers/BonkersCorner1.webp";
import CarlsbergWork from "../assets/images/CarlsbergWork.webp";
import G20 from "../assets/images/g20.webp";
import Alia from "../assets/images/projects/alia bhatt.webp";
import Lakme from "../assets/images/projects/lakme fashion week.webp";
import PhirseMilo from "../assets/images/phirse-milo.webp";
import AngelOne from "../assets/images/projects/angelon.webp";
import Meta from "../assets/images/new-projects/meta-india.webp";
import TataMarathon from "../assets/images/projects/tatamaratho.webp";
import SonuNigam from "../assets/images/new-projects/sonu-nigam-sau-saal-pehle.webp";
import Kingfisher from "../assets/images/kingfisher-ipl.webp";
import Heineken from "../assets/images/heineken.webp";
import BrutSauce from "../assets/images/brut-sauce.webp";
import KapilSharma from "../assets/images/new-projects/kapil-sharma.webp";
import McD from "../assets/images/new-projects/brut-mcd.webp";
import Gyansrota from "../assets/images/new-projects/gyansrota.webp";
import BharatTex from "../assets/images/bharat-textile.webp";
import Deesan from "../assets/images/new-projects/deesan-group.webp";
import Filmfare from "../assets/images/new-projects/filmfare-work.webp";
import Rangmorla from "../assets/images/new-projects/rangmorla-work.webp";
import SatrangiRe from "../assets/images/new-projects/satrangi-re-sonu-nigam.webp";
import HumareRam from "../assets/images/new-projects/humare-ram-work.webp";
import AllYouCan from "../assets/images/new-projects/all-you-can.webp";
import Wagamama from "../assets/images/new-projects/wagamama-work.webp";
// import Tenxu from "../assets/images/new-projects/tenxu.webp";
import RangiloRe from "../assets/images/new-projects/rangilo-re.webp";
import Redbull from "../assets/images/new-projects/redbull-solo-legends.webp";
import RishabhSharma from "../assets/images/SITAR-COVER.webp";
import RollingLoud from "../assets/images/new-projects/rolling-loud.webp";
import WCG from "../assets/images/new-projects/wcg.webp";

const projects = [
  {
    name: "Filmfare Awards 2025",
    image: Filmfare,
    category: "live",
    link: "https://www.instagram.com/reels/DPtP0tYjI1r/",
  },
  {
    name: "Satrangi Re - Sonu Nigam India Tour",
    image: SatrangiRe,
    category: "live",
    link: "https://www.instagram.com/reels/DQ4wygNiEht/",
  },
  {
    name: "Diluminati India Tour",
    image: Diljit,
    category: "live",
    link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
  },
  {
    name: "Lollapalooza",
    image: Lollapaooza,
    category: "live",
    link: "https://www.instagram.com/reels/DIBX04aMjO-/",
  },
  {
    name: "Rang Morla",
    image: Rangmorla,
    category: "live",
    link: "https://www.instagram.com/reels/DQghrNOjJ_-/",
  },
  {
    name: "Humare Ram",
    image: HumareRam,
    category: "live",
    link: "https://www.instagram.com/reels/DQO00dOgflh/",
  },
  {
    name: "Rangilo Re",
    image: RangiloRe,
    category: "live",
    link: "https://www.instagram.com/reels/DPHtt8EDQBY/",
  },
  {
    name: "All You Can Street",
    image: AllYouCan,
    category: "live",
    link: "https://drive.google.com/drive/folders/1SuEjjfhd6NXSqKKfQhcYwsi5moAibdpm",
  },
  {
    name: "Red Lorry Film Festival",
    image: RedLorry,
    category: "live",
    link: "https://www.instagram.com/reels/DIN1hjkyP5G/",
  },
  {
    name: "Lakme Fashion Week",
    image: Lakme,
    category: "live",
    link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
  },
  {
    name: "We The Women",
    image: AnanyaPandey,
    category: "live",
    link: "https://www.instagram.com/reels/DRzQNM-CqZe/",
  },
  {
    name: "Mumbai Comic Con",
    image: ComicCon,
    category: "live",
    link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view",
  },
  {
    name: "Rolling Loud",
    image: RollingLoud,
    category: "live",
    link: "https://www.instagram.com/p/DSNQdLdjBaj/?igsh=bDVibXc3bGFxcjZs",
  },
  {
    name: "Sitar for Mental Health",
    image: RishabhSharma,
    category: "live",
    link: "/",
  },
  {
    name: "WCG 2025",
    image: WCG,
    category: "live",
    link: "/",
  },
  {
      name: "Upthrust Diwali Battle",
      image: Upthrust,
      category: "live",
      link: "https://www.instagram.com/reels/C2zQ3bGIi8y/",
  },


  // MORON MEDIA (FILM)

  {
    name: "Alia Bhatt x Fuji Film",
    image: Alia,
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    name: "Red Bull Solo Legends Trailer",
    image: Redbull,
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    name: "Angel One DVC Campaign",
    image: AngelOne,
    category: "film",
    link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
  },
  {
    image: TumHoToh,
    name: "Tum Ho Toh Music Video",
    link: "https://www.youtube.com/watch?v=Q4LRnTyWXRw",
    category: "film",
  },
  {
      image: PhirseMilo,
      name: "Phir Se Milo Music Video",
      link: "https://www.youtube.com/watch?v=UH3k66tGqSE",
      category: "film",
    },
    {
      image: Deesan,
      name: "Deesan Group Corporate Film",
      link: "https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D",
      category: "film",
    },
    {
      image: Gyansrota,
      name: "Gyanstrotra",
      link: "https://www.youtube.com/watch?v=gh0GYDOkD1U",
      category: "film",
    },
    // {
    //   image: CelebrityHouseTour,
    //   name: "Celebrity House Tour",
    //   link: "/",
    //   category: "film",
    // },

    {
      image: SaveraMusicVideo,
      name: "Savera Music Video",
      category: "film",
      link: "https://www.youtube.com/watch?v=fOJZgFkvl0s&feature=youtu.be",
    },

    {
      image: BonkersCorner1,
      name: "Bonkers Corner Fashion Film",
      category: "film",
      link: "https://www.instagram.com/p/DCCIHyjT3II/?igsh=aGdzMWx3cGcwMDJv",
    },
    {
      image: BrutSauce,
      name: "Mcdonalds Corporate Film",
      category: "film",
      link: "https://www.youtube.com/watch?v=OY5vJBVxIOk",
    },
    {
      image: Lashika,
      name: "Lashika",
      category: "film",
      link: "https://drive.google.com/file/d/1zupff8boABBtJzIP6rqQMuVJURR41_pi/view?usp=drive_link",
    }
  

];


function Work() {
  // const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState("all");

  const filteredProjects =
  activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  


  return (
    <>
      <div className="min-h-screen w-full bg-black">
        {/* <div className="w-full min-h-[350px] border-b-2 border-white px-8 md:px-24 flex flex-col md:flex-row items-center justify-center py-12 md:py-0 gap-8 md:gap-0">
          <div className="w-full md:w-1/2 text-white font-kodex text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left">
            Work
          </div>
          <div className="w-full md:w-1/2 text-white font-manrope font-semibold text-lg text-left">
            <h1>
              Moron Media Creative is founded on good people working together,
              forming creative bonds and doing some really cool work...It's
              simple but its true
            </h1>
            <h1 className="mt-5 uppercase">Moron work / Moron people</h1>
          </div>
        </div>
        <div className="border-b-2 border-white">
          <LogoMarquee />
        </div> */}
        {/* <h1 className="font-manrope text-white ">Our Recent Projects:</h1> */}
        <h1 className="font-manrope font-bold text-white text-center text-xl md:text-5xl pt-28 pb-10 px-4 sm:px-8 md:px-40">
          Our Recent Work
        </h1>
        {/* <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-5 sm:gap-8 lg:gap-10 px-5 lg:px-28 pb-56">
          <WorkCard
            name="Filmfare Awards 2025"
            image={Filmfare}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DPtP0tYjI1r/", "_blank")
            }
          />

          <WorkCard
            name="Satrangi Re - Sonu Nigam India Tour"
            image={SatrangiRe}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DQ4wygNiEht/", "_blank")
            }
          />

          <WorkCard
            name="Rang Morla"
            image={Rangmorla}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DQghrNOjJ_-/", "_blank")
            }
          />

          <WorkCard
            name="All You Can"
            image={AllYouCan}
            onClick={() => 
              window.open("https://www.instagram.com/reel/DMK4Ms1C9WT/?igsh=dTRxZnhubmhjcmxk", "_blank")
            }
          />

          <WorkCard
            name="Wagamama"
            image={Wagamama}
            onClick={() => 
              window.open("https://www.instagram.com/wagamama_ind?igsh=eHEyYTg2Y2VrYzQ1", "_blank")
            }
          />

          <WorkCard
            name="TenXU Brand Launch"
            image={Tenxu}
            onClick={() => 
              window.open("https://www.instagram.com/p/DQmPrS5DGFb/?igsh=MWRxcTJrMmQ5MWdqbw%3D%3D", "_blank")
            }
          />

          <WorkCard
            name="Rangilo Re"
            image={RangiloRe}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DPHtt8EDQBY/", "_blank")
            }
          />

          <WorkCard
            name="Redbull Solo Legends"
            image={Redbull}
            onClick={() => 
              window.open("https://www.youtube.com/watch?v=kVqFx0sMAro", "_blank")
            }
          />

          <WorkCard
            name="Humare Ram Documentary"
            image={HumareRam}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DQO00dOgflh/", "_blank")
            }
          />

          <WorkCard
            name="Diluminati Tour 2024"
            image={Diljit}
            onClick={() => navigate("/work/diluminati-tour")}
          />
          <WorkCard
            name="Making of Diluminati Tour Official Documentary"
            image={DiljitDoc}
            onClick={() => window.open("https://drive.google.com/file/d/1ci55dvwXfl9OyjkA0EOH-5xyxyymRBtU/view", "_blank")}
          />
          
          <WorkCard
            name="FINK | India Tour: BookMyShow Live"
            image={FINK}
            onClick={() => window.open("https://www.instagram.com/p/DKJ7h1lsDBp/?igsh=amRsNzR0c2lzOGh4", "_blank")}
          />
          <WorkCard
            name="Red Lorry Film Festival"
            image={RedLorry}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DIN1hjkyP5G/", "_blank")
            }
          />
          <WorkCard
            name="Lollapalooza India"
            image={Lollapaooza}
            onClick={() => navigate("/work/lollapalooza")}
          />
          <WorkCard
            name="Bonkers Corner"
            image={BonkersCorner1}
            onClick={() => 
              window.open("https://www.instagram.com/p/DCCIHyjT3II/?igsh=aGdzMWx3cGcwMDJv", "_blank")
            }
          />
          <WorkCard
            name="Tum Ho To: Music Video"
            image={TumHoToh}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=Q4LRnTyWXRw", "_blank")
            }
          />
          <WorkCard
            name="Ace Tech Delhi"
            image={Ace}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=Ux2fNFdv5fI", "_blank")
            }
          />
          <WorkCard
            name="G20 Summit 2023"
            image={G20}
            onClick={() => 
              window.open("https://drive.google.com/file/d/1j6R9aijpeiHSLGNZhnXqN9kLJGiJ-WSn/view", "_blank")
            }
          />
          <WorkCard
            name="Alia x Fujifilm"
            image={Alia}
            onClick={() => 
              window.open("http://youtube.com/watch?feature=shared&v=1U5KyqDfFJY", "_blank")
            }
          />
          <WorkCard
            name="Jasmine Sandlas - Abu Dhabi"
            image={Jasmine}
            onClick={() =>
              window.open("https://www.instagram.com/reels/DENHzCUyjZr/", "_blank")
            }
          />
          <WorkCard
            name="Carlsberg Brand Work at Generation Speed 2025"
            image={CarlsbergWork}
            onClick={() => 
              window.open("https://www.instagram.com/p/DGnsiDkP5JQ/?igsh=ZGliY3c3dXQ1MGFj", "_blank")
            }
          />
          <WorkCard
            name="We the Women Asia"
            image={AnanyaPandey}
            onClick={() => 
              window.open("https://www.instagram.com/reels/DRzQNM-CqZe/", "_blank")
            }
          />
          <WorkCard
            name="McDonalds X Brut India"
            image={McD}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=OY5vJBVxIOk", "_blank")
            }
          />
          <WorkCard
            name="Brut India House Tour"
            image={HouseTour}
            onClick={() => navigate("/work/brut-india-tour")}
          />
          <WorkCard
            name="Interviews"
            image={SaraAliKhan}
            onClick={() => navigate("/work/interviews")}
          />
          <WorkCard
            name="Savera Music Video"
            image={SaveraMusicVideo}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=fOJZgFkvl0s&feature=youtu.be", "_blank")
            }
          />
          <WorkCard
            name="Gigabyte India Tour"
            image={Gigabyte}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C5yN49LIO7C")
            }
          />
          <WorkCard
            name="Meta India"
            image={Meta}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1hna9Oeq55D-XeDrJpSX-iWvJbZ3GluPT/view?usp=sharing")
            }
          />
          <WorkCard
            name="Lakme Fashion"
            image={Lakme}
            onClick={() =>
              window.open("https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en", "_blank")
            }
          />
          <WorkCard
            name="Phirse Milo"
            image={PhirseMilo}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=UH3k66tGqSE", "_blank")
            }
          />
          <WorkCard
            name="Angel One"
            image={AngelOne}
            onClick={() =>
              window.open("https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0", "_blank")
            }
          />
          <WorkCard
            name="Tata Marathon"
            image={TataMarathon}
            onClick={() =>
              window.open("https://www.instagram.com/reel/CtHMTqTAJU9/?utm_source=ig_web_copy_link&igsh=MTFkdDRveGpveTlreQ==")
            }
          />
          <WorkCard
            name="Sonu Nigam - Sau Saal Pehle"
            image={SonuNigam}
            onClick={() =>
              window.open("https://www.instagram.com/reel/DKCbnPFMsS_/?utm_source=ig_web_copy_link")
            }
          />
          <WorkCard
            name="Kingfisher x IPL"
            image={Kingfisher}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1P941GVqqZhuzkPQEt0c-0MXZbzWnZT1c/view")
            }
          />

          <WorkCard
            name="Heineken"
            image={Heineken}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1oHATd99CK8PNSuTl3Mq4Ekq4NZQM8AP2/view", "_blank")
            }
          />

          <WorkCard
            name="Brut Sauce"
            image={BrutSauce}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=Kw6iNpNnx7U", "_blank")
            }
          />
          <WorkCard
            name="Kapil Sharma"
            image={KapilSharma}
            onClick={() =>
              window.open("https://www.instagram.com/p/DAyY5b_sCkw/")
            }
          />
          
          <WorkCard
            name="Gyansrota"
            image={Gyansrota}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=gh0GYDOkD1U", "_blank")
            }
          />
          <WorkCard
            name="Bharat Textile Heritage Film"
            image={BharatTex}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1MXN3VyymFEu3TyO38UOjnRdFMMsHzJZW/view", "_blank")
            }
          />
          <WorkCard
            name="Deesan Group - Corporate Film"
            image={Deesan}
            onClick={() =>
              window.open("https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D", "_blank")
            }
          />

          <WorkCard
            name="The Ladakh Concert Documentary"
            image={Ladakh}
            onClick={() =>
              window.open("https://youtu.be/ouoRrZOX3ik", "_blank")
            }
          />
          <WorkCard
            name="Bookmyshow Live's: The Big Turf Carnival"
            image={BookmyshowLive}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C8jzv5SvagP")
            }
          />
          <WorkCard
            name="Esports - AMD Mumbai Tour"
            image={AMD}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C9KPHf4N9T3")
            }
          />
          <WorkCard
            name="Upthrust Esport's LAN Event"
            image={Upthrust}
            onClick={() =>
              window.open("https://www.instagram.com/reels/C2zQ3bGIi8y/", "_blank")
            }
          />
          <WorkCard
            name="That's so Viraj"
            image={VirajGhelani}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C7HDVM5R0xn")
            }
          />
          <WorkCard
            name="Papon Pune Show"
            image={Papon}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C5qqfwsxAHO")
            }
          />
          <WorkCard
            name="Sanam The Band"
            image={Sanam}
            onClick={() =>
              window.open("https://www.instagram.com/reel/C4ntsRhIlPI")
            }
          />
          <WorkCard
            name="3D Commercial: HyTech"
            image={HyTech1}
            onClick={() =>
              window.open("https://www.instagram.com/reel/CuUV58qgCU5")
            }
          />
          <WorkCard
            name="3D Commercial: HyTech"
            image={HyTech2}
            onClick={() =>
              window.open("https://www.instagram.com/reel/CtwYMRloXQD")
            }
          />
          <WorkCard
            name="Shaan"
            image={Shaan}
            onClick={() =>
              window.open("https://www.instagram.com/p/DBWKYJCo5kF")
            }
          />
          <WorkCard
            name="Ad Films: Lashika"
            image={Lashika}
            onClick={() =>
              window.open("https://www.instagram.com/p/C_M_-EatzMD")
            }
          />
          <WorkCard
            name="Samsung"
            image={Samsung}
            onClick={() =>
              window.open("https://www.instagram.com/reels/DMfmphuo9cT/")
            }
          />
          <WorkCard
            name="Bhima Gold"
            image={Bhisma}
            onClick={() =>
              window.open("https://www.instagram.com/p/CwATqI1q4sf")
            }
          />
          <WorkCard
            name="Bhima Gold"
            image={BhismaPooja}
            onClick={() =>
              window.open("https://www.instagram.com/reel/CqNxsPQA7ou")
            }
          />
          <WorkCard
            name="Spotify Creators Day"
            image={SpotifyCreators}
            onClick={() =>
              window.open("https://www.instagram.com/reel/Ck_F5QyIcJb")
            }
          />
          <WorkCard
            name="Comic Con: Mumbai"
            image={ComicCon}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view", "_blank")
            }
          />
          <WorkCard
            name="Tiago EV X Tata Marathon"
            image={TiagoEV}
            onClick={() =>
              window.open("https://www.instagram.com/reels/CtHMTqTAJU9/", "_blank")
            }
          />
          <WorkCard
            name="IIT Bombay AfterMovie"
            image={IITBombay}
            onClick={() => window.open("https://youtu.be/D0YWgzCIfPc")}
          />
        </div> */}

        <div className="flex justify-center gap-3 mb-10 px-4 sm:px-0">

          {["all", "film", "live"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border transition-all font-helvetica ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {tab === "all" && "All Work"}
              {tab === "film" && "Moron Media"}
              {tab === "live" && "Moron Media Live"}
            </button>
          ))}

        </div>


        <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-5 sm:gap-8 lg:gap-10 px-5 lg:px-28 pb-56">

          {filteredProjects.map((item, i) => (
            <WorkCard
              key={i}
              name={item.name}
              image={item.image}
              onClick={() => window.open(item.link, "_blank")}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Work;
