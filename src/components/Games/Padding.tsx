import { FC, Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer, FadeRight } from '../../utils/anims'

const Padding: FC<{
  completed: number
  setCompleted: Dispatch<SetStateAction<number>>
  tries: number
  setTries: Dispatch<SetStateAction<number>>
  fire: () => void
}> = ({ completed, setCompleted, tries, setTries, fire }) => {
  const [padding, setPadding] = useState(25)
  const [won, setWon] = useState(false)
  const [replay, setReplay] = useState(true)
  const slider = useRef<HTMLInputElement>(null)
  const [goal, setGoal] = useState(
    Math.round(Math.random() * 30)
  )

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
        {won ? "🤩 You're on a roll!" : `Adjust the \`padding\` to ${goal}px`}
      </motion.h1>
      <div className='flex items-center justify-center h-48'>
        <motion.button
          variants={Fade}
          className='mr-3 border-2 border-black text-xl my-10 rounded-lg bg-black text-white hover:bg-transparent hover:text-black active:bg-black/10 transition-colors duration-200'
          style={{ padding: padding }}
        >
          Button
        </motion.button>
      </div>
      <motion.input
        variants={FadeRight}
        type='range'
        min='0'
        max='30'
        step='1'
        defaultValue={padding.toString()}
        ref={slider}
        onChange={() => setPadding(parseFloat(slider.current.value))}
        className={won ? 'disabled' : ''}
        disabled={won ? true : false}
        onPointerUp={() => {
          if (!won) {
            setTries(tries + 1)
            if (padding === goal) {
              setReplay(!replay)
              setTimeout(() => setReplay(true), 100)
              setWon(true)
              setCompleted(completed + 1)
              fire()
            }
          }
        }}
      />
    </motion.div>
  )
}

export default Padding
