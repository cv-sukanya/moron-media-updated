import React from "react";
// import { useNavigate } from "react-router-dom";
// import AMD from "../assets/images/AMD.webp";
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
// import Papon from "../assets/images/reel covers/Papon.webp";
// import Sanam from "../assets/images/reel covers/Sanam.webp";
import SaveraMusicVideo from "../assets/images/reel covers/SaveraMusicVideo.webp";
// import Shaan from "../assets/images/reel covers/Shaan.webp";
// import SpotifyCreators from "../assets/images/reel covers/SpotifyCreators.webp";
// import TiagoEV from "../assets/images/reel covers/TiagoEV.webp";
import TumHoToh from "../assets/images/reel covers/TumHoToh.webp";
import Upthrust from "../assets/images/reel covers/Upthrust.webp";
// import Samsung from "../assets/images/SamsungEvent.webp";
// import VirajGhelani from "../assets/images/VirajGhelani.webp";
import WorkCard from "../components/WorkCard";
import BonkersCorner1 from "../assets/images/reel covers/BonkersCorner1.webp";
// import CarlsbergWork from "../assets/images/CarlsbergWork.webp";
// import G20 from "../assets/images/g20.webp";
import Alia from "../assets/images/projects/alia bhatt.webp";
import Lakme from "../assets/images/projects/lakme fashion week.webp";
import PhirseMilo from "../assets/images/phirse-milo.webp";
import AngelOne from "../assets/images/projects/angelon.webp";
// import Meta from "../assets/images/new-projects/meta-india.webp";
// import TataMarathon from "../assets/images/projects/tatamaratho.webp";
// import SonuNigam from "../assets/images/new-projects/sonu-nigam-sau-saal-pehle.webp";
// import Kingfisher from "../assets/images/kingfisher-ipl.webp";
// import Heineken from "../assets/images/heineken.webp";
import BrutSauce from "../assets/images/brut-sauce.webp";
// import KapilSharma from "../assets/images/new-projects/kapil-sharma.webp";
// import McD from "../assets/images/new-projects/brut-mcd.webp";
import Gyansrota from "../assets/images/new-projects/gyansrota.webp";
// import BharatTex from "../assets/images/bharat-textile.webp";
import Deesan from "../assets/images/new-projects/deesan-group.webp";
import Filmfare from "../assets/images/new-projects/filmfare-work.webp";
import Rangmorla from "../assets/images/new-projects/rangmorla-work.webp";
import SatrangiRe from "../assets/images/new-projects/satrangi-re-sonu-nigam.webp";
import HumareRam from "../assets/images/new-projects/humare-ram-work.webp";
import AllYouCan from "../assets/images/new-projects/all-you-can.webp";
// import Wagamama from "../assets/images/new-projects/wagamama-work.webp";
// import Tenxu from "../assets/images/new-projects/tenxu.webp";
import RangiloRe from "../assets/images/new-projects/rangilo-re.webp";
import Redbull from "../assets/images/new-projects/redbull-solo-legends.webp";
import RishabhSharma from "../assets/images/SITAR-COVER.webp";
import RollingLoud from "../assets/images/new-projects/rolling-loud.webp";
import WCG from "../assets/images/new-projects/wcg.webp";
import TheMix from "../assets/images/the-mix-by-mumbai-indians.png";
import LettersToLataDidi from "../assets/images/letters-to-lata-didi.png";
import HoneySingh from "../assets/images/honey-singh.png";

