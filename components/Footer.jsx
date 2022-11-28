"use client";

import { motion } from "framer-motion";

import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative paddings py-8"
  >
    <div className="footer-gradient" />
    <div className="innder-width flex flex-col mx-auto gap-8">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <h4 className="font-bold text-[44px] md:text-[64px] text-white">
          Enter the Metaverse
        </h4>

        <button
          className="flex items-center h-fit px-6 py-4 bg-[#25618B] rounded-[32px] gap-[12px]"
          type="button"
        >
          <img
            className="w-[24px] h-[24px] object-contain "
            src="/headset.svg"
            alt="headset"
          />

          <span className="font-normal text-[16px] text-white uppercase">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="h-[2px] bg-white mb-[50px] opacity-10" />

        <div className="flex flex-wrap justify-between items-center gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                src={social.url}
                alt={social.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
