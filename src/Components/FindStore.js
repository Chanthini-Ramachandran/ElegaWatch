import React from 'react';
import '../../src/Components/css/More.css';
import Footer from './Footer';

const FindStore = () => {
  return (
    <div className='find-store-container'>
      <div className='address'>
        <b>ADDRESS</b>
        <p>Blk 234 - #4-20</p>
        <p></p>
        <p>SUJANA ROAD</p>
        <p>SINGAPORE-467903</p>
      </div>
      <div className="map">
        <div className='bg'></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510562.31415020354!2d103.51456240323388!3d1.3146649690516565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1704863452231!5m2!1sen!2ssg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default FindStore