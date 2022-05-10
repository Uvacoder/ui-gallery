import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  Fade,
  FadeBottom,
  FadeContainer,
  FadeLeft,
  FadeRight,
} from '../../utils/anims'
import { User } from '@prisma/client'

const Tables: FC<{ rankings: User[] }> = ({ rankings }) => {
  /* Tables kept on having weird functionality */

  return (
    <motion.div
      className='mt-10'
      variants={FadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.div
        className='font-bold text-xl md:text-4xl flex mb-5'
        variants={FadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h1 variants={Fade} className='w-1/6'>
          #
        </motion.h1>
        <motion.h1 variants={Fade} className='w-3/4'>
          Name
        </motion.h1>
        <motion.h1 variants={Fade} className='w-1/5'>
          Tries
        </motion.h1>
      </motion.div>
      {rankings.map((row, index) => (
        <motion.div
          className='text-xl md:text-2xl text-gray-400 flex my-2'
          key={index}
          variants={FadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h1 variants={FadeLeft} className='w-1/6'>
            {index + 1}
          </motion.h1>
          <motion.h1
            variants={FadeBottom}
            className='w-3/4 overflow-ellipsis whitespace-nowrap overflow-hidden'
          >
            {row.name}
          </motion.h1>
          <motion.h1 variants={FadeRight} className='w-1/5'>
            {row.tries}
          </motion.h1>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Tables
