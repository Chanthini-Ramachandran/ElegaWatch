import React from 'react'
import FindStore from './FindStore'
import Appointment from './Appointment'
import Footer from './Footer'


const More = () => {
  return (
    <div className='moreContainer'>
      <FindStore/>
      <Appointment/>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default More