import { FC, Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer, FadeLeft } from '../../utils/anims'

const BorderRadius: FC<{
  completed: number
  setCompleted: Dispatch<SetStateAction<number>>
  tries: number
  setTries: Dispatch<SetStateAction<number>>
  fire: () => void
}> = ({ completed, setCompleted, tries, setTries, fire }) => {
  const [borderRadius, setBorderRadius] = useState(20)
  const [won, setWon] = useState(false)
  const [replay, setReplay] = useState(true)
  const slider = useRef<HTMLInputElement>(null)
  const [goal, setGoal] = useState(
    Math.round((Math.random() * 200) / 10) * 10
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
        {won
          ? "You're just too good at this!"
          : `Adjust the \`border-radius\` to ${goal}`}
      </motion.h1>
      <motion.img
        src='/Gradient5.jpg'
        alt='Banner'
        variants={FadeLeft}
        className='my-20 shadow-2xl w-full'
        style={{ borderRadius: borderRadius }}
      />
      <motion.input
        variants={Fade}
        type='range'
        min='0'
        max='200'
        defaultValue={borderRadius}
        step='10'
        ref={slider}
        className={won ? 'disabled' : ''}
        disabled={won ? true : false}
        onChange={() => setBorderRadius(parseInt(slider.current.value))}
        onPointerUp={() => {
          if (!won) {
            setTries(tries + 1)
            if (borderRadius === goal) {
              setCompleted(completed + 1)
              setReplay(!replay)
              setTimeout(() => setReplay(true), 100)
              setWon(true)
              fire()
            }
          }
        }}
      />
    </motion.div>
  )
}

export default BorderRadius
