import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import './css/Search.css';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import './css/Watches.css';
import './css/Search.css';
import Footer from './Footer';

const Search = (props) => {
  const [search, setSearch] = useState('')
  const [resData, setResData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/watches');
      const responseData = await response.data
      setResData(responseData);
    }
    fetchData();
  }, [search]);
  const [count, setCount] = useState(1)
  const itemCount = (e) => {
    console.log(e.target);
    var yellowIcon = e.target;
    var val = yellowIcon.classList.contains('yellow-icon');
    console.log(val);
    var res = val ? yellowIcon.classList.remove('yellow-icon') : yellowIcon.classList.add('yellow-icon');
    console.log(res);
  }
  const addCart = (e) => {
    let addElement = e.target;
    console.log(addElement)
    let yellowAdd = addElement.classList.contains('yellow-icon');
    let plus = yellowAdd ? addElement.classList.add('yellow-icon') : addElement.classList.add('yellow-icon');
    setCount(count + 1);
    props.dataFromChild(count);
  }
  // const handleSearch = (e)=>{
  //     setSearch(e.target.value)
  //     console.log(search);
  // }
  console.log(search);
  return (
    <>
      <div className='search-container'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={`search-parent ${search ? 'active' : ''}`}>
            <input
              // onChange={(e)=>handleSearch(e)}
              onChange={(e) => { setSearch(e.target.value) }}
              type="search"
              placeholder='Search watches..'
              value={search}
            />
            <CiSearch className='search-icon' />
          </div>
        </form>
        <div>
          <div className='watches-container'>
            <ul>
              {
                resData.map((data) => (

                  data.title.toLowerCase().includes(search.toLowerCase()) && (
                    <li key={data.id}>
                      <div className='watch-img-container'>
                        <img src={require('../images/dbImages/' + data.image)} alt="img" />
                        <button className='heart' onClick={itemCount}><CiHeart className='black-icon' /></button>
                      </div>
                      <div className='watch-txt'>
                        <button onClick={addCart} className='addbtn' ><GoPlus className='addcart' /></button>
                        <p className='title'>{data.title}</p>
                        {/* <div className="pricebtn"> */}
                        <p className='type'>{data.type}</p>
                        {/* </div> */}
                        <p className='price'>{data.newPrice}</p>
                      </div>
                    </li>))
                )

              }
            </ul>
          </div>
        </div>
      </div>
      <footer><Footer /></footer>
    </>
  )
}

export default Search