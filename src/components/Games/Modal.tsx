import { motion } from 'framer-motion'
import { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react'
import { Fade, FadeBottom, FadeContainer, FadeRight } from '../../utils/anims'

const Backdrop: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      className='fixed top-0 left-0 h-full w-full bg-black/90 flex justify-center items-center z-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Modal: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>
  tries: number
}> = ({ setOpen, tries }) => {
  const nameRef = useRef<HTMLInputElement>(null)

  return (
    <Backdrop onClick={() => setOpen(false)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='w-5/6 md:w-1/3 h-96 bg-body-light rounded-xl flex flex-col items-center justify-center'
      >
        <motion.form
          variants={FadeContainer}
          initial='hidden'
          animate='visible'
          className='flex flex-col items-center'
          onSubmit={(e) => {
            e.stopPropagation()

            const options = {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: `{"name":"${nameRef.current.value}","tries":${tries}}`,
            }

            fetch('/api/leaderboard', options)
              .then(() => (window.location.href = '/leaderboard'))
              .catch((err) => console.error(err))
          }}
        >
          <motion.input
            placeholder='Display name...'
            className='p-7 w-5/6 h-fit text-2xl bg-body-light border-gray-200 border-2 rounded-lg outline-none transition-colors focus:border-sky-600 placeholder:text-gray-300'
            variants={FadeRight}
            required
            ref={nameRef}
          />
          <motion.p
            className='text-lg flex items-center mt-3'
            variants={FadeBottom}
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
              className='mr-2'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='16' x2='12' y2='12'></line>
              <line x1='12' y1='8' x2='12.01' y2='8'></line>
            </svg>
            This will be public
          </motion.p>
          <motion.button
            variants={Fade}
            className='mt-10 border-2 border-sky-500 p-5 text-xl rounded-lg bg-sky-500 text-white hover:bg-transparent hover:text-sky-500 active:bg-sky-500/20 transition-colors duration-200'
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
