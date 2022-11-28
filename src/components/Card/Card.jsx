import React, { useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs"
import "./Card.scss"

const Card = ({ sneakers, onClickPlus }) => {
    const [isAdded, setIsAdded] = useState(false)

    const handlePlus = () => {
        onClickPlus(sneakers)
        setIsAdded(true)
    }
    return (
        <div className='card'>
            <img src={sneakers.img} />
            <p>
                {sneakers.name}
            </p>
            <div className='cardBottom'>
                <div>
                    <span>price : </span>
                    <b>{sneakers.price} руб</b>
                </div>
                <BsFillBagPlusFill
                    className={isAdded ? 'active' : 'sendToCart'}
                    onClick={handlePlus}
                />
            </div>
        </div>
    )
}

export default Card