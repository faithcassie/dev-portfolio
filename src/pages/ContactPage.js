import React, { useState } from "react";
import { circOut, motion, useScroll, useTransform } from "framer-motion";
import { heroVariants } from "../utils/motion";
import seaHorse from "../assets/images/seahorse.png";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/faithc.nguyen@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
    setIsSubmitting(false);
  };

  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -300], {
    ease: circOut,
  });
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100], {
    ease: circOut,
  });
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 600], {
    ease: circOut,
  });
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200], {
    ease: circOut,
  });
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300], {
    ease: circOut,
  });
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -200], {
    ease: circOut,
  });
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -500], {
    ease: circOut,
  });

  return (
    <div className="relative h-full w-full mt-36 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroVariants(0.3)}
        className="m-5"
      >
        <motion.img
          whileHover={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          src={seaHorse}
          alt="seaHorse"
          className=" mx-auto  w-60 h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-3 right-5 m-10 bg-purple-300 w-72 h-72 rounded-full blur-xl opacity-30 -z-10 mix-blend-multiply "
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
          {!isSubmitted ? (
            <motion.h1
              style={{ x: x1 }}
              className=" text-[4rem] md:text-[9rem] px-1 font-thin whitespace-nowrap pt-28 w-fit"
            >
              Send me a message! 📮
            </motion.h1>
          ) : (
            <motion.h1
              style={{ x: x1 }}
              className=" text-[46px] md:text-[7rem] px-1 font-thin whitespace-nowrap pt-28 w-fit"
            >
              Yay! You sent me a message. 🎊
            </motion.h1>
          )}
        </motion.div>

        <div className="w-full h-full flex flex-col pt-[5rem] mb-[30rem] ">
          {isSubmitting ? (
            <div className="w-[80%] md:w-[50%] h-full mx-auto flex flex-col">
              <div className="w-full h-36 rounded-3xl p-7 mb-5 bg-slate-100/75 mix-blend-multiply focus:outline-none ">
                <p className="text-xl md:text-3xl "> Sending...</p>
              </div>
            </div>
          ) : !isSubmitted ? (
            <form onSubmit={handleSubmit}>
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
                    className="w-full md:w-[300px] mr-5 p-2 mb-5 bg-slate-100/75 mix-blend-multiply focus:outline-none"
                  />

                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full p-2 mb-5 bg-slate-100/75 mix-blend-multiply focus:outline-none"
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
                  className="w-full mb-5 p-2 bg-slate-100/75 mix-blend-multiply focus:outline-none"
                />
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={heroVariants(0.7)}
                >
                  <button className="my-2 bg-black" type="submit">
                    Send
                  </button>
                </motion.div>
              </div>
            </form>
          ) : (
            <div className="w-[80%] md:w-[50%] h-full mx-auto flex flex-col">
              <div className="w-full h-36 rounded-3xl p-7 mb-5 bg-slate-100/75 mix-blend-multiply focus:outline-none ">
                <p className="text-xl md:text-3xl ">Thanks!</p>
                <p className="text-xl md:text-3xl ">
                  I'll get back to you soon! ☺
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
