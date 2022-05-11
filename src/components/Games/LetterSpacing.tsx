import { FC, Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeBottom, FadeContainer, FadeLeft } from '../../utils/anims'

const LetterSpacing: FC<{
  completed: number
  setCompleted: Dispatch<SetStateAction<number>>
  tries: number
  setTries: Dispatch<SetStateAction<number>>
  fire: () => void
}> = ({ completed, setCompleted, tries, setTries, fire }) => {
  const [letterSpacing, setLetterSpacing] = useState(8)
  const [won, setWon] = useState(false)
  const [replay, setReplay] = useState(true)
  const slider = useRef<HTMLInputElement>(null)

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
        {won
          ? "✨ You're truly something else!"
          : 'Adjust the `letter-spacing` to original'}
      </motion.h1>
      <motion.h1
        variants={FadeBottom}
        className='text-4xl text-center w-full my-10 inline-flex items-center md:inline-block h-40 md:h-fit'
        style={{ letterSpacing: letterSpacing }}
      >
        Lorem ipsum dolor sit amet
      </motion.h1>
      <motion.input
        variants={FadeLeft}
        type='range'
        min='-10'
        max='8'
        defaultValue={letterSpacing.toString()}
        step='1'
        ref={slider}
        className={won ? 'disabled' : ''}
        onChange={() => setLetterSpacing(parseFloat(slider.current.value))}
        disabled={won ? true : false}
        onPointerUp={() => {
          setTries(tries + 1)
          if (letterSpacing === 0) {
            setReplay(!replay)
            setTimeout(() => setReplay(true), 100)
            setWon(true)
            setCompleted(completed + 1)
            fire()
          }
        }}
      />
    </motion.div>
  )
}

export default LetterSpacing
