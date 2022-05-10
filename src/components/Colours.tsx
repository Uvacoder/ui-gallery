import { FC } from 'react'
import colours from '../utils/colours'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Fade, FastFadeContainer } from '../utils/anims'
import List from './List'

const Swatch: FC<{ colour: string }> = ({ colour }) => {
  const Copy = () => {
    toast.success('Copied', {
      style: {
        padding: '16px',
        color: '#F6F6F6',
        background: '#52CD77',
        boxShadow: 'none',
      },
      iconTheme: {
        primary: '#F6F6F6',
        secondary: '#52CD77',
      },
    })
  }

  return (
    <motion.div
      className='h-14 w-14 lg:h-20 lg:w-20 xl:h-16 xl:w-16 2xl:h-14 2xl:w-14 rounded-lg hover:cursor-pointer drop-shadow-2xl'
      style={{ backgroundColor: colour }}
      onClick={Copy}
      variants={Fade}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: '100%',
      }}
    />
  )
}

const Colours: FC = () => {
  return (
    <List
      date='08/23/2021'
      title='Colours'
      description='Colour has historically been used as a way of communication, dating back to ancient times. Here’s a HUGE collection of colours to paint your interfaces ✌️'
    >
      <motion.div
        className='grid grid-rows-auto grid-cols-5 md:grid-cols-10 gap-5'
        variants={FastFadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {colours.map((colour, index) => (
          <Swatch colour={colour} key={index} />
        ))}
      </motion.div>
    </List>
  )
}

export default Colours
