import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa +=Number.parseFloat(el.price))
  return (<div>
               {props.orders.map(el => (
              <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}
export default function Navigation(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <div>
      <ul className='nav'>
        <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/></li>
        <li><FaBars /></li>
        <li><FaSquareEnvelope /></li>
        <li><FaUser /></li>
      </ul>
      {cartOpen && (
        <div className='shop-cart'>
            {props.orders.length > 0 ? 
            showOrders(props) : showNothing()}
        </div>
      )}
       </div>

  )
}