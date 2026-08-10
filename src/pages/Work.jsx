import React from "react";
// import { useNavigate } from "react-router-dom";
// import AMD from "../assets/images/AMD.webp";
import Diljit from "../assets/images/work/diluminati-india-tour.jpg";
// import DiljitDoc from "../assets/images/DiljitDoc.webp";
// import Ace from "../assets/images/Ace.webp";
import AnanyaPandey from "../assets/images/reel covers/AnanyaPandey.webp";
import RedLorry from "../assets/images/work/red-lorry.jpg";
// import SaraAliKhan from "../assets/images/artistsPage/SaraAliKhan.webp";
import Lollapaooza from "../assets/images/work/lollapalooza.jpg";
// import FINK from "../assets/images/reel covers/FINK.webp";
// import Bhisma from "../assets/images/reel covers/Bhisma.webp";
// import BhismaPooja from "../assets/images/reel covers/BhismaPooja.webp";
// import BookmyshowLive from "../assets/images/reel covers/BookmyshowLive.webp";
import ComicCon from "../assets/images/work/comic-con.jpg";
// import Gigabyte from "../assets/images/reel covers/Gigabyte.webp";
// import HyTech1 from "../assets/images/reel covers/HyTech1.webp";
// import HyTech2 from "../assets/images/reel covers/HyTech2.webp";
// import IITBombay from "../assets/images/reel covers/IITBombay.webp";
// import Jasmine from "../assets/images/artistsPage/JasmineSandlas.webp";
// import HouseTour from "../assets/images/reel covers/HouseTour.webp";
// import Ladakh from "../assets/images/reel covers/Ladakh.webp";
// import Lashika from "../assets/images/reel covers/Lashika.webp";
// import McDBrut from "../assets/images/reel covers/McDBrut.webp";
// import Papon from "../assets/images/reel covers/Papon.webp";
// import Sanam from "../assets/images/reel covers/Sanam.webp";
import SaveraMusicVideo from "../assets/images/work/savera.png";
// import Shaan from "../assets/images/reel covers/Shaan.webp";
// import SpotifyCreators from "../assets/images/reel covers/SpotifyCreators.webp";
// import TiagoEV from "../assets/images/reel covers/TiagoEV.webp";
import TumHoToh from "../assets/images/work/tum-ho-toh.jpg";
import Upthrust from "../assets/images/reel covers/Upthrust.webp";
// import Samsung from "../assets/images/SamsungEvent.webp";
// import VirajGhelani from "../assets/images/VirajGhelani.webp";
import WorkCard from "../components/WorkCard";
import BonkersCorner1 from "../assets/images/work/bonkers.jpg";
// import CarlsbergWork from "../assets/images/CarlsbergWork.webp";
// import G20 from "../assets/images/g20.webp";
import Alia from "../assets/images/work/alia-bhatt-fuji-film.png";
import Lakme from "../assets/images/projects/lakme fashion week.webp";
import PhirseMilo from "../assets/images/work/phirse-milo.jpg";
import AngelOne from "../assets/images/work/angel-one.jpg";
// import Meta from "../assets/images/new-projects/meta-india.webp";
// import TataMarathon from "../assets/images/projects/tatamaratho.webp";
// import SonuNigam from "../assets/images/new-projects/sonu-nigam-sau-saal-pehle.webp";
// import Kingfisher from "../assets/images/kingfisher-ipl.webp";
// import Heineken from "../assets/images/heineken.webp";
// import BrutSauce from "../assets/images/brut-sauce.webp";
// import KapilSharma from "../assets/images/new-projects/kapil-sharma.webp";
// import McD from "../assets/images/new-projects/brut-mcd.webp";
import Gyansrota from "../assets/images/work/gyanstrota.png";
// import BharatTex from "../assets/images/bharat-textile.webp";
import Deesan from "../assets/images/work/deesan-group.png";
import Filmfare from "../assets/images/work/filmfare.jpg";
import Rangmorla from "../assets/images/work/rang-morla-aditya-gadhvi.jpg";
import SatrangiRe from "../assets/images/work/satrangi-re.jpg";
import HumareRam from "../assets/images/work/humare-ram.jpg";
import AllYouCan from "../assets/images/work/all-you-can.jpg";
// import Wagamama from "../assets/images/new-projects/wagamama-work.webp";
// import Tenxu from "../assets/images/new-projects/tenxu.webp";
import RangiloRe from "../assets/images/work/rangilo-re-parthiv-gohil.jpg";
import Redbull from "../assets/images/work/redbull-solo.jpg";
import RishabhSharma from "../assets/images/work/sitar-for-mental-health.jpg";
import RollingLoud from "../assets/images/work/rolling-loud.jpg";
import WCG from "../assets/images/new-projects/wcg.webp";
import TheMix from "../assets/images/work/the-mix-mi.jpg";
import LettersToLataDidi from "../assets/images/work/letter-by-lata-di-shreya.jpg";
import HoneySingh from "../assets/images/work/my-story-honey-singh.jpg";
import Puma from "../assets/images/work/puma2.png";
import Skybags from "../assets/images/work/skybags.jpg";
import Lashika from "../assets/images/work/lashika.png";
import Kognivera from "../assets/images/work/korgnivera.png";
import WCGMortal from "../assets/images/work/WCG Mortal vs Scoutop.png";
import Brut from "../assets/images/work/brut-mcd.png";
import IndiaToday from "../assets/images/work/india-today-sky-interview.png";
import AdobeSummit from "../assets/images/work/adobe.jpg";
import FrenchEmbassy from "../assets/images/work/french-embassy.png";
import PearlAcademy from "../assets/images/work/pearl-academy.png";
import SaraAliKhan from "../assets/images/work/sara-ali-khan.png";

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

  // MORON MEDIA (FILM Division)
  {
    name: "Puma x Delhi Capitals",
    image: Puma,
    category: "film",
    link: "",
    links: [
      {
        label: "Puma x Delhi Capitals ",
        url: "https://drive.google.com/drive/folders/1KsHw61AQIHDBcC5ZWq_-7Dp031_5rEiN",
      },
      {
        label: "Puma x Delhi Capitals ",
        url: "https://www.instagram.com/p/DXRou4WD5Y9/",
      },
      {
        label: "Puma x Delhi Capitals ",
        url: "https://www.instagram.com/p/DW3E7F9D2_w/",
      },
      
    ]
  },
  {
    name: "Alia Bhatt x Fuji Film",
    image: Alia,
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    name: "Skybags",
    image: Skybags,
    category: "film",
    link: "",
    links: [
      {
        label: "Skybags- Zynex",
        url: "https://www.instagram.com/p/DVTjlI8iN14/",
      },
      {
        label: "Skybags- Activ",
        url: "https://www.instagram.com/p/DVBAV8_D3H2/",
      }
    ]
  },
  {
    name: "Red Bull Solo Legends Trailer",
    image: Redbull,
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    image: BonkersCorner1,
    name: "Bonkers Corner Fashion Film",
    category: "film",
    link: "",
    links: [
      {
        label: "Bonkers Corner - Spongebob Collection",
        url: "https://www.instagram.com/reels/C24fTZSpfeK/",
      },
      {
        label: "Bonkers Corner - Smiley Collection",
        url: "https://www.instagram.com/p/DCCIHyjT3II/?igsh=c2ZjMHEwZ3B3Nmg3",
      },
      {
        label: "Bonkers Corner - Skyclub Collection",
        url: "https://www.instagram.com/reels/DMh5b5IMKBg/",
      },
      {
        label: "Bonkers Corner - Hello Kitty Collection",
        url: "https://www.instagram.com/p/C97pqwwMuoN/",
      },
      {
        label: "Bonkers Corner - Playboy Collection",
        url: "https://www.instagram.com/p/C97p3pPsrbu/",
      },
    ]
  },
  {
    name: "Lashika",
    image: Lashika,
    category: "film",
    link:"",
    links: [
      {
        label: "Lashika Sindoor",
        url: "https://drive.google.com/file/d/1vQnwkbonR3-w9HBABDnJ2MJebqhyP1L7/view?usp=drive_link",
      },
      {
        label: "Lashika Hair Spa",
        url: "https://drive.google.com/file/d/16AtxbUZRyU7yYBA3oFCMp4uUkgpeQBLW/view?usp=drive_link",
      },
      {
        label: "Lashika Face Cream",
        url: "https://drive.google.com/file/d/1q1_WtVmLL53uV63K9ufoHlFOdJiJj-NN/view?usp=drive_link",
      },
      {
        label: "Lashika FaceWash",
        url: "https://drive.google.com/file/d/1ZL-36KG5fGVeKjPPIcBRU89Lqeac351s/view?usp=drive_link",
      },
      {
        label: "Lashika Cleanser",
        url: "https://drive.google.com/file/d/1zupff8boABBtJzIP6rqQMuVJURR41_pi/view?usp=drive_link",
      },
      {
        label: "Lashika Serum",
        url: "https://drive.google.com/file/d/1gqXc-o5FUAfYTAu67Bho28JKuMePLdnj/view?usp=drive_link",
      },
    ]
  },
  {
    name: "Angel One DVC Campaign",
    image: AngelOne,
    category: "film",
    link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
  },
  {
    name: "Kognivera Official Anthem Video",
    image: Kognivera,
    category: "film",
    link: "https://www.instagram.com/reels/DUQiW4aigtN/",
  },
  {
    image: IndiaToday,
    name: "India Today: SKY Interview",
    link: "https://www.youtube.com/watch?v=LnLJ1V0nREA",
    category: "film",
  },
  {
    image: AdobeSummit,
    name: "Adobe Summit",
    link: "https://www.youtube.com/watch?v=Bv1UyJtquaQ",
    category: "film",
  },
  {
    image: FrenchEmbassy,
    name: "French Embassy",
    link: "https://www.youtube.com/watch?v=A7XG3Iu9cbo",
    category: "film",
  },

  {
    image: PearlAcademy,
    name: "Pearl Academy",
    link: "https://www.youtube.com/watch?v=qJSCuEbnF9U",
    category: "film",
  },

  {
    image: SaraAliKhan,
    name: "Sara Ali Khan Interview",
    link: "https://www.youtube.com/watch?v=0AFNhKNR__U",
    category: "film",
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
    image: WCGMortal,
    name: "WCG Mortal vs Scoutop",
    link: "https://www.youtube.com/watch?v=nZc8skcHLJ4",
    category: "film",
  },
  {
    image: Brut,
    name: "Brut",
    link: "",
    category: "film",
    links: [
      {
        label: "Brut: McDonalds",
        url: "https://www.youtube.com/watch?v=OY5vJBVxIOk",
      },
      {
        label: "Brut: Myntra",
        url: "https://www.youtube.com/watch?v=u8OnrcGI-Uo",
      },
      {
        label: "Brut Sauce: Karishma Tanna",
        url: "https://www.youtube.com/watch?v=Kw6iNpNnx7U",
      },
      {
        label: "Brut: Kareena Kapoor",
        url: "https://www.youtube.com/watch?v=KVOyMXdv8_E",
      },
    ]
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

  
  
  // {
  //   image: Lashika,
  //   name: "Lashika",
  //   category: "film",
  //   link: "https://drive.google.com/file/d/1zupff8boABBtJzIP6rqQMuVJURR41_pi/view?usp=drive_link",
  // },
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
