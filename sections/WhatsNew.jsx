"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";

import { NewFeatures, TitleText, TypingText } from "../components";

const WhatsNew = () => (
  <section className="relative paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col lg:flex-row mx-auto gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-center"
      >
        <TypingText title="| What's New?" />

        <TitleText title={<>What's new about Metaversus?</>} />

        <div className="flex flex-wrap justify-between mt-[48px] gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className="flex-center flex-1"
      >
        <img
          className="w-[90%] h-[90%] object-contain"
          src="/whats-new.png"
          alt="whats-new"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
