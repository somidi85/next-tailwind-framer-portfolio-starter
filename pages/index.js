// next image
import Image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}              
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/20 to-black/40 sm:pt-32 xl:pt-10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show" exit="hidden" 
            className='h1'>
            Transforming Ideas <br /> 
            Into <span className='text-accent'>AI Solutions</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            animate="show" exit="hidden" 
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            We are a team of talented data scientists and machine learning engineers who are passionate 
            about building AI solutions that solve real-world problems.
          </motion.p> 
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial="hidden" 
            animate="show" exit="hidden" 
            className='hidden xl:hidden'>
            <ProjectsBtn />
          </motion.div>
        </div>        
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>                    
          {/* particles */}
          <ParticlesContainer / >
        </div>
      </div>
    </div>
  );
};

export default Home;