const projects = [
  {
    name: "Filmfare Awards 2025",
    image: Filmfare,
    category: "live",
    link: "https://www.instagram.com/reels/DUx0I6ADKUm/",
    
  },
  {
    name: "Satrangi Re - Sonu Nigam India Tour",
    image: SatrangiRe,
    category: "live",
    link: "https://www.instagram.com/reels/DQ4wygNiEht/",
    links: [
      {
        label: "India Tour by Sonu Nigam",
        url: "https://www.instagram.com/reels/DWauPANE-sG/",
      },
      {
        label: "Satrangi Re Mumbai",
        url: "https://www.instagram.com/reels/DQ3VHAQiBSd/",
      },
      {
        label: "Satrangi Re Pune",
        url: "https://www.instagram.com/reels/DTX7I_ZDDTq/",
      },
      {
        label: "Satrangi Re Hyderabad",
        url: "https://www.instagram.com/reels/DRr7JOUDH4H/",
      },
      {
        label: "Satrangi Re Ahemdabad",
        url: "https://www.instagram.com/reels/DSoyemZjP8M/",
      },
      {
        label: "Satrangi Re Delhi",
        url: "https://www.instagram.com/reels/DWditIgEysV/",
      },
    ],
  },
  {
    name: "Diluminati India Tour",
    image: Diljit,
    category: "live",
    link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
    links: [
      {
        label: "Diluminati",
        url: "https://www.instagram.com/reels/DDzBraXI9mz/",
      },
      {
        label: "Diluminati",
        url: "https://drive.google.com/file/d/1ci55dvwXfl9OyjkA0EOH-5xyxyymRBtU/view",
      },
    ]
  },
  {
    name: "Lollapalooza",
    image: Lollapaooza,
    category: "live",
    link: "https://www.instagram.com/reels/DIBX04aMjO-/",
    links: [
      {
        label: "Lolla- Glass Animals",
        url: "https://www.instagram.com/reels/DLC90s-oonA/",
      },
      {
        label: "Lolla- Lisa Mishra",
        url: "https://www.instagram.com/reels/DKKL_QHMtMR/",
      },
      {
        label: "Lolla- Dhanji",
        url: "https://www.instagram.com/reels/DJWj6d3M3cM/",
      },
      {
        label: "Lolla- Jonita Gandhi",
        url: "https://www.instagram.com/reels/DKuTtqWsBzG/",
      },
      {
        label: "Lolla- Teaser",
        url: "https://www.instagram.com/reels/DIBX04aMjO-/",
      },
    ]
  },
  {
    name: "The Mix by Mumbai Indians",
    image: TheMix,
    category: "live",
    link: "https://www.instagram.com/reels/DW8HkoQDAzZ/",
    links: [
      {
        label: "The Mix by Mumbai Indians",
        url: "https://www.instagram.com/reels/DW8HkoQDAzZ/",
      },
      {
        label: "The Mix Reel 1",
        url: "https://www.instagram.com/reels/DWOTzi0DHky/",
      },
      {
        label: "The Mix Reel 2",
        url: "https://www.instagram.com/reels/DWLU26iDJZu/",
      },
      {
        label: "The Mix Reel 3",
        url: "https://www.instagram.com/reels/DWLHP24jOIp/",
      },
    ]
  },
  {
    name: "Letter to Lata Didi by Shreya Ghoshal",
    image: LettersToLataDidi,
    category: "live",
    link: "https://www.instagram.com/reels/DWJfNALjEn_/",
    links: [
      {
        label: "Letters to Lata Didi by Shreya Ghoshal",
        url: "https://www.instagram.com/reels/DWJfNALjEn_/",
      },
      {
        label: "Letters to Lata Didi by Shreya Ghoshal",
        url: "https://www.instagram.com/reels/DVoBtBnjJdE/",
      },
      {
        label: "Letters to Lata Didi by Shreya Ghoshal",
        url: "https://www.instagram.com/reels/DVnMRoIjtqf/https://www.instagram.com/reels/DVnMRoIjtqf/",
      },
      {
        label: "Letters to Lata Didi by Shreya Ghoshal",
        url: "https://www.instagram.com/reels/DVyIeArAbIA/",
      },
    ]
  },
  {
    name: "My Story- India Tour by Honey Singh",
    image: HoneySingh,
    category: "live",
    link: "",
    links: [
      {
        label: "India Tour by Honey Singh - Delhi",
        url: "https://www.instagram.com/reels/DWD3Om5NphW/",
      },
      {
        label: "India Tour by Honey Singh - Mumbai",
        url: "https://www.instagram.com/p/DWeLd2gCNgG/?igsh=MXU4bWRjc3YyeWwzbg%3D%3D",
      },
    ]
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
    link: "",
    links: [
      {
        label: "Humare Ram London Show trailer",
        url: "https://www.instagram.com/p/DViuqDlDHGV/",
      },
      {
        label: "Humare Ram Mumbai Show trailer ",
        url: "https://www.instagram.com/reels/DGS4wokt0AP/",
      },
      {
        label: "Humare Ram Mumbai Show Assets",
        url: "https://www.instagram.com/reels/DGiFcGuTEa1/",
      },
      {
        label: "Humare Ram Dubai Documentary",
        url: "https://www.instagram.com/reels/DQO00dOgflh/",
      },
    ]
  },
  {
    name: "Rangilo Re ft Parthiv Gohil",
    image: RangiloRe,
    category: "live",
    link: "https://www.instagram.com/reel/DPHtt8EDQBY/?igsh=dm51MnFsbWJtNnA=",
  },
  {
    name: "All You Can Street 2025",
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
    link: "",
    links: [
      {
        label: "We the Women 2024-2026- Huma Qureshi",
        url: "https://www.instagram.com/p/DVYPlwkCn1_/?img_index=1",
      },
      {
        label: "We the Women 2024-2026- Jahanvi Kapoor",
        url: "https://www.instagram.com/reels/DRzQNM-CqZe/",
      },
      {
        label: "We the Women 2024-2026- Saniya Malhotra",
        url: "https://www.instagram.com/p/DVYXocgCrcZ/?img_index=1",
      },
      {
        label: "We the Women 2024-2026-Ayesha Khan",
        url: "https://www.instagram.com/p/DVYteR_CqS9/?img_index=1",
      },
      {
        label: "We the Women 2024-2026-Bhumi Pednekar",
        url: "https://www.instagram.com/p/DVYpP-OCqMW/?img_index=1",
      },
    ]
  },
  {
    name: "Comic Con 2025 for Google India",
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
    link: "https://www.instagram.com/moronmedialive/reel/DIeGqyfijUu/",
  },
  {
    name: "WCG 2025",
    image: WCG,
    category: "live",
    link: "https://www.youtube.com/watch?v=TmtBTlk-0pg",
  },
  {
    name: "Upthrust Diwali Battle 2023",
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
  },
];

function Work() {
  // const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState("film");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <>
      <div className="min-h-screen w-full bg-black">
        <h1 className="font-manrope font-bold text-white text-center text-xl md:text-5xl pt-28 pb-10 px-4 sm:px-8 md:px-40">
          Our Recent Work
        </h1>

        <div className="flex justify-center gap-3 mb-10 px-4 sm:px-0">
          {["film", "live"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border transition-all font-helvetica ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {/* {tab === "all" && "All Work"} */}
              {tab === "film" && "Film Division"}
              {tab === "live" && "Live Division"}
            </button>
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-5 sm:gap-8 lg:gap-10 px-5 lg:px-28 pb-56">
          {filteredProjects.map((item, i) => (
            <WorkCard
              key={i}
              name={item.name}
              image={item.image}
              link={item.link}
              links={item.links}
              onClick={() => item.link && window.open(item.link, "_blank")}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
