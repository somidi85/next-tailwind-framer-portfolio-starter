// next image
// import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import CallToAction from "../components/CallToAction";
// import Avatar from "../components/Avatar";

// icons
import { BsArrowRight } from "react-icons/bs";

// router
import { useRouter } from "next/router";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// counter
import CountUp from "react-countup";

const Home = () => {
  return (
    <div className="py-32 text-center xl:text-left">
      {/* text */}
      <div className="sm:pt-42 xl:pt-0 h-screen bg-primary/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br />
            Into <span className="text-accent">AI Solutions</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            We are a team of talented data scientists and machine learning
            engineers who are passionate about building AI solutions that solve
            real-world problems.
          </motion.p>

          {/* counters */}
          <motion.div
            className=" md:flex md:mx-w-xl xl:max-w-none mx-auto xl:mx-0 mb-12 mt-10"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-10 gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="flex items-center justify-center xl:justify-start z-30 "
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <CallToAction />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 z-0">
        {/* bg img */}
        <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          {/* particles */}
          <ParticlesContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
