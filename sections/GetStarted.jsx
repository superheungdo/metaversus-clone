"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";

import { StartSteps, TitleText, TypingText } from "../components";

const GetStarted = () => (
  <section className="relative paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col lg:flex-row mx-auto gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-center flex-1"
      >
        <img
          className="w-[90%] h-[90%] object-contain"
          src="/get-started.png"
          alt="get-started"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-center"
      >
        <TypingText title="| How Metaversus Works" />

        <TitleText title={<>Get started with just a few clicks</>} />

        <div className="flex flex-col max-w-[370px] mt-[31px] gap-[24px]">
          {startingFeatures.map((featrue, index) => (
            <StartSteps key={featrue} number={index + 1} text={featrue} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
