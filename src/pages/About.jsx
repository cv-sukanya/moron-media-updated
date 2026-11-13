import React from "react";
import { Helmet } from "react-helmet-async";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>About Moron Media | Film & Live Production Agency</title>

//         <meta
//           name="description"
//           content="Get to know Moron Media, a creative production agency specializing in brand films, TVCs, music videos, concerts, festivals and live experiences."
//         />

//         <meta name="robots" content="index, follow" />

//         <link rel="canonical" href="https://moronmedia.com/about" />

//         {/* Open Graph */}

//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="About Moron Media | Film & Live Production Agency"
//         />
//         <meta
//           property="og:description"
//           content="We are Moron Media, a creative production agency bringing ideas to life through brand films, commercials, music videos, concerts, festivals and unforgettable live experiences."
//         />
//         <meta property="og:url" content="https://moronmedia.com/about-us/" />
//         <meta property="og:site_name" content="Moron Media" />
//         <meta
//           property="og:image"
//           content="https://moronmedia.com/assets/images/about-og-image.jpg"
//         />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta
//           property="og:image:alt"
//           content="About Moron Media – Film and Live Production Agency"
//         />
//         <meta property="og:locale" content="en_IN" />
//       </Helmet>

//       {/* Existing page content */}
//     </>
//   );
// };

// function About() {
//   return (
//     <div className="bg-black text-white px-6 sm:px-14 pt-14 pb-32 border-b-2 border-white w-full">
//       <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-5 mt-20">
//         About Moron Media
//       </h1>

//       <div
//         className="space-y-3 text-sm sm:text-base lg:text-xl leading-relaxed
//                       sm:leading-loose font-helvetica text-justify
//                       [&_p]:font-[200]
//                       [&_p]:text-gray-400
//                       [&_h1]:font-bold
//                       [&_h2]:font-medium
//                       [&_h2]: tracking-wide
//                       [&_h2]: mb-2"
//       >
//         <p>
//           Moron Media is a full-service creative production agency. We create
//           high-quality visual content for brands, artists, and experiences from
//           commercials and branded films to large-scale Live Division.
//         </p>
//         <br />

//         <h1>Over time, our work has grown into two focused verticals:</h1>
//         <h2>Moron Media (Film Division)</h2>
//         <p>
//           This is our core division where we produce TVCs, DVCs, branded films,
//           corporate films, and music videos. We handle everything end-to-end
//           concept, scripting, shoot production, and post-production.
//         </p>
//         <br />
//         <h2>Moron Media Live (Live Division)</h2>
//         <p>
//           Moron Media Live is our Live Division vertical focused on concerts,
//           festivals, award shows, and on-ground experiences. We create
//           high-energy live content designed for digital platforms including
//           aftermovies, show highlights, sponsor deliverables, and social-first
//           reels.
//         </p>
//       </div>

//       {/* Flagship projects */}
//       <h2 className="font-montserrat font-bold text-xl md:text-4xl mb-2 mt-20">
//         Flagship Projects
//       </h2>

//       <h2 className="font-montserrat font-bold font-medium text-sm md:text-xl mb-2 mt-5">
//         Moron Media (Film Division)
//       </h2>
//       <p className="font-montserrat text-gray-400 font-[400] text-sm md:text-xl">
//         Moron Media is a creative production house with a strong focus on brand
//         films, corporate films, campaign videos, CGI-led content, and digital
//         advertising. We have worked with brands like Puma for the official
//         jersey launch of Delhi Capitals; Skybags (creating AI ads for their bags
//         Zynex and Activ); Bonkers Corner (video production for 8+ campaigns);
//         Kognivera Polo Cup (official cup anthem); and music videos with singer
//         Shaan, Iqlipse Nova, and Prakriti Kakkar. We’ve also developed IPs for
//         Brut India and India Today.
//       </p>
//       <br />

//       <h2 className="font-montserrat font-bold font-medium text-sm md:text-xl mb-2 mt-2">
//         Moron Media Live (Live Division)
//       </h2>
//       <p className="font-montserrat text-gray-400 font-[400] text-sm md:text-xl">
//         At Moron Media, a large part of our work involves capturing and creating
//         content for live entertainment formats where scale, speed, and
//         storytelling come together. We’ve delivered projects across properties
//         such as Red Bull, BookMyShow Lollapalooza India, Sa Re Ga Ma India,
//         District Rolling Loud India, Assam G20, Times Group Filmfare 2025,
//         Satrangi Re India Tour by Sonu Nigam, The Mix by Mumbai Indians, Letters
//         To Lata Didi by Shreya Ghoshal, My Story India Tour by Honey Singh,
//         Humare Ram Theatrical Drama for Felicity Theatre and many more.
//       </p>

