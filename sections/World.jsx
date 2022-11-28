"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "../utils/motion";

import { TitleText, TypingText } from "../components";

const World = () => (
  <section className="relative paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col mx-auto"
    >
      <TypingText title="| People on the World" textStyles="text-center" />

      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative flex w-full h-[550px] mt-[68px]"
      >
        <img className="w-full h-full object-cover" src="/map.png" alt="map" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] ">
          <img className="w-full h-full" src="people-01.png" alt="people" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] ">
          <img className="w-full h-full" src="people-02.png" alt="people" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] ">
          <img className="w-full h-full" src="people-03.png" alt="people" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
