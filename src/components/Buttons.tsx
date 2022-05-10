import { FC } from 'react'
import { motion } from 'framer-motion'
import { ButtonsContainer, Fade } from '../utils/anims'
import List from './List'

const Buttons: FC = () => {
  return (
    <List
      date='02/03/2022'
      title='Buttons'
      description='Just some buttons which feel awesome to use 🤘'
    >
      <motion.div
        className='flex flex-col'
        variants={ButtonsContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='flex'>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 border-2 border-gray-200 p-2 text-sm md:p-5 md:text-xl text-gray-500 rounded md:rounded-lg hover:text-black hover:border-black transition-colors active:bg-black/10 duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 border-2 border-black p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-black text-white hover:bg-transparent hover:text-black active:bg-black/10 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 border-2 border-sky-500 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-sky-500 text-white hover:bg-transparent hover:text-sky-500 active:bg-sky-500/20 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 border-2 border-red-500 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-red-500 text-white hover:bg-transparent hover:text-red-500 active:bg-red-500/20 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-forest-500 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-forest-500 text-white hover:bg-transparent hover:text-forest-500 active:bg-forest-500/20 transition-colors duration-200'
          >
            Button
          </motion.button>
        </div>
        <div className='flex my-3'>
          <motion.button
            variants={Fade}
            className='border-2 border-transparent mr-1 md:mr-3 p-2 text-sm md:p-5 md:text-xl text-gray-500 rounded md:rounded-lg hover:bg-gray-200 transition-colors active:bg-black/20 duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-transparent mr-1 md:mr-3 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg text-black hover:bg-black/10 active:bg-black/20 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-transparent mr-1 md:mr-3 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg text-sky-500 hover:bg-sky-500/20 active:bg-sky-500/30 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-transparent mr-1 md:mr-3 p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg text-red-500 hover:bg-red-500/10 active:bg-red-500/30 transition-colors duration-200'
          >
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-transparent p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg text-forest-500 hover:bg-forest-500/10 active:bg-forest-500/30 transition-colors duration-200'
          >
            Button
          </motion.button>
        </div>
        <div className='flex'>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 flex border-2 border-black p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-black text-white hover:bg-transparent hover:text-black active:bg-black/10 transition-colors duration-200 w-fit'
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
              className='mr-1 md:mr-3'
            >
              <polyline points='8 17 12 21 16 17'></polyline>
              <line x1='12' y1='12' x2='12' y2='21'></line>
              <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'></path>
            </svg>
            Button
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 hidden md:flex border-2 border-black p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-black text-white hover:bg-transparent hover:text-black active:bg-black/10 transition-colors duration-200 w-fit'
          >
            Button
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='ml-2'
            >
              <polyline points='8 17 12 21 16 17'></polyline>
              <line x1='12' y1='12' x2='12' y2='21'></line>
              <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'></path>
            </svg>
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 flex border-2 border-black p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-black text-white hover:bg-transparent hover:text-black active:bg-black/10 transition-colors duration-200 w-fit'
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
              <polyline points='8 17 12 21 16 17'></polyline>
              <line x1='12' y1='12' x2='12' y2='21'></line>
              <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'></path>
            </svg>
          </motion.button>
          <motion.button
            variants={Fade}
            className='mr-1 md:mr-3 border-2 border-gray-300 flex items-center p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-gray-200 text-gray-300 cursor-not-allowed w-fit'
            disabled
          >
            <svg
              className='animate-spin -ml-1 mr-1 md:mr-3 h-5 w-5 text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-100'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Uploading
          </motion.button>
          <motion.button
            variants={Fade}
            className='border-2 border-gray-300 flex items-center p-2 text-sm md:p-5 md:text-xl rounded md:rounded-lg bg-gray-200 text-gray-300 cursor-not-allowed w-fit'
            disabled
          >
            Disabled
          </motion.button>
        </div>
      </motion.div>
    </List>
  )
}

export default Buttons
