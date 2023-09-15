import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroVariants } from "../utils/motion";

const ContactPage = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, -50, -100, -200, -400]
    //   {
    //   transition: {
    //     duration: 2,
    //     ease: [0.165, 0.84, 0.39, 1],
    //   },
    // }
  );

  return (
    <div className="h-full my-36">
      <div className="mt-22">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants(0.4)}
        >
          <motion.h1
            style={{ x: x1 }}
            className=" text-[6rem] md:text-[11rem] px-1 font-thin whitespace-nowrap "
          >
            Send me a message!
          </motion.h1>
        </motion.div>

        <div className="w-full h-[500px] flex flex-col py-36">
          <form>
            <div className="w-[80%] md:w-[50%] h-full mx-auto flex flex-col">
              <motion.div
                initial="hidden"
                animate="show"
                variants={heroVariants(0.5)}
                className="flex flex-col md:flex-row justify-between w-full "
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full md:w-[300px] mr-5 p-2 bg-slate-50 focus:outline-none"
                />

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full p-2 bg-slate-50 focus:outline-none"
                />
              </motion.div>

              <motion.textarea
                initial="hidden"
                animate="show"
                variants={heroVariants(0.6)}
                type="text"
                id="message"
                name="message"
                placeholder="Leave your message here! ☺"
                rows="4"
                required
                className="w-full mt-5 p-2 bg-slate-50 focus:outline-none"
              />
              <motion.div
                initial="hidden"
                animate="show"
                variants={heroVariants(0.7)}
                className="mt-6 "
              >
                <button>Submit</button>
                <button className="bg-transparent text-black">Cancel</button>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
