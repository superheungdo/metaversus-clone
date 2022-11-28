"use client";

import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="y-paddings pl-6 sm:pl-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col mx-auto"
    >
      <div className="relative flex-center flex-col z-10">
        <motion.h1 variants={textVariant(1.1)} className="hero-heading">
          Metaverse
        </motion.h1>

        <motion.div variants={textVariant(1.2)} className="flex-center">
          <h1 className="hero-heading">Ma</h1>
          <div className="hero-d-text" />
          <h1 className="hero-heading">Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full -mt-[12px] md:-mt-[20px]"
      >
        <div className="absolute -top-[30px] w-full h-[300px] hero-gradient rounded-tl-[140px]" />
        <img
          className="relative w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px] z-10"
          src="/cover.png"
          alt="cover"
        />

        <a href="#explore">
          <div className="relative flex justify-end w-full -mt-[50px] sm:-mt-[70px] pr-[40px] z-10">
            <img
              className="w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] obejct-contain"
              src="/stamp.png"
              alt="stamp"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
