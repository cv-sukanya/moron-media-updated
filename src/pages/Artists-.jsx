import React from "react";
import BarkhaDutt from "../assets/images/artistsPage/BarkhaDutt.webp";
import Diljit from "../assets/images/artistsPage/DiljitDosanjh.webp";
import IqlipseNova from "../assets/images/artistsPage/IqlipseNova.webp";
import JasmineSandlas from "../assets/images/artistsPage/JasmineSandlas.webp";
import KareenaKapoorKhan from "../assets/images/artistsPage/KareenaKapoorKhan.webp";
import Papon from "../assets/images/artistsPage/Papon.webp";
import PoojaHegde from "../assets/images/artistsPage/PoojaHegde.webp";
import PrakritiKakkar from "../assets/images/artistsPage/PrakritiKakkar.webp";
import SanamTheBand from "../assets/images/artistsPage/SanamTheBand.webp";
import SaraAliKhan from "../assets/images/artistsPage/SaraAliKhan.webp";
import Shaan from "../assets/images/artistsPage/Shaan.webp";
import SonuNigam from "../assets/images/artistsPage/SonuNigam.webp";
import UrfiJaved from "../assets/images/artistsPage/UrfiJaved.webp";
import VirajGhelani from "../assets/images/artistsPage/VirajGhelani.webp";
import ZeenatAman from "../assets/images/artistsPage/ZeenatAman.webp";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  return (
    <>
    
      <div className="w-full min-h-screen bg-black">
        <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-28 pb-56">
          <ArtistCard image={Diljit} name="Diljit Dosanjh" />
          <ArtistCard image={SonuNigam} name="Sonu Nigam" />
          <ArtistCard image={KareenaKapoorKhan} name="Kareena Kapoor Khan" />
          <ArtistCard image={SanamTheBand} name="Sanam The Band" />
          <ArtistCard image={Shaan} name="Shaan" />
          <ArtistCard image={JasmineSandlas} name="Jasmine Sandlas" />
          <ArtistCard image={Papon} name="Papon" />
          <ArtistCard image={IqlipseNova} name="Iqlipse Nova" />
          <ArtistCard image={PrakritiKakkar} name="Prakriti Kakkar" />
          <ArtistCard image={SaraAliKhan} name="Sara Ali Khan" />
          <ArtistCard image={UrfiJaved} name="Uorfi Javed" />
          <ArtistCard image={BarkhaDutt} name="Barkha Dutt" />
          <ArtistCard image={PoojaHegde} name="Pooja Hegde" />
          <ArtistCard image={VirajGhelani} name="Viraj Ghelani" />
          <ArtistCard image={ZeenatAman} name="Zeenat Aman" />
        </div>
      </div>
    </>
  );
}

export default Artists;