//       <div className="mt-10 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-loose font-helvetica text-justify">
//         <p>
//           At Moron Media, we don’t just produce content we build moments,
//           memories, and movements. Whether it’s a 30-second reel or a nationwide
//           campaign, we move fast, think big, and create loud.
//         </p>
//       </div>
//     </div>
//   );
// }

function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Moron Media | Film & Live Production Agency</title>

        <meta
          name="description"
          content="Get to know Moron Media, a creative production agency specializing in brand films, TVCs, music videos, concerts, festivals and live experiences."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://moronmedia.com/about-us" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="About Moron Media | Film & Live Production Agency"
        />

        <meta
          property="og:description"
          content="We are Moron Media, a creative production agency bringing ideas to life through brand films, commercials, music videos, concerts, festivals and unforgettable live experiences."
        />

        <meta property="og:url" content="https://moronmedia.com/about-us/" />

        <meta property="og:site_name" content="Moron Media" />

        <meta
          property="og:image"
          content="https://moronmedia.com/assets/images/about-og-image.jpg"
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content="About Moron Media – Film and Live Production Agency"
        />

        <meta property="og:locale" content="en_IN" />
      </Helmet>

      {/* Your Existing About Page Content */}
      <div className="bg-black text-white px-6 sm:px-14 pt-14 pb-32 border-b-2 border-white w-full">
        <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-5 mt-20">
          About Moron Media
        </h1>

        {/* <div className="bg-black text-white px-6 sm:px-14 pt-14 pb-32 border-b-2 border-white w-full">
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-5 mt-20">
            About Moron Media
          </h1> */}

          <div
            className="space-y-3 text-sm sm:text-base lg:text-xl leading-relaxed 
                      sm:leading-loose font-helvetica text-justify 
                      [&_p]:font-[200]
                      [&_p]:text-gray-400
                      [&_h1]:font-bold 
                      [&_h2]:font-medium
                      [&_h2]: tracking-wide
                      [&_h2]: mb-2"
          >
            <p>
              Moron Media is a full-service creative production agency. We
              create high-quality visual content for brands, artists, and
              experiences from commercials and branded films to large-scale Live
              Division.
            </p>
            <br />

            <h1>Over time, our work has grown into two focused verticals:</h1>
            <h2>Moron Media (Film Division)</h2>
            <p>
              This is our core division where we produce TVCs, DVCs, branded
              films, corporate films, and music videos. We handle everything
              end-to-end concept, scripting, shoot production, and
              post-production.
            </p>
            <br />
            <h2>Moron Media Live (Live Division)</h2>
            <p>
              Moron Media Live is our Live Division vertical focused on
              concerts, festivals, award shows, and on-ground experiences. We
              create high-energy live content designed for digital platforms
              including aftermovies, show highlights, sponsor deliverables, and
              social-first reels.
            </p>
          </div>

          {/* Flagship projects */}
          <h2 className="font-montserrat font-bold text-xl md:text-4xl mb-2 mt-20">
            Flagship Projects
          </h2>

          <h2 className="font-montserrat font-bold font-medium text-sm md:text-xl mb-2 mt-5">
            Moron Media (Film Division)
          </h2>
          <p className="font-montserrat text-gray-400 font-[400] text-sm md:text-xl">
            Moron Media is a creative production house with a strong focus on
            brand films, corporate films, campaign videos, CGI-led content, and
            digital advertising. We have worked with brands like Puma for the
            official jersey launch of Delhi Capitals; Skybags (creating AI ads
            for their bags Zynex and Activ); Bonkers Corner (video production
            for 8+ campaigns); Kognivera Polo Cup (official cup anthem); and
            music videos with singer Shaan, Iqlipse Nova, and Prakriti Kakkar.
            We’ve also developed IPs for Brut India and India Today.
          </p>
          <br />

          <h2 className="font-montserrat font-bold font-medium text-sm md:text-xl mb-2 mt-2">
            Moron Media Live (Live Division)
          </h2>
          <p className="font-montserrat text-gray-400 font-[400] text-sm md:text-xl">
            At Moron Media, a large part of our work involves capturing and
            creating content for live entertainment formats where scale, speed,
            and storytelling come together. We’ve delivered projects across
            properties such as Red Bull, BookMyShow Lollapalooza India, Sa Re Ga
            Ma India, District Rolling Loud India, Assam G20, Times Group
            Filmfare 2025, Satrangi Re India Tour by Sonu Nigam, The Mix by
            Mumbai Indians, Letters To Lata Didi by Shreya Ghoshal, My Story
            India Tour by Honey Singh, Humare Ram Theatrical Drama for Felicity
            Theatre and many more.
          </p>

          <div className="mt-10 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-loose font-helvetica text-justify">
            <p>
              At Moron Media, we don’t just produce content we build moments,
              memories, and movements. Whether it’s a 30-second reel or a
              nationwide campaign, we move fast, think big, and create loud.
            </p>
          </div>
        </div>
      
    </>
  );
}

export default About;
