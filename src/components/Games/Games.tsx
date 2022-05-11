import { FC, useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fade, FadeContainer, FadeLeft, FadeRight } from '../../utils/anims'
import List from './../List'
import Modal from './Modal'
import { Blacklist } from '@prisma/client'
import LineHeight from './LineHeight'
import Padding from './Padding'
import GuessFont from './GuessFont'
import FontWeight from './FontWeight'
import LetterSpacing from './LetterSpacing'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

const Games: FC<{ isBlacklisted: Blacklist | null }> = ({ isBlacklisted }) => {
  const [tries, setTries] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [open, setOpen] = useState(false)

  const refAnimationInstance = useRef(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })
    makeShot(0.2, {
      spread: 60,
    })
    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })
    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  return (
    <List
      date='Game time!'
      title='UI Games'
      description='Who doesn’t love some fun? Let’s play some games! Also, it’s no fun if you just inspect element the page and cheat 😒'
    >
      <LineHeight
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <Padding
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <GuessFont
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <FontWeight
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <LetterSpacing
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <motion.div
        className='text-xl'
        variants={FadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={Fade}>
          <strong>Total tries: </strong>
          {tries}
        </motion.p>
        <motion.p variants={FadeLeft}>
          <strong>{completed}/5 </strong>
          games completed
        </motion.p>
        <motion.div className='flex flex-col md:block'>
          <motion.button
            variants={Fade}
            className={`border-2 p-5 w-fit h-fit text-xl rounded-lg mt-10 mr-5 text-white transition-colors duration-200 ${
              completed !== 5 || isBlacklisted !== null
                ? 'border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-sky-500 bg-sky-500 hover:text-sky-500 hover:bg-transparent active:bg-sky-500/20 cursor-pointer'
            }`}
            onClick={() => setOpen(true)}
            disabled={completed === 5 && isBlacklisted === null ? false : true}
          >
            {isBlacklisted === null
              ? 'Add to Leaderboard'
              : 'Already on Leaderboard!'}
          </motion.button>
          <motion.a
            variants={FadeRight}
            target='_blank'
            href='/leaderboard'
            className='border-2 border-sky-500 h-fit w-fit p-5 mt-2 md:mt-0 text-xl rounded-lg bg-sky-500 text-white hover:bg-transparent hover:text-sky-500 active:bg-sky-500/20 transition-colors duration-200'
          >
            View Leaderboard
          </motion.a>
        </motion.div>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {open && <Modal setOpen={setOpen} tries={tries} />}
        </AnimatePresence>
      </motion.div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </List>
  )
}

export default Games
