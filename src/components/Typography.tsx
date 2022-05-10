import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  Fade,
  FadeBottom,
  FadeContainer,
  FadeLeft,
  FadeRight,
} from '../utils/anims'
import List from './List'

const Typography: FC = () => {
  return (
    <List
      date='10/29/2021'
      title='Typography'
      description='What’s an application without a good font? 🙌'
    >
      <motion.div
        variants={FadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center mb-10'
          variants={Fade}
        >
          <h1 className='font-extrabold text-max mb-4'>Large Text</h1>
          <p>84px / 700</p>
        </motion.div>
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center my-10'
          variants={FadeLeft}
        >
          <h1 className='font-semibold text-[64px] mb-4'>Title</h1>
          <p>64px / 600</p>
        </motion.div>
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center my-10'
          variants={FadeRight}
        >
          <h1 className='font-light text-5xl mb-4'>Subtitle</h1>
          <p>48px / 200</p>
        </motion.div>
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center my-10'
          variants={FadeBottom}
        >
          <h1 className='font-medium text-4xl mb-4'>Body</h1>
          <p>36px / 500</p>
        </motion.div>
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center my-10'
          variants={FadeRight}
        >
          <h1 className='font-light text-4xl tracking-[10px] mb-4'>CAPTION</h1>
          <p>36px / 5px / 200</p>
        </motion.div>
        <motion.div
          className='flex flex-col text-center md:flex-row md:justify-between items-center my-10'
          variants={FadeBottom}
        >
          <h1 className='font-mono text-xl mb-4'>{`Code: () =>`}</h1>
          <p>36px / Mono / 200</p>
        </motion.div>
      </motion.div>
    </List>
  )
}

export default Typography
