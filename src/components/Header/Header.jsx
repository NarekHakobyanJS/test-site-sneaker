import React from "react";
import { ImCart } from "react-icons/im"
import { FaHouseUser } from "react-icons/fa"
import "./Header.scss"
const Header = ({ onClickCart }) => {
    return (
        <header className='header'>
            <div className='headerLeft'>
                <img src="https://cutewallpaper.org/24/jumpman-logo-png/jumpman-9361f-air-efb71-jordan-c83b9-logo-42d1e-white-a8f49-black-a0b6f-png-1ca9d-image-b21ac-with---jordan---logo---white---transparent---png---transparent---png---image---pngitem.png" width={70} />
                <div className='headerInfo'>
                    <h3>Jordan shoes</h3>
                    <p>Best shoes Forever</p>
                </div>
            </div>

            <ul className='headerRight'>
                <li onClick={onClickCart}>
                    <ImCart
                        className="myCart" /> 
                        <span>34500</span></li>
                <li><FaHouseUser /></li>
            </ul>

        </header>
    )
}

export default Header