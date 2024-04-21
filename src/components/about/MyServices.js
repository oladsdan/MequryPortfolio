import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { MdCameraRoll } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BsCameraReels />}
        title="Wedding Event"
        subTitle="At MequryThink. its not just an Ordinary wedding, but a movie. We cover love Story, Make-up Scenes, interviews, pre-Wedding Photoshoot and so on"
      />
      <ServicesCard
        icons={<FiCamera />}
        title="Creative Photoshoot"
        subTitle="Its not just a Photoshoot, its an art. we go beyound the ordinary bringing to you a unique masterpiece, with attention to details"
      />
      <ServicesCard
        icons={<MdCameraRoll />}
        title="Documentary"
        subTitle="At MequryThink Studios we also create documentary of any type and kind, we are good at what we do, give us a trial"
      />
      <ServicesCard
        icons={<FaBusinessTime />}
        title="Buisness Advert"
        subTitle="Professional Buisness Advert are done here, we bring the ideas inform of directing, producing and also budgeting for client satisfaction "
      />
    </div>
  );
};

export default MyServices;
