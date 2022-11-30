'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title='| People on the World'
        textStyles='text-center'
      />
      <TitleText
        title={(<>
          Track friends around you and invite them to play together in the same world
        </>)}
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-contain'
        />
        <div
          className='absolute lg:bottom-[25%] bottom-[35%] lg:right-[10%] right-[5%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_30px_1px_#e77751]'
        >
          <img
            src='people-01.png'
            alt='people'
            className='w-full h-full '
          />
        </div>
        <div
          className='absolute lg:top-[25%] top-[35%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_30px_1px_#e5a1af]'
        >
          <img
            src='people-02.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div
          className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0px_30px_1px_#b8b2bb]'
        >
          <img
            src='people-03.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div
          className='absolute top-[40%] left-[20%] lg:w-[180px] w-0 lg:h-[136px] h-0 p-[6px] lg:rounded-[24px] lg:bg-[#5d6680] lg:shadow-[0_0px_30px_1px_#de5dcd]'
        >
          <img
            src='meta-01.png'
            alt='people'
            className='w-full h-full rounded-[24px]'
          />
          <p 
            className='text-white lg:text-[16px] text-[0px] font-bold absolute bottom-[13.5%] left-[13.5%]'
          >The Upside Down</p>
          <img
              src='people-06.png'
              alt='people'
              className='lg:w-[24px] w-0 lg:h-[24px] h-0 absolute bottom-[34.5%] left-[21.5%] z-100'
            />
          <img
            src='people-05.png'
            alt='people'
            className='lg:w-[24px] w-0 lg:h-[24px] h-0 absolute bottom-[34.5%] left-[17.5%] z-0'
          />
          <img
            src='people-04.png'
            alt='people'
            className='lg:w-[24px] w-0 lg:h-[24px] h-0 absolute bottom-[34.5%] left-[13.5%] z-2'
          />
          <p 
            className='text-white lg:text-[12px] text-[0px] font-light absolute bottom-[36%] left-[39%]'
          >+ 264 has joined</p>
        </div>
        <div
          className='absolute lg:top-[9%] top-[20%] lg:left-[60%] left-[60%] sm:w-[180px] w-0 sm:h-[136px] h-0 p-[6px] rounded-[24px] sm:bg-[#5d6680] sm:shadow-[0_0px_30px_1px_#691f8ea9]'
        >
          <img
            src='meta-02.png'
            alt='people'
            className='w-full h-full rounded-[24px]'
          />
          <p 
            className='text-white sm:text-[18px] text-[0px] font-bold absolute bottom-[13.5%] left-[13.5%]'
          >Hawkins Labs</p>
          <img
              src='people-06.png'
              alt='people'
              className='sm:w-[24px] w-0 sm:h-[24px] h-0 absolute bottom-[34.5%] left-[21.5%] z-100'
            />
          <img
            src='people-05.png'
            alt='people'
            className='sm:w-[24px] w-0 sm:h-[24px] h-0 absolute bottom-[34.5%] left-[17.5%] z-0'
          />
          <img
            src='people-04.png'
            alt='people'
            className='sm:w-[24px] w-0 sm:h-[24px] h-0 absolute bottom-[34.5%] left-[13.5%] z-2'
          />
          <p 
            className='text-white sm:text-[12px] text-[0px] font-light absolute bottom-[36%] left-[39%]'
          >+ 264 has joined</p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
