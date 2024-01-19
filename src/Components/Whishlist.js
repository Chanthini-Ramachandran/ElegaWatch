import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Watches.css'
import Footer from './Footer';


function Whishlist() {
  const [resData, setResData] = useState([]);
  const [saleResData, setSaleResData] = useState([]);
  const whishListItem = localStorage.getItem('whishListItem');
  const salesWishListItem = localStorage.getItem('salesWishListItem');
  let split_string;
  let salessplit_string;
  if (whishListItem != null && whishListItem != undefined && whishListItem != ' ') {
    split_string = whishListItem.split(",");
  }
  else {
    split_string = ' ';
  }
  if (salesWishListItem != null && salesWishListItem != undefined && salesWishListItem != ' ') {
    salessplit_string = salesWishListItem.split(",");
  }
  else {
    salessplit_string = ' ';
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/watches');
      const responseData = await response.data
      setResData(responseData);
      console.log(split_string);
    }
    const fetchSale = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      const responseData = await response.data
      setSaleResData(responseData);
      console.log(salessplit_string);
    }
    fetchData();
    fetchSale();
  }, []);
  return (
    <>
      <div className='watches-container'>
        {
          split_string !== ' ' && salessplit_string !== ' ' ? (
            <ul>
              {
                resData.map((data) => (
                  split_string.map((item) => (
                    data.id == item &&
                    (
                      <li key={data.id}>
                        <div className='watch-img-container'>
                          <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        </div>
                        <div className='watch-txt'>
                          <p className='title'>{data.title}</p>
                          <p className='type'>{data.type}</p>
                          <p className='price'>{data.newPrice}</p>
                        </div>
                      </li>
                    )
                  ))
                ))
              }
              {
                saleResData.map((data) => (
                  salessplit_string.map((item) => (
                    data.id == item &&
                    (
                      <li key={data.id}>
                        <div className='watch-img-container'>
                          <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        </div>
                        <div className='watch-txt'>
                          <p className='title'>{data.title}</p>
                          <p className='type'>{data.type}</p>
                          <p className='price'>{data.newPrice}</p>
                        </div>
                      </li>
                    )
                  ))
                ))
              }
            </ul>
          )
          : salessplit_string == ' ' &&  split_string !== ' ' ? (
            <ul>
            {
              resData.map((data) => (
                split_string.map((item) => (
                  data.id == item &&
                  (
                    <li key={data.id}>
                      <div className='watch-img-container'>
                        <img src={require('../images/dbImages/' + data.image)} alt="img" />
                      </div>
                      <div className='watch-txt'>
                        <p className='title'>{data.title}</p>
                        <p className='type'>{data.type}</p>
                        <p className='price'>{data.newPrice}</p>
                      </div>
                    </li>
                  )
                ))
              ))
            }
          </ul>
          ):
          salessplit_string !== ' ' &&  split_string == ' ' ?(
            <ul>
            {
                saleResData.map((data) => (
                  salessplit_string.map((item) => (
                    data.id == item &&
                    (
                      <li key={data.id}>
                        <div className='watch-img-container'>
                          <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        </div>
                        <div className='watch-txt'>
                          <p className='title'>{data.title}</p>
                          <p className='type'>{data.type}</p>
                          <p className='price'>{data.newPrice}</p>
                        </div>
                      </li>
                    )
                  ))
                ))
              }
            </ul>
          ):
            (
              <div className="item-found">
                <h1 className='no-data'>No Items Found</h1>
              </div>
            )
        }

      </div>
      <footer><Footer /></footer>
    </>
  )
}

export default Whishlist