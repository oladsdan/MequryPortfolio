import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Noor_Mohammad_resume.pdf";
import { merquryImg, merquryBack } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Photography", "Video Editing", "Drone Pilot", "Film-Making", "Directing", "Content-Creating", "MC"],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-contain rounded-2xl"
          src={merquryBack}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-blue-300 text-4xl font-semibold font-merqury">Mequry</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://www.linkedin.com/in/mequrythink?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="blank">
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaLinkedin />
              </span>
            </a>
           <a href="https://www.facebook.com/mequrythink?mibextid=LQQJ4d" target="blank">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
           </a>
           <a href="https://www.instagram.com/mequrythink?igsh=MWQ4dDdoamV1cGtuNQ%3D%3D&utm_source=qr">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
           </a>
           <a href="www.twitter.com/@imequry">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>

           </a>
           <a href="mailto:makoozee007@gmail.com">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
           </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
