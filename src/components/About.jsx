import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) =>{
  return(
      <Tilt className="xs:w-[250px] w-full">
        <motion.div  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}   className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
      <div
      options={{
        max:45,
        scale:1,
        speed:450
      }} 
       className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
         </div>
        </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
   </motion.div>

   <motion.p variants={fadeIn("", "" , 0.1, 1)} className='mt-4 text-secondary max-w-3xl leading-[30px]'>
     I am a skilled female software engineer with experience in <b>Mobile Application Development</b> using React Native, Android devleopment with Java, PHP (Laravel) , also I am a <b>Fullstack Website Developer </b>, and have expertise in frameworks like React , Node.js and Three.js,
     I am a quick learner and collaborate closely with clients to create efficent and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!
 <div className='mt-4'>
 <button
            // type="submit"
            download="Esther CV 2024.pdf"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
           Click to download my cv
     </button>
 </div>
   
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   
   </>
  )
}

export default  SectionWrapper(About, "about");