import React from 'react'
import { 
  Services, 
  Business, 
  Locations, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Trainers 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Services/>
          <Trainers/>
          <Locations/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App