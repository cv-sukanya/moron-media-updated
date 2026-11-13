import React from "react";
// import { useNavigate } from "react-router-dom";
import WorkCard from "../components/WorkCard";

const projects = [

  // MORON MEDIA (FILM Division)
  {
    name: "Puma x Delhi Capitals",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/puma-delhi-capitals_z1ic3v.webp",
    category: "film",
    link: "",
    links: [
      {
        label: "Puma x Delhi Capitals I",
        url: "https://drive.google.com/drive/folders/1KsHw61AQIHDBcC5ZWq_-7Dp031_5rEiN",
      },
      {
        label: "Puma x Delhi Capitals II",
        url: "https://www.instagram.com/p/DXRou4WD5Y9/",
      },
      {
        label: "Puma x Delhi Capitals III",
        url: "https://www.instagram.com/p/DW3E7F9D2_w/",
      }
      
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
    name: "Bonkers Corner - Summer Collection",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793190848/bonkers-summer-collection_t81eu8.webp",
    category: "film",
    links: [
      {
        label: "Summer Collection I",
        url: "https://www.instagram.com/reels/DXydiQnxeHD/"
      },
      {
        label: "Summer Collection II",
        url: "https://www.instagram.com/reels/DYWWn9LtFIA/"
      },
      {
        label: "Dance Collection",
        url: "https://www.instagram.com/reels/DaUfn7WouH-/"
      },
      {
        label: "Red Bull Campaign",
        url: "https://drive.google.com/drive/folders/1zGfc-_hlIJ9ZrWhrq5G-jg9mQlFwHujn"
      },
      {
        label: "Stadium Anthem Campaign",
        url: "https://drive.google.com/drive/folders/1zGfc-_hlIJ9ZrWhrq5G-jg9mQlFwHujn"
      }
    ]

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
  // {
  //   name: "Wagamama - Worli",
  //   image: ""
  // },

  {
    name: "ROHIT SHETTY - SUPER COP CAMPAIGN",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793191709/Rohit-Shetty_lsp0wb.webp",
    category: "film",
    link: "https://www.instagram.com/p/DbbJck1CHdb/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA%3D%3D"
  },

  {
    name: "Lashika",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100170/lashika_ywpznc.webp",
    category: "film",
    link:"",
    links: [
      {
        label: "Lashika Sindoor",
        url: "https://drive.google.com/file/d/1vQnwkbonR3-w9HBABDnJ2MJebqhyP1L7/view",
      },
      {
        label: "Lashika Vitamin C Serum",
        url: "https://drive.google.com/file/d/1gqXc-o5FUAfYTAu67Bho28JKuMePLdnj/view",
      },
      {
        label: "Lashika Face Cream",
        url: "https://drive.google.com/file/d/1q1_WtVmLL53uV63K9ufoHlFOdJiJj-NN/view",
      },
      {
        label: "Lashika - Peel Off Cleanser",
        url: "https://drive.google.com/file/d/1zupff8boABBtJzIP6rqQMuVJURR41_pi/view",
      },
      {
        label: "Lashika - Hair Spa",
        url: "https://drive.google.com/file/d/16AtxbUZRyU7yYBA3oFCMp4uUkgpeQBLW/view"
      },
      {
        label: "Lashika - Face Wash",
        url: "https://drive.google.com/file/d/1ZL-36KG5fGVeKjPPIcBRU89Lqeac351s/view"
      }
    ]
  },
  {
    name: "BASF x Mortal",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793190846/BASF_x_Mortal_j19qtt.webp",
    category: "film",
    link: ""
  },
  {
    name: "Red Bull Solo Legends Trailer",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100172/red-bull-solo-legends-trailer_cf0aok.webp",
    category: "film",
    link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
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
    name: "Pixie Pie",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793192378/pixie-pie_cpibau.webp",
    category: "film",
    links: [
      {
        label: "Pixie Pie - I",
        url: "https://www.instagram.com/reels/DdoYOCXMEcs/"
      },
      {
        label: "Pixie Pie - II",
        url: "https://www.instagram.com/reels/Dcv2S_WM-pc/"
      }
    ]
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100172/red-bull-solo-legends-trailer_cf0aok.webp",
    name: "RED BULL SOLO LEGENDS 2024-TRAILER",
    link: "https://www.youtube.com/watch?v=kVqFx0sMAro",
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
      {
        label: "INDIA TODAY: SKY INTERVIEW",
        url: "https://www.youtube.com/watch?v=LnLJ1V0nREA",
      }
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

function MoronMediaFilm() {
  const filteredProjects = projects.filter(
    (project) => project.category === "film"
  );

  return (
    <div className="min-h-screen w-full bg-black">
      <h1 className="font-manrope font-bold text-white text-center text-xl md:text-5xl pt-28 pb-10 px-4 sm:px-8 md:px-40">
        Moron Media Film
      </h1>

      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-5 sm:gap-8 lg:gap-10 px-5 lg:px-28 pb-56">
        {filteredProjects.map((item, i) => (
          <WorkCard
            key={`${item.name}-${i}`}
            name={item.name}
            image={item.image}
            link={item.link}
            links={item.links}
            onClick={() => {
              if (item.link) {
                window.open(
                  item.link,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MoronMediaFilm;