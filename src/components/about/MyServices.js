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
        subTitle="At MequryThink. its not just an Ordinary wedding, but a movie. We cover love Story, BTS(behind the scenes), interviews, pre-Wedding Photoshoot and so on"
      />
      <ServicesCard
        icons={<FiCamera />}
        title="Creative Photoshoot"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<MdCameraRoll />}
        title="Documentary"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaBusinessTime />}
        title="Buisness Advert"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyServices;
