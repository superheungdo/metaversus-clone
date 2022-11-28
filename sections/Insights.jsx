"use client";

import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";

import { InsightCard, TitleText, TypingText } from "../components";

const Insights = () => (
  <section className="relative paddings z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inner-width flex flex-col mx-auto"
    >
      <TypingText title="| Insight" textStyles="text-center" />

      <TitleText title="Insight about metaverse" textStyles="text-center" />

      <div className="flex flex-col mt-[50px] gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
