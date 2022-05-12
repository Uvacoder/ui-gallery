import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fade, FadeContainer, FadeLeft, FadeRight } from '../../utils/anims'
import List from './../List'
import Modal from './Modal'
import LineHeight from './LineHeight'
import Padding from './Padding'
import FontWeight from './FontWeight'
import BorderRadius from './BorderRadius'
import LetterSpacing from './LetterSpacing'
import confetti from 'canvas-confetti'

const Games: FC = () => {
  const [tries, setTries] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [open, setOpen] = useState(false)

  const fire = () =>
    confetti({
      particleCount: 150,
      spread: 180,
    })

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
      <FontWeight
        completed={completed}
        setCompleted={setCompleted}
        tries={tries}
        setTries={setTries}
        fire={fire}
      />
      <BorderRadius
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
              completed !== 5
                ? 'border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-sky-500 bg-sky-500 hover:text-sky-500 hover:bg-transparent active:bg-sky-500/20 cursor-pointer'
            }`}
            onClick={() => setOpen(true)}
            disabled={completed !== 5 ? true : false}
          >
            Add to Leaderboard
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
    </List>
  )
}

export default Games
