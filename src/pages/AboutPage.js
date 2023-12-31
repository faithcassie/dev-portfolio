import React from "react";
import blossomGoldfish from "../assets/images/light-goldfish-blossom.png";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/motion";

const AboutPage = () => {
  return (
    <div className="relative h-full pt-0 pb-28">
      <div className="w-full h-full flex flex-col md:flex-row">
        <motion.img
          initial="hidden"
          animate="show"
          variants={heroVariants(0.2)}
          src={blossomGoldfish}
          alt="blossom-goldfish"
          className="w-full md:w-[50%] top-0 select-none"
        />
        <div className="w-[90%] h-full md:w-[40%]  pl-10 my-auto">
          <motion.h1
            initial="hidden"
            animate="show"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transformOrigin: "center",
              transition: {
                duration: 0.8,
              },
            }}
            variants={heroVariants(0.3)}
            className="text-5xl md:text-7xl pb-10 w-fit select-none"
          >
            Hello there!
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={heroVariants(0.4)}
          >
            I'm{" "}
            <span className=" text-[var(--primary)] font-semibold">
              Faith Nguyen
            </span>
            , a front-end web developer with a background in graphic design and
            a degree in UI/UX design.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={heroVariants(0.5)}
          >
            During my college years, I discovered the beauty of web development
            which completed my desire to transform ideas into real-world
            products. So, I decided to{" "}
            <span className=" text-[var(--primary)] font-semibold">
              switch my career path
            </span>{" "}
            to become a developer.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={heroVariants(0.6)}
          >
            It brings joy and a sense of fulfillment to me when collaborating
            with others to craft{" "}
            <span className=" text-[var(--primary)] font-semibold">
              beautiful and engaging experiences
            </span>{" "}
            for users.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={heroVariants(0.7)}
          >
            Now, let's embark on this journey of creativity together, where we
            not only create visually stunning experiences but also{" "}
            <span className=" text-[var(--primary)] font-semibold">
              meaningful connections
            </span>{" "}
            with those who interact with our work. This is where my heart finds
            its purpose and my passion finds its expression.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
