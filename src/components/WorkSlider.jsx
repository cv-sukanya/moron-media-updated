import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function WorkSlider() {
  const [activeTab, setActiveTab] = useState("media");
  const swiperRef = useRef(null);

  const moronMedia = [
    {
      // image: AliaBhatt,
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/alia-bhatt-fuji-film_vwne6e.webp",
      title: "Alia Bhatt x Fujifilm",
      link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793190848/bonkers-summer-collection_t81eu8.webp",
      title: "Red Bull Solo Legends Trailer",
      link: "https://youtu.be/1U5KyqDfFJY?si=Vm1T_TvK7irCZcML",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100159/angel-one_cdsgbn.webp",
      title: "Angel One",
      link: "https://www.instagram.com/p/DHX0wDgh-AP/?igsh=d2p0Nm0zYm1jNnV0",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100143/tum-ho-toh_zx1qb3.webp",
      title: "Tum Ho Toh Music Video",
      link: "https://www.youtube.com/watch?v=Q4LRnTyWXRw",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793102807/phirse-milo_d6bxhr.webp",
      title: "Phir Se Milo Music Video",
      link: "https://www.youtube.com/watch?v=UH3k66tGqSE",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/deesan-group_aapn1l.webp",
      title: "Deesan Group Corporate Film",
      link: "https://www.instagram.com/tv/CY_a8UxhQth/?igsh=MXZkaHdnem1wdDdxcA%3D%3D",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100169/gyansrota_vdlitl.webp",
      title: "Gyanstrotra",
      link: "https://www.youtube.com/watch?v=gh0GYDOkD1U",
    },
    
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/savera-music-video_qf8prx.webp",
      title: "Savera Music Video",
      link: "https://www.youtube.com/watch?v=fOJZgFkvl0s&feature=youtu.be",
    },

    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/bonkers-corner_j1xa3d.webp",
      title: "Bonkers Corner Fashion Film",
      link: "https://www.instagram.com/p/DCCIHyjT3II/?igsh=aGdzMWx3cGcwMDJv",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100160/brut_pmhvek.webp",
      title: "Mcdonalds Corporate Film",
      link: "https://www.youtube.com/watch?v=OY5vJBVxIOk",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100170/lashika_ywpznc.webp",
      title: "Lashika",
      link: "https://drive.google.com/file/d/1zupff8boABBtJzIP6rqQMuVJURR41_pi/view?usp=drive_link",
    },
  ];

  const moronMediaLive = [
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/filmfare-awards-2025_dtyip5.webp",
      title: "Filmfare Awards 2025",
      link: "https://www.instagram.com/reels/DPtP0tYjI1r/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100168/diluminati-india-tour_juxrck.webp",
      title: "Diluminati India Tour",
      link: "https://drive.google.com/file/d/1mZYaGIr9GVCNNkX8JDS-ML9SFPfWBHXX/view?usp=drivesdk",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/lollapalooza_bzndlo.webp",
      title: "Lollapalooza",
      link: "https://www.instagram.com/reels/DIBX04aMjO-/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100141/humare-ram_ikinic.webp",
      title: "Humare Ram",
      link: "https://www.instagram.com/reels/DQO00dOgflh/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/rang-morla-aditya-gadhvi_l8zzdj.webp",
      title: "Rang Morla",
      link: "https://www.instagram.com/reels/DQghrNOjJ_-/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/Rangilo_Re_ft_Parthiv_Gohil_rgjlhi.webp",
      title: "Rangilo Re",
      link: "https://www.instagram.com/reels/DPHtt8EDQBY/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/satrangi-re-sonu-nigam_jlv8eq.webp",
      title: "Satrangi Re - Sonu Nigam India Tour",
      link: "https://www.instagram.com/reels/DQ4wygNiEht/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100159/All_You_Can_Street_2025_nteehi.webp",
      title: "All You Can Street",
      link: "https://drive.google.com/drive/folders/1SuEjjfhd6NXSqKKfQhcYwsi5moAibdpm",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100142/Red_Lorry_Film_Festival_zlsvhl.webp",
      title: "Red Lorry Film Festival",
      link: "https://www.instagram.com/reels/DIN1hjkyP5G/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793180256/lakme-fashion_pxrn3l.webp",
      title: "Lakmé Fashion Week",
      link: "https://www.instagram.com/sanjukta_dutta_/reel/DQln4s1iZgr/?hl=en",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793179989/we_the_women_2024-26_sxi3a7.webp",
      title: "We the Women Asia",
      link: "https://www.instagram.com/reels/DRzQNM-CqZe/",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100171/Comic_Con_2025_for_Google_India_pmatiw.webp",
      title: "Mumbai Comic Con",
      link: "https://drive.google.com/file/d/1HgGzobQw9yRv9r6RUjkzlBHdJCFTX7xC/view",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100187/Rolling_Loud-sonu_nigam_mpef9i.webp",
      title: "Rolling Loud",
      link: "https://www.instagram.com/p/DSNQdLdjBaj/?igsh=bDVibXc3bGFxcjZs",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/Sitar_for_Mental_Health_mrpcf9.webp",
      title: "Sitar for Mental Health",
      link: "https://www.instagram.com/moronmedialive/reel/DIeGqyfijUu/",
    },

    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1793100188/WCG-Morta-vs-_Scoutop_bgqdcq.webp",
      title: "WCG 2025",
      link: "https://www.youtube.com/watch?v=TmtBTlk-0pg",
    },
    {
      image: "https://res.cloudinary.com/dgrqhkw0w/image/upload/v1794555540/Upthrust_hddto5.webp",
      title: "Upthrust Diwali Battle",
      link: "https://www.instagram.com/reels/C2zQ3bGIi8y/",
    },
  ];

  const currentData = activeTab === "media" ? moronMedia : moronMediaLive;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.slideToLoop(0, 0);
    }
  }, [activeTab]);

  

  const navigate = useNavigate();

  return (
    <div className="p-8 relative pb-24">
      <div className="flex justify-center mb-8">
        <div className="flex border border-white rounded-full overflow-hidden">
          <div className="flex border border-white rounded-full overflow-hidden">
            <button
              onClick={() => setActiveTab("media")}
              className={`px-8 py-2 text-sm tracking-wide transition-all
      ${
        activeTab === "media"
          ? "bg-white text-black"
          : "text-white border-r border-white/30"
      }`}
            >
              Moron Media
            </button>

            <button
              onClick={() => setActiveTab("live")}
              className={`px-8 py-2 text-sm tracking-wide transition-all
      ${
        activeTab === "live"
          ? "bg-white text-black"
          : "text-white border-r border-white/30"
      }`}
            >
              Moron Media Live
            </button>

            {/* <button
              onClick={() => navigate("/work")}
              className="px-8 py-2 text-sm tracking-wide transition-all text-white"
            >
              Work
            </button> */}
          </div>
        </div>
      </div>

      <Swiper
        key={`${activeTab}-${currentData.length}`}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2800 }}
        loop={true}
        slidesPerView={4.5}
        centeredSlides={true}
        initialSlide={0}
        watchSlidesProgress={true}
        spaceBetween={20}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {currentData.map((work, index) => (
          <SwiperSlide key={index}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              {/* <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-1/6 object-cover"
                />

                <h1 className="text-white font-helvetica text-xl mt-4 text-center">
                  {work.title}
                </h1>
              </div> */}

              
              <div className="flex flex-col rounded-[0.5vw] overflow-hidden transition-transform duration-300 slick-slide-content">
                <div className="w-full aspect-[50/69] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h1 className="text-white font-helvetica text-xl mt-4 text-center">
                  {work.title}
                </h1>
              </div>

            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAV BUTTONS */}
      <div className="flex justify-center gap-12 mt-10">
        <button className="prev-btn border border-white rounded-3xl px-8 py-2 text-white text-3xl hover:bg-white hover:text-black transition-all duration-300">
          &lt;
        </button>
        <button className="next-btn border border-white rounded-3xl px-8 py-2 text-white text-3xl hover:bg-white hover:text-black transition-all duration-300">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default WorkSlider;
