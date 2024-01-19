import React, { useState } from 'react'
import './css/Appointment.css';
import Footer from './Footer';

function CreateAccount() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  return (
    <>
      <div className='appointment'>
        <h4>CREATE AN ACCOUNT</h4>
        <form>
          <div className={`${fname ? 'active' : ''}`}>
            <input value={fname} onChange={(e) => { setFname(e.target.value) }} type="text" required />
            <label >First name*</label>
          </div>
          <div className={`${lname ? 'active' : ''}`}>
            <input value={lname} onChange={(e) => { setLname(e.target.value) }} type="text" required />
            <label >Last name*</label>
          </div>
          <div className={`${email ? 'active' : ''}`}>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required />
            <label>Email*</label>
          </div>
          <div className={`${tel ? 'active' : ''}`}>
            <input value={tel} onChange={(e) => { setTel(e.target.value) }} type="tel" required />
            <label>Mobile number*</label>
          </div><input type="submit" value='Create Account' />
        </form>
      </div>
      <footer><Footer /></footer>
    </>
  )
}

export default CreateAccount