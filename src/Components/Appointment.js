import React, { useState } from 'react'
import './css/Appointment.css';
import Footer from './Footer';

const Appointment = () => {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  return (
    <>
      <div className='appointment-container'>
        <div className='appointment'>
          <h4>BOOK AN APPOINTMENT</h4>
          <form>
            <div className={`${fname ? 'active' : ''}`}>
              <input value={fname} onChange={(e) => { setFname(e.target.value) }} type="text" required />
              <label >First name*</label>
            </div>
            <div className={`${email ? 'active' : ''}`}>
              <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required />
              <label>Email*</label>
            </div>
            <div className={`${tel ? 'active' : ''}`}>
              <input value={tel} onChange={(e) => { setTel(e.target.value) }} type="tel" required />
              <label>Mobile number*</label>
            </div>
            <div>
              <select name="state" id="state">
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>

            <input type="submit" />
          </form>
        </div>
        <footer><Footer /></footer>
      </div>
    </>
  )
}

export default Appointment