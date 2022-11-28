import React from "react"
import { AiFillCloseSquare } from "react-icons/ai"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import "./Drawer.scss"
import empty from "./ecart.jpg"

const Drawer = ({ onClose, items = [], onRemove }) => {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='cartTitle'>
                    <h3>Carts</h3>
                    <AiFillCloseSquare
                        onClick={onClose}
                    />
                </div>

                <div className='item'>

                    {
                        items.length === 0 ? <div className="empty">
                            <img src={empty} />
                            <h4>корзина пуста</h4>
                            <button className='greenButton' onClick={onClose}>
                                <BsFillArrowLeftCircleFill className="goToBack" />
                                вернуться назад

                            </button>
                        </div>
                            :

                            items.map(obj => {
                                return <div className='cartItem'>
                                    <img src={obj.img} width={70} />
                                    <div className='cartItemInfo'>
                                        <p> {obj.name}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <AiFillCloseSquare onClick={() => onRemove(obj.id)} />
                                </div>
                            })
                    }
                </div>
                {
                    items.length === 0 ? null :

                        <div className='cartTotalBlock'>
                            <ul>
                                <li >
                                    <span>итог</span>
                                    <div></div>
                                    <b>35000 dram</b>
                                </li>
                                <li>
                                    <span>налог 5 %</span>
                                    <div></div>
                                    <b>1070dram</b>
                                </li>
                            </ul>
                            <button className='greenButton'>сделать заказ
                                <BsFillArrowRightCircleFill />
                            </button>
                        </div>
                }
            </div>

        </div>
    )
}

export default Drawer