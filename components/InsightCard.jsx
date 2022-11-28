"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <img
      className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover"
      src={imgUrl}
      alt="planet-01"
    />

    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col flex-1 max-w-[650px] md:ml-[62px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">
          {title}
        </h4>

        <p className="font-normal text-[14px] lg:text-[20px] text-secondary-white mt-[16px]">
          {subtitle}
        </p>
      </div>

      <div className="hidden lg:flex justify-center items-center w-[100px] h-[100px] rounded-full bg-transparent border border-white">
        <img
          className="w-[40%] h-[40%] object-contain"
          src="arrow.svg"
          alt="arrow"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
