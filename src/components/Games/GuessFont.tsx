import { FC, Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer, FadeRight } from '../../utils/anims'
import toast from 'react-hot-toast'

const GuessFont: FC<{
  completed: number
  setCompleted: Dispatch<SetStateAction<number>>
  tries: number
  setTries: Dispatch<SetStateAction<number>>
  fire: () => void
}> = ({ completed, setCompleted, tries, setTries, fire }) => {
  const [won, setWon] = useState(false)
  const [replay, setReplay] = useState(true)
  const input = useRef<HTMLInputElement>(null)

  return (
    <motion.div
      className='my-32'
      variants={FadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h1
        className='text-2xl font-bold'
        variants={Fade}
        initial='hidden'
        animate={replay ? 'visible' : 'hidden'}
      >
        {won ? '🏆 That was a hard one!' : 'Guess the font'}
      </motion.h1>{' '}
      <motion.h1
        variants={Fade}
        className='text-4xl text-center w-full my-10 inline-block guess-font'
      >
        Lorem ipsum dolor sit amet
      </motion.h1>
      <div className='w-full flex flex-col items-center md:flex-row justify-center'>
        <motion.input
          placeholder='Font name...'
          className={`p-4 text-lg text-center border-2 rounded-lg outline-none transition-colors focus:border-sky-600 placeholder:text-gray-300 ${
            won
              ? 'bg-gray-200 border-gray-300 cursor-not-allowed'
              : 'bg-transparent border-gray-200'
          }`}
          variants={FadeRight}
          disabled={won ? true : false}
          ref={input}
        />
        <motion.button
          variants={Fade}
          className={`border-2 mt-5 md:mt-0 md:ml-5 p-5 text-xl rounded-lg transition-colors duration-200 ${
            won
              ? 'border-gray-300 bg-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-sky-500 bg-sky-500 hover:text-sky-500 text-white hover:bg-transparent active:bg-sky-500/20'
          }`}
          disabled={won ? true : false}
          onClick={() => {
            setTries(tries + 1)
            if (input.current.value.toLowerCase() === 'roboto') {
              setReplay(!replay)
              setTimeout(() => setReplay(true), 100)
              setWon(true)
              setCompleted(completed + 1)
              fire()
            } else
              toast.error('Try again!', {
                style: {
                  padding: '16px',
                  color: '#F6F6F6',
                  background: '#E9463B',
                  boxShadow: 'none',
                },
                iconTheme: {
                  primary: '#F6F6F6',
                  secondary: '#E9463B',
                },
              })
          }}
        >
          Check
        </motion.button>
      </div>
    </motion.div>
  )
}

export default GuessFont
