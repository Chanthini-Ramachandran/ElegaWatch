import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Watches.css';
import Footer from './Footer';

const Cart = () => {
  const [resData, setResData] = useState([]);
  const [saleresData, setSaleResData] = useState([]);
  const cartListItem = localStorage.getItem('cartListItem');
  const saleslistItem = localStorage.getItem('SalescartListItem');
  let split_string;
  let sales_split_string;
  if (cartListItem != null && cartListItem != undefined && cartListItem != ' ') {
    split_string = cartListItem.split(",");
  }
  else {
    split_string = ' ';
  }
  if (saleslistItem != null && saleslistItem != undefined && saleslistItem != ' ') {
    sales_split_string = saleslistItem.split(",");
  }
  else {
    sales_split_string = ' ';
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/watches');
      const responseData = await response.data
      setResData(responseData);
      console.log(split_string);
    }
    const fetchCartData = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      const responseData = await response.data
      setSaleResData(responseData);
      console.log(sales_split_string);
    }
    fetchData();
    fetchCartData();
  }, []);
  return (
    <>
      <div className='watches-container'>
        {
          split_string != ' ' && sales_split_string != ' '? (
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
                saleresData.map((data) => (
                  sales_split_string.map((item) => (
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
          split_string != ' ' && sales_split_string == ' '?
          (
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
          )
          :
          split_string == ' ' && sales_split_string != ' '?
          (
            <ul>
              {
                saleresData.map((data) => (
                  sales_split_string.map((item) => (
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

export default Cart