import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import {
  Fade,
  FadeContainer,
  FadeLeft,
} from '../utils/anims'

const List: FC<{
  date: string
  title: string
  description: string
  children: ReactNode
}> = ({ date, title, description, children }) => {
  return (
    <motion.div
      variants={FadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='my-48'
    >
      <motion.p className='text-gray-300 text-xl' variants={Fade}>
        {date}
      </motion.p>
      <motion.h1 className='font-bold text-3xl my-5' variants={FadeLeft}>
        {title}
      </motion.h1>
      <motion.p className='text-gray-300 text-lg mb-20' variants={Fade}>
        {description}
      </motion.p>
      <motion.div>{children}</motion.div>
      <Toaster />
    </motion.div>
  )
}

export default List
