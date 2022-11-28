"use client";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="relative py-8 x-paddings"
  >
    <div className="absolute w-[50%] inset-0 gradient-01 " />

    <div className="inner-width mx-auto flex justify-between gap-8">
      <img
        className="w-[24px] h-[24px] object-contain"
        src="/search.svg"
        alt="search"
      />

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>

      <img
        className="w-[24px] h-[24px] object-contain"
        src="/menu.svg"
        alt="menu"
      />
    </div>
  </motion.nav>
);

export default Navbar;
