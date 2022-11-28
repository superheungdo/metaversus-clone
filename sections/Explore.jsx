"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore" className="paddings">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner-width flex flex-col mx-auto"
      >
        <TypingText title="| The World" textStyles="text-center" />

        <TitleText
          title={`${(
            <>
              Choose the world you want
              <br className="hidden md:block" /> to explore{" "}
            </>
          )}`}
          textStyles="text-center"
        />

        <div className="flex flex-col lg:flex-row min-h-[70vh] mt-[50px] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
