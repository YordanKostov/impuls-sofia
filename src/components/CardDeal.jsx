import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Къде може да <br className='sm:block hidden'/>ни откриете.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Тренировките се провеждат на няколко удобни и комуникативни локации, предлагащи лесен достъп, както с кола така и с градски транспорт. 
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
