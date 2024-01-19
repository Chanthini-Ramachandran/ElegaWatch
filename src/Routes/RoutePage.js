import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Watches from '../Components/Watches';
import SmartWatches from '../Components/SmartWatches';
import Sales from '../Components/Sales';
import More from '../Components/More';
import FindStore from '../Components/FindStore';
import Appointment from '../Components/Appointment';
import Cart from '../Components/Cart';
import Search from '../Components/Search';
import CreateAccount from '../Components/CreateAccount';
import Whishlist from '../Components/Whishlist';

function RoutePage() {
    const [data, SetData] = useState(0);
    const [menuItem, SetMenuItem] = useState('');
    const dataFromChild = (d) => {
        SetData(d);
    }
    const selectedMenuItem = (list) => {
        console.log(list)
        SetMenuItem(list);
        console.log(menuItem);
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar selectedMenuItem={selectedMenuItem} data={data} />}>
                        <Route index element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path="watches" element={<Watches menuItem={menuItem} dataFromChild={dataFromChild} />} />
                        <Route path="smartWatches" element={<SmartWatches menuItem={menuItem} dataFromChild={dataFromChild} />} />
                        <Route path="sales" element={<Sales dataFromChild={dataFromChild} menuItem={menuItem} />} />
                        <Route path="more" element={<More />} />
                        <Route path="findstore" element={<FindStore />} />
                        <Route path="appointment" element={<Appointment />} />
                        <Route path="cart" element={<Cart dataFromChild={dataFromChild} />} />
                        <Route path="search" element={<Search />} />
                        <Route path='createAccount' element={<CreateAccount />} />
                        <Route path='whishlist' element={<Whishlist dataFromChild={dataFromChild} />} />
                        <Route path='cart' element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutePage