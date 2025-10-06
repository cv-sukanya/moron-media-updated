import React from "react";
import { useNavigate } from "react-router-dom";
import AMD from "../assets/images/AMD.webp";
import Diljit from "../assets/images/Diljit.webp";
import DiljitDoc from "../assets/images/DiljitDoc.webp";
import Ace from "../assets/images/Ace.webp";
import AnanyaPandey from "../assets/images/reel covers/AnanyaPandey.webp";
import RedLorry from "../assets/images/reel covers/RedLorry.webp";
import SaraAliKhan from "../assets/images/artistsPage/SaraAliKhan.webp";
import Lollapaooza from "../assets/images/reel covers/Lollapalooza.webp";
import FINK from "../assets/images/reel covers/FINK.webp";
import Bhisma from "../assets/images/reel covers/Bhisma.webp";
import BhismaPooja from "../assets/images/reel covers/BhismaPooja.webp";
import BookmyshowLive from "../assets/images/reel covers/BookmyshowLive.webp";
import ComicCon from "../assets/images/reel covers/ComicCon.webp";
import Gigabyte from "../assets/images/reel covers/Gigabyte.webp";
import HyTech1 from "../assets/images/reel covers/HyTech1.webp";
import HyTech2 from "../assets/images/reel covers/HyTech2.webp";
import IITBombay from "../assets/images/reel covers/IITBombay.webp";
import Jasmine from "../assets/images/artistsPage/JasmineSandlas.webp";
import HouseTour from "../assets/images/reel covers/HouseTour.webp";
import Ladakh from "../assets/images/reel covers/Ladakh.webp";
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
import G20 from "../assets/images/g20.jpg";
import Alia from "../assets/images/projects/alia bhatt.jpg";
import Lakme from "../assets/images/projects/lakme fashion week.jpg";
import PhirseMilo from "../assets/images/phirse-milo.png";
import AngelOne from "../assets/images/projects/angelon.jpeg";
import Meta from "../assets/images/new-projects/meta-india.png";
import TataMarathon from "../assets/images/projects/tatamaratho.jpeg";
import SonuNigam from "../assets/images/new-projects/sonu-nigam-sau-saal-pehle.jpg";
import Kingfisher from "../assets/images/kingfisher-ipl.png";
import Heineken from "../assets/images/heineken.png";
import BrutSauce from "../assets/images/brut-sauce.png";
import KapilSharma from "../assets/images/new-projects/kapil-sharma.png";
import McD from "../assets/images/new-projects/brut-mcd.png";
import Gyansrota from "../assets/images/new-projects/gyansrota.png";
import BharatTex from "../assets/images/bharat-textile.png";
import Deesan from "../assets/images/new-projects/deesan-group.png";


function Work() {
  const navigate = useNavigate();

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
        <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-5 sm:gap-8 lg:gap-10 px-5 lg:px-28 pb-56">
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
            onClick={() => navigate("/work/fink")}
          />
          <WorkCard
            name="Red Lorry Film Festival"
            image={RedLorry}
            onClick={() => navigate("/work/red-lorry-film-festival")}
          />
          <WorkCard
            name="Lollapalooza India"
            image={Lollapaooza}
            onClick={() => navigate("/work/lollapalooza")}
          />
          <WorkCard
            name="Bonkers Corner"
            image={BonkersCorner1}
            onClick={() => navigate("/work/bonkers-corner")}
          />
          <WorkCard
            name="Tum Ho To: Music Video"
            image={TumHoToh}
            onClick={() =>
              window.open("https://youtu.be/Q4LRnTyWXRw", "_blank")
            }
          />
          <WorkCard
            name="Ace Tech Delhi"
            image={Ace}
            onClick={() => navigate("/work/ace-tech")}
          />
          <WorkCard
            name="G20 Summit 2023"
            image={G20}
            onClick={() => navigate("/")}
          />
          <WorkCard
            name="Alia x Fujifilm"
            image={Alia}
            onClick={() => navigate("/")}
          />
          <WorkCard
            name="Jasmine Sandlas - Abu Dhabi"
            image={Jasmine}
            onClick={() =>
              window.open("https://www.instagram.com/reel/DENHzCUyjZr", "_blank")
            }
          />
          <WorkCard
            name="Carlsberg Brand Work at Generation Speed 2025"
            image={CarlsbergWork}
            onClick={() => 
              window.open("https://drive.google.com/file/d/1tYZBzrtBPNMXJIrDk42LGY47gOythpPU/view?usp=drive_link", "_blank")
            }
          />
          <WorkCard
            name="We the Women Asia"
            image={AnanyaPandey}
            onClick={() => navigate("/work/we-the-women-asia")}
          />
          <WorkCard
            name="McDonalds X Brut India"
            image={McD}
            onClick={() =>
              window.open("https://youtu.be/OY5vJBVxIOk", "_blank")
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
              window.open(" https://youtu.be/fOJZgFkvl0s", "_blank")
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
              window.open("https://www.youtube.com/watch?si=Q5HYD_Rl9qzeplWn&v=GjS7ucwqoxg&feature=youtu.be")
            }
          />
          <WorkCard
            name="Phirse Milo"
            image={PhirseMilo}
            onClick={() =>
              window.open("https://www.youtube.com/watch?si=xIOJFolygmmoxlcp&v=UH3k66tGqSE&feature=youtu.be")
            }
          />
          <WorkCard
            name="Angel One"
            image={AngelOne}
            onClick={() =>
              window.open("https://www.instagram.com/p/DHX0wDgh-AP/?utm_source=ig_web_copy_link&igsh=MTJ2cmJkeWdmMHJidA==")
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
              window.open("https://drive.google.com/file/d/1oHATd99CK8PNSuTl3Mq4Ekq4NZQM8AP2/view?usp=drivesdk")
            }
          />

          <WorkCard
            name="Brut Sauce"
            image={BrutSauce}
            onClick={() =>
              window.open("/")
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
              window.open("youtu.be/gh0GYDOkD1U?si=KCSMTaOZZKWg7NCr")
            }
          />
          <WorkCard
            name="Bharat Textile Heritage Film"
            image={BharatTex}
            onClick={() =>
              window.open("https://drive.google.com/file/d/1MXN3VyymFEu3TyO38UOjnRdFMMsHzJZW/view?usp=drivesdk")
            }
          />
          <WorkCard
            name="Deesan Group - Corporate Film"
            image={Deesan}
            onClick={() =>
              window.open("https://www.instagram.com/p/CY_a8UxhQth/")
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
              window.open(" https://www.instagram.com/reel/C2zQ3bGIi8y")
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
              window.open("https://www.instagram.com/reel/C_dTxOhs-7k")
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
              window.open("https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view?usp=drivesdk")
            }
          />
          <WorkCard
            name="Tiago EV X Tata Marathon"
            image={TiagoEV}
            onClick={() =>
              window.open("https://www.instagram.com/reel/CtHMTqTAJU9")
            }
          />
          <WorkCard
            name="IIT Bombay AfterMovie"
            image={IITBombay}
            onClick={() => window.open("https://youtu.be/D0YWgzCIfPc")}
          />
        </div>
      </div>
    </>
  );
}

export default Work;
