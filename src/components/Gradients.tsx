import { FC } from 'react'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight } from '../utils/anims'
import List from './List'

const Gradients: FC = () => {
  return (
    <List
      date='09/15/2021'
      title='Gradients'
      description="Gradients are a growing trend in web design, here are some gradients I've found and collected over the years browsing the web!"
    >
      {[1, 2, 3, 4, 5].map((num, index) => (
        <motion.div
          className={`bg-no-repeat bg-cover w-full h-48 rounded-lg mb-10 shadow-2xl`}
          style={{ backgroundImage: `url("./Gradient${num}.jpg")` }}
          key={index}
          variants={index % 2 === 0 ? FadeLeft : FadeRight}
        />
      ))}
    </List>
  )
}

export default Gradients
