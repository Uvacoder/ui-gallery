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

const InputBoxes: FC = () => {
  return (
    <List
      date='10/29/2021'
      title='Input Boxes'
      description='Just some cool and interactive sample input fields 👌'
    >
      <motion.div
        className='grid grid-rows-auto grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-10'
        variants={FadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.input
          placeholder='Placeholder text...'
          className='p-7 h-fit text-2xl bg-transparent border-gray-200 border-2 rounded-lg outline-none transition-colors focus:border-sky-600 placeholder:text-gray-300'
          variants={FadeRight}
        />
        <motion.div variants={FadeLeft}>
          <input
            placeholder='Placeholder text...'
            className='p-7 h-fit text-2xl bg-transparent w-full border-forest-300 focus:border-forest-600 border-2 rounded-lg outline-none transition-colors placeholder:text-gray-300'
          />
          <p className='text-lg text-forest-300 inline-flex items-center mt-3'>
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2'
            >
              <polyline points='20 6 9 17 4 12'></polyline>
            </svg>
            This username is available!
          </p>
        </motion.div>
        <motion.div variants={Fade}>
          <input
            placeholder='Placeholder text...'
            className='p-7 h-fit text-2xl w-full bg-transparent border-red-300 border-2 rounded-lg outline-none transition-all text-red-300 placeholder:text-red-300 focus:bg-red-100/50'
          />
          <p className='text-lg text-red-300 inline-flex items-center mt-3'>
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
            <strong className='mx-2'>Error:</strong> A valid input is required!
          </p>
        </motion.div>
        <motion.div variants={FadeBottom}>
          <input
            placeholder='Placeholder text...'
            className='p-7 h-fit text-2xl w-full bg-transparent border-yellow-300 border-2 rounded-lg outline-none transition-all placeholder:text-gray-300 focus:border-yellow-500'
          />
          <p className='text-lg text-yellow-500 inline-flex items-center mt-3'>
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
              <line x1='12' y1='9' x2='12' y2='13'></line>
              <line x1='12' y1='17' x2='12.01' y2='17'></line>
            </svg>
            <strong className='mx-2'>Warning:</strong> A valid input is
            required!
          </p>
        </motion.div>
        <motion.input
          placeholder='Disabled Input'
          className='p-7 h-fit text-2xl bg-gray-200 border-gray-300 border-2 rounded-lg outline-none transition-colors cursor-not-allowed placeholder:text-gray-300'
          disabled
          variants={FadeRight}
        />
        <motion.div
          className='flex border-gray-200 border-2 rounded-lg items-center h-fit p-7 transition-colors focus-within:border-sky-600'
          variants={FadeLeft}
        >
          <svg
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
          <input
            placeholder='Search...'
            className='ml-3 outline-none bg-transparent text-2xl w-64 md:min-w-56'
          />
        </motion.div>
      </motion.div>
    </List>
  )
}

export default InputBoxes
