import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5 " id="contact">
      <div className="flex flex-col items-center  ">
        <h1 className="heading lg:max-w-[45vw]">
          To prevent a {" "}<span className="text-purple">conflict</span> with the First and Second Laws of Robotics.
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.<br />
          2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.<br />
          3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.
        </p>
        <a href="mailto:darth_vader@hotmail.com">
          <MagicButton
            title="May the force be with you"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5 ">
        <p className="md:text-base text-sm md:font-normal font-light">
          CopyRight &copy; 2025 Sam Volta
        </p>
        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
