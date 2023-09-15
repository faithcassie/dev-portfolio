import React from "react";
import { circOut, motion, useScroll, useTransform } from "framer-motion";
import { heroVariants } from "../utils/motion";
import seaHorse from "../assets/images/seashorse@3x.png";

const ContactPage = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, -50, -100, -300, -400],
    {
      // ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
      ease: circOut,
    }
  );
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: circOut,
  });
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 600], {
    ease: circOut,
  });
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 500], {
    ease: circOut,
  });
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: circOut,
  });
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: circOut,
  });
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: circOut,
  });

  return (
    <div className="relative h-full w-full my-36">
      <motion.div initial="hidden" animate="show" variants={heroVariants(0.3)}>
        <img src={seaHorse} alt="seaHorse" className=" mx-auto w-60 h-auto" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-3 right-5 bg-purple-300 w-72 h-72 rounded-full blur-xl opacity-30 -z-10 mix-blend-multiply overflow-hidden"
      ></motion.div>
      <motion.div
        style={{ x: x3, y: y3 }}
        className="absolute -bottom-10 left-36 bg-pink-300 w-[20rem] h-[20rem] rounded-full blur-xl opacity-30 -z-10 mix-blend-multiply"
      ></motion.div>
      <motion.div
        style={{ x: x4, y: y4 }}
        className="absolute bottom-5 right-36 bg-yellow-300 w-72 h-72 rounded-full blur-xl opacity-30 -z-10 mix-blend-multiply"
      ></motion.div>
      <div className="pt-0">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants(0.4)}
        >
          <motion.h1
            style={{ x: x1 }}
            className=" text-[5rem] md:text-[10rem] px-1 font-thin whitespace-nowrap "
          >
            Send me a message!
          </motion.h1>
        </motion.div>

        <div className="w-full h-[500px] flex flex-col pt-[5rem] pb-[5rem]">
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
                  className="w-full md:w-[300px] mr-5 p-2 bg-slate-100/75 mix-blend-multiply focus:outline-none"
                />

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full p-2 bg-slate-100/75 mix-blend-multiply focus:outline-none"
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
                className="w-full mt-5 p-2 bg-slate-100/75 mix-blend-multiply focus:outline-none"
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
