import { FC, Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeBottom, FadeContainer } from '../../utils/anims'
import party from 'party-js'

const FontWeight: FC<{
  completed: number
  setCompleted: Dispatch<SetStateAction<number>>
  tries: number
  setTries: Dispatch<SetStateAction<number>>
}> = ({ completed, setCompleted, tries, setTries }) => {
  const [fontWeight, setFontWeight] = useState(200)
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
          ? 'You are an eyeballing champion! 😻'
          : 'Adjust the `font-weight` to 600'}
      </motion.h1>
      <motion.h1
        variants={FadeBottom}
        className='text-4xl text-center w-full my-10 inline-block'
        style={{ fontWeight: fontWeight }}
      >
        Lorem ipsum dolor sit amet
      </motion.h1>
      <motion.input
        variants={Fade}
        type='range'
        min='100'
        max='800'
        defaultValue={fontWeight.toString()}
        step='100'
        ref={slider}
        className={won ? 'disabled' : ''}
        disabled={won ? true : false}
        onChange={() => setFontWeight(parseInt(slider.current.value))}
        onPointerUp={() => {
          setTries(tries + 1)
          if (fontWeight === 600) {
            setCompleted(completed + 1)
            setReplay(!replay)
            setTimeout(() => setReplay(true), 100)
            setWon(true)
            party.confetti(slider.current, {
              count: party.variation.range(40, 60),
            })
          }
        }}
      />
    </motion.div>
  )
}

export default FontWeight
