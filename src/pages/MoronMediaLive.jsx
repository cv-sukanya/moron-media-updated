import React from "react";
import WorkCard from "../components/WorkCard";
import { label } from "three/tsl";

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
    name: "Ace Tech",
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
      },
      {
        label: "ACETECH Delhi 2024",
        url: "https://youtu.be/Ux2fNFdv5fI?si=nrRpdcJk7QSQbmrZ"
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
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793180256/lakme-fashion_pxrn3l.webp",
    category: "live",
    link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
  },
  {
    name: "We The Women",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793179989/we_the_women_2024-26_sxi3a7.webp",
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
    name: "JIOBLAST X GAMINGCON",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794555541/jio_bwrdqu.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DSX4CLIjMi1/",
  },
  {
    name: "INDIAN SUPER GAMING LEAGUE 2026",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794555542/super_gaming_mexrhx.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DV8nhtOiXAE/",
  },
  
  {
    name: "Upthrust Diwali Battle 2023",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794555540/Upthrust_hddto5.webp",
    category: "live",
    link: "https://www.instagram.com/reels/C2zQ3bGIi8y/",
  },

  {
    name: "COLLEGE RIVALS 2026",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794555542/College_rivals_ps5xej.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DWgbCCFEkQu/",
  },
  {
    name: "India Design Mumbai 2026",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794566749/Asian_Paints_India_Design_Mumbai_Billboard_cds1kx.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "India Design Mumbai 2026",
        url: "https://www.instagram.com/reels/DePidMCoGWk/"
      },
      {
        label: "Day 2 - India Design Mumbai 2026",
        url: "https://www.instagram.com/reels/DeUzh9wT-6d/"
      }
    ]
  },
  // {
  //   name: "Assam G20",
  //   image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793175725/ASSAM_G20_ugyj3a.webp",
  //   category: "live",
  //   link: "",
  // },

  {
    name: "Yes Bank",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793175939/YES_BANK_njnx7k.webp",
    category: "live",
    link: "https://drive.google.com/file/d/15CesDaU1fqWvxXiGQp6MeFm_WT6kqEIM/view"
  },
  {
    name: "Bharat Textile",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793175770/bharat-textile_hqxqvz.webp",
    category: "live",
    link: "https://drive.google.com/file/d/1MXN3VyymFEu3TyO38UOjnRdFMMsHzJZW/view"
  },
  {
    name: "AI SUMMIT 2026 BRUT INDIA",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793175725/ai-summit-2026_atwhfx.webp",
    category: "live",
    link: "",
    links: [
      {
        label: "Inside India AI Impact Summit 2026",
        url: "https://www.instagram.com/reels/DVA-EsYksTA/"
      },
      {
        label: "Summit 2026 with Adobe",
        url: "https://www.instagram.com/reels/DVLeZTQE3cn/"
      }
    ]
  },
  {
    name: "Heineken x UCL",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793180662/heineken-ucl_igpiyi.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DbTS-eRMOsE/"
  },
  {
    name: "Fink India",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793181122/fink-india_swvpp6.webp",
    category: "live",
    link: "https://www.instagram.com/p/DKJ7h1lsDBp/?igsh=amRsNzR0c2lzOGh4"
  },
  {
    name: "Jasmine Sandlas - ABU DHABI SHOW",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793181123/JASMINE_SANDLAS_-_ABU_DHABI_SHOW_x4venk.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DENHzCUyjZr/"
  },
  {
    name: "tiago.ev - Tata Marathon 2023",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793182479/tcs-marathon_yqkbuy.webp",
    category: "live",
    link: "https://www.instagram.com/reels/CtHMTqTAJU9/"
  },
  {
    name: "Samsung Galaxy Launch 2024",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793182478/samsung_galaxy_launch_qn3rsk.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DMfmphuo9cT/"
  },
  {
    name: "Myntra x Maejoy",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793182466/myntra_x_maejoy_jrk3dh.webp",
    category: "live",
    link: "https://www.instagram.com/reels/DWEF4k4iUBv/"
  },
  {
    name: "Ten XU - Launch",
    image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793182442/ten-xu-launch_nydv21.webp",
    category: "live",
    link: "https://www.instagram.com/p/DQmPrS5DGFb/?igsh=MWRxcTJrMmQ5MWdqbw%3D%3D"
  }

];


function MoronMediaLive() {
  const filteredProjects = projects.filter(
    (project) => project.category === "live"
  );

  return (
    <div className="min-h-screen w-full bg-black">
      <h1 className="font-manrope font-bold text-white text-center text-xl md:text-5xl pt-28 pb-10 px-4 sm:px-8 md:px-40">
        Moron Media Live
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

export default MoronMediaLive;

