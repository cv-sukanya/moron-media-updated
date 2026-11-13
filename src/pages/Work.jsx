import React from "react";
import { useNavigate } from "react-router-dom";
import WorkCard from "../components/WorkCard";

const projects = [
  {
    name: "Filmfare Awards 2025",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/filmfare-awards-2025_dtyip5.webp",
    category: "live",
    // link: "https://www.instagram.com/reels/DUx0I6ADKUm/",
    links: [
      {
        label: "Filmfare Awards 2025 - I",
        url: "https://www.instagram.com/reels/DUx0I6ADKUm/",
      },
      {
        label: "Filmfare Awards 2025 - II",
        url: "https://www.instagram.com/reels/DPtli03DYnQ/",
      },
      {
        label: "Filmfare Awards 2025 - III",
        url: "https://www.instagram.com/reels/DPtP0tYjI1r/",
      }
    ]
    
  },
  {
    name: "Satrangi Re - Sonu Nigam India Tour",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/satrangi-re-sonu-nigam_jlv8eq.webp",
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
    name: "Diluminati Tour 2024",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/diluminati-india-tour_juxrck.webp",
    category: "live",
    link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
    links: [
      {
        label: "Documentary",
        url: "https://www.instagram.com/reels/DPtP0tYjI1r/"
      },
      {
        label: "Delhi Live Show",
        url: "https://www.instagram.com/reels/DCjqSEszJbL/",
      },
      {
        label: "Indore Live Show",
        url: "https://www.instagram.com/reels/DDzBraXI9mz/",
      },
    ]
  },
  {
    name: "Lollapalooza",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/lollapalooza_bzndlo.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DIBX04aMjO-/",
    links: [
      {
        label: "Lolla- Teaser",
        url: "https://www.instagram.com/reels/DIBX04aMjO-/",
      },
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
    ]
  },
  {
    name: "The Mix by Mumbai Indians",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100143/the-mix-mumbai-indians_dihfcp.webp",
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
        url: "https://www.instagram.com/reels/DWOTzi0DHky/",
      },
    ]
  },
  {
    name: "Letter to Lata Didi by Shreya Ghoshal",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/letter-to-lata-didi-shreya-ghoshal_lzdmce.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "Aftermovie - Letters to Lata Didi by Shreya Ghoshal",
        url: "https://www.instagram.com/reels/DWJfNALjEn_/",
      },
      {
        label: "Letters to Lata Didi - I",
        url: "https://www.instagram.com/reels/DVoBtBnjJdE/",
      },
      {
        label: "Letters to Lata Didi - II",
        url: "https://www.instagram.com/reels/DVnMRoIjtqf/",
      },
      {
        label: "Letters to Lata Didi - III",
        url: "https://www.instagram.com/reels/DVyIeArAbIA/",
      },
    ]
  },
  {
    name: "India Rising Road To EWC",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793104691/India_Rising_road_to_EWC_q0pebw.webp",
    category: "live",
    link:"https://www.instagram.com/reels/DbDUoefSqXk/"
  },
  {
    name: "My Story- India Tour by Honey Singh",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/my-story-honey-singh-india-tour_xszs2q.webp",
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
    name: "Shaam-e-Mehfil India Tour by Papon",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100143/shaan-e-mehfil_ot0uk4.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DZ2g4odN_eA/",
  },
  {
    name: "Papa Yaar by Zakir Khan",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100170/papa-yaar-zakir-khan_hzdycq.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DZ2vpDmA_Mp/",
  },
  {
    name: "Rangmorla 2025 & 2026 FT. ADITYA GADHVI",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/rang-morla-aditya-gadhvi_l8zzdj.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DQghrNOjJ_-/",
  },
  {
    name: "Humare Ram",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/humare-ram_ikinic.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "Humare Ram London Show Trailer",
        url: "https://www.instagram.com/p/DViuqDlDHGV/",
      },
      {
        label: "Humare Ram Mumbai Show Trailer",
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
    name: "Rangilore, PARTHIV GOYAL",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/Rangilo_Re_ft_Parthiv_Gohil_rgjlhi.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DPHtt8EDQBY/",
  },
  {
    name: "Booyah Premier League",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793106145/booyah-premier-league_yrdlxw.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "Aftermovie",
        url: "https://drive.google.com/file/d/1LxOfm7QGkilo808FnGvrgjhfiBrKBKLu/view"
      },
      {
        label: "DAY 1 HIGHLIGHTS",
        url: "https://www.instagram.com/p/DUNWdssk_Mi/"
      },
      {
        label: "DAY 2 HIGHLIGHTS",
        url: "https://www.instagram.com/p/DUXl46ajWcr/"
      }
    ],
  },
  {
    name: "Ace",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793106165/ace_iqwpir.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "Ace Street",
        url: "https://www.instagram.com/reels/DeUls59onVe/"
      },
      {
        label: "ACETECH Hyderabad 2025",
        url: "https://www.youtube.com/watch?v=NRhvjKXs5jg"
      }
    ],
  },
  {
    name: "Redbull Solo Legends Aftermovie",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100172/red-bull-solo-legends-trailer_cf0aok.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DSrduSrDx6r/"
  },
  {
    name: "All You Can Street 2025",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100159/All_You_Can_Street_2025_nteehi.webp",
    category: "live",
    link: "https://drive.google.com/drive/folders/1SuEjjfhd6NXSqKKfQhcYwsi5moAibdpm",
  },
  {
    name: "Red Lorry Film Festival",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/Red_Lorry_Film_Festival_zlsvhl.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DIN1hjkyP5G/",
  },
  {
    name: "Lakme Fashion Week",
    image: "",
    category: "live",
    link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
  },
  {
    name: "We The Women",
    image: "",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100171/Comic_Con_2025_for_Google_India_pmatiw.webp",
    category: "live",
    link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view",
  },
  {
    name: "Rolling Loud",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100187/Rolling_Loud-sonu_nigam_mpef9i.webp",
    category: "live",
    link: "https://www.instagram.com/p/DSNQdLdjBaj/?igsh=bDVibXc3bGFxcjZs",
  },
  {
    name: "Sitar for Mental Health",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/Sitar_for_Mental_Health_mrpcf9.webp",
    category: "live",
    link: "https://www.instagram.com/moronmedialive/reel/DIeGqyfijUu/",
  },
  {
    name: "WCG 2025",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/WCG-Morta-vs-_Scoutop_bgqdcq.webp",
    category: "live",
    link: "https://www.youtube.com/watch?v=TmtBTlk-0pg",
  },
  {
    name: "Upthrust Diwali Battle 2023",
    image: "",
    category: "live",
    link: "https://www.instagram.com/reels/C2zQ3bGIi8y/",
  },



  // MORON MEDIA (FILM Division)
  {
    name: "Puma x Delhi Capitals",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/puma-delhi-capitals_z1ic3v.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/alia-bhatt-fuji-film_vwne6e.webp",
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    name: "Skybags",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793102377/sky-bags_r0hekv.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100172/red-bull-solo-legends-trailer_cf0aok.webp",
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/bonkers-corner_j1xa3d.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100170/lashika_ywpznc.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100159/angel-one_cdsgbn.webp",
    category: "film",
    link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
  },
  {
    name: "Kognivera Official Anthem Video",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/kognivera_xvkj2m.webp",
    category: "film",
    link: "https://www.instagram.com/reels/DUQiW4aigtN/",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100170/india-today-sky-interview_zfctij.webp",
    name: "India Today: SKY Interview",
    link: "https://www.youtube.com/watch?v=LnLJ1V0nREA",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100160/adobe-summit_jvvp5h.webp",
    name: "Adobe Summit",
    link: "https://www.youtube.com/watch?v=Bv1UyJtquaQ",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/french-embassy_fhmjjc.webp",
    name: "French Embassy",
    link: "https://www.youtube.com/watch?v=A7XG3Iu9cbo",
    category: "film",
  },

  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/pearl-academy_b7tkcg.webp",
    name: "Pearl Academy",
    link: "https://www.youtube.com/watch?v=qJSCuEbnF9U",
    category: "film",
  },

  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/sara-ali-khan-interview_walcel.webp",
    name: "Sara Ali Khan Interview",
    link: "https://www.youtube.com/watch?v=0AFNhKNR__U",
    category: "film",
  },
  

  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100143/tum-ho-toh_zx1qb3.webp",
    name: "Tum Ho Toh Music Video",
    link: "https://www.youtube.com/watch?v=Q4LRnTyWXRw",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793102807/phirse-milo_d6bxhr.webp",
    name: "Phir Se Milo Music Video",
    link: "https://www.youtube.com/watch?v=UH3k66tGqSE",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/WCG-Morta-vs-_Scoutop_bgqdcq.webp",
    name: "WCG Mortal vs Scoutop",
    link: "https://www.youtube.com/watch?v=nZc8skcHLJ4",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100160/brut_pmhvek.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/deesan-group_aapn1l.webp",
    name: "Deesan Group Corporate Film",
    link: "https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D",
    category: "film",
  },
  {
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100169/gyansrota_vdlitl.webp",
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/savera-music-video_qf8prx.webp",
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
