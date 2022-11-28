"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className="relative paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col lg:flex-row mx-auto gap-6"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="relative flex flex-col justify-end flex-[0.5] lg:max-w-[370px] gradient-05 p-4 sm:p-8 rounded-[32px] border border-[#6A6A6A]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">
            Samantha
          </h4>

          <p className="font-norma text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px] text-white mt-[8px]">
            Founder | Metaversus
          </p>
        </div>

        <p className="font-norma text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px] text-white mt-[24px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-center flex-1"
      >
        <img
          className="w-full h-auto min-h-[210px] lg:h-[610px] rounded-[40px] object-cover"
          src="/planet-09.png"
          alt="planet-09"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute hidden lg:block top-[3%] -left-[10%]"
        >
          <img
            className="w-[155px] h-[155px] object-contain"
            src="/stamp.png"
            alt="stamp"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
