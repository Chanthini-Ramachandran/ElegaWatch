import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Watches.css'
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import Footer from './Footer';

function Watches(props) {
  const [resData, setResData] = useState([]);
  const [count, setCount] = useState(1);
  var idArray = [];
  var cartIdArray = [];
  var localStorageValue = localStorage.getItem('whishListItem');
  var cartItemCount = localStorage.getItem('cartListItem');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/watches');
      const responseData = await response.data
      setResData(responseData);
      console.log(props.menuItem)
    }
    fetchData();
  }, [props.menuItem]);

  const itemCount = (e, id) => {
    console.log(localStorageValue);
    var idVal = id;
    var yellowIcon = e.target;
    var val = yellowIcon.classList.contains('yellow-icon');
    var res = val ? yellowIcon.classList.remove('yellow-icon') : yellowIcon.classList.add('yellow-icon');
    if (!val) {
      if (localStorageValue == null) {
        idArray.push(idVal);
        localStorage.setItem('whishListItem', idArray);
      }
      else {
        var split_string = localStorageValue.split(",");
        idArray.push(split_string);
        idArray[0].push(idVal.toString());
        console.log(idArray[0]);
        let unique = [];
        idArray[0].forEach(element => {
          if (!unique.includes(element)) {
            unique.push(element);
          }
        });
        console.log(unique);
        localStorage.setItem('whishListItem', unique);
      }

    }
    else {
      const filteredItems = idArray[0].filter(item => item != id);
      console.log(filteredItems);
      console.log(id);
      idArray[0] = filteredItems;
      localStorage.setItem('whishListItem', idArray[0]);
    }
    // localStorage.setItem('whishListItem', idArray);
  }
  const addCart = (e, id) => {
    let addElement = e.target;
    var idNum = id;
    let yellowAdd = addElement.classList.contains('yellow-icon');
    let plus = yellowAdd ? addElement.classList.add('yellow-icon') : addElement.classList.add('yellow-icon');
    setCount(count + 1);
    localStorage.setItem('wcount', count)
    props.dataFromChild(count);
    console.log(cartItemCount);
    if (cartItemCount != null) {
      var cartItem = cartItemCount.split(',');
      console.log(cartItem);
      cartIdArray.push(cartItem);
      cartIdArray[0].push(idNum.toString());
      console.log(cartIdArray);
      let unique = [];
      cartIdArray[0].forEach(element => {
        if (!unique.includes(element)) {
          unique.push(element);
        }
      });
      console.log(unique);
      localStorage.setItem('cartListItem', unique);
    }
    else {
      cartIdArray.push(idNum);
      localStorage.setItem('cartListItem', cartIdArray);
    }
    // if (!yellowAdd) {
    //   cartIdArray.push(idNum);
    // }
    // else {
    //   cartIdArray.push(idNum);
    // }

  }
  return (
    <>
      <div className='watches-container'>
        <ul>
          {
            props.menuItem === 'Mens' ?
              (
                resData.map((data) => (
                  data.type === 'mens' && (
                    <li key={data.id}>
                      <div className='watch-img-container'>
                        <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        <button className='heart' onClick={(e) => itemCount(e, data.id)}><CiHeart className='black-icon' /></button>
                      </div>
                      <div className='watch-txt'>
                        <button onClick={(e) => addCart(e, data.id)} className='addbtn' ><GoPlus className='addcart' /></button>
                        <p className='title'>{data.title}</p>
                        <p className='type'>{data.type}</p>
                        <p className='price'>{data.newPrice}</p>
                      </div>
                    </li>
                  )
                ))
              ) :
              props.menuItem === 'Womens' ? (
                resData.map((data) => (
                  data.type === 'girls' && (
                    <li key={data.id}>
                      <div className='watch-img-container'>
                        <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        <button className='heart' onClick={(e) => itemCount(e, data.id)}><CiHeart className='black-icon' /></button>
                      </div>
                      <div className='watch-txt'>
                        <button onClick={(e) => addCart(e, data.id)} className='addbtn' ><GoPlus className='addcart' /></button>
                        <p className='title'>{data.title}</p>
                        <p className='type'>{data.type}</p>
                        <p className='price'>{data.newPrice}</p>
                      </div>
                    </li>
                  )
                ))
              ) :
                props.menuItem === 'Unisex' ? (
                  resData.map((data) => (
                    data.type === 'unisex' && (
                      <li key={data.id}>
                        <div className='watch-img-container'>
                          <img src={require('../images/dbImages/' + data.image)} alt="img" />
                          <button className='heart' onClick={(e) => itemCount(e, data.id)}><CiHeart className='black-icon' /></button>
                        </div>
                        <div className='watch-txt'>
                          <button onClick={(e) => addCart(e, data.id)} className='addbtn' ><GoPlus className='addcart' /></button>
                          <p className='title'>{data.title}</p>
                          <p className='type'>{data.type}</p>
                          <p className='price'>{data.newPrice}</p>
                        </div>
                      </li>)
                  ))
                ) :
                  (
                    resData.map((data) => (
                      <li key={data.id}>
                        <div className='watch-img-container'>
                          <img src={require('../images/dbImages/' + data.image)} alt="img" />
                          <button className='heart' onClick={(e) => itemCount(e, data.id)}><CiHeart className='black-icon' /></button>
                        </div>
                        <div className='watch-txt'>
                          <button onClick={(e) => addCart(e, data.id)} className='addbtn' ><GoPlus className='addcart' /></button>
                          <p className='title'>{data.title}</p>
                          <p className='type'>{data.type}</p>
                          <p className='price'>{data.newPrice}</p>
                        </div>
                      </li>))
                  )

          }
        </ul>
      </div>
      <footer><Footer /></footer>
    </>
  )
}
export default Watches