import React, { Fragment } from 'react'
import { useState } from 'react'
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import '../Form/form.css'
import { Link } from 'react-router-dom'

import { useCartContext} from '../../../../Context/CartContext.jsx';
import { db } from "../../../../firebase/firebase"

const Form = (props) => {
    const { cart, clearCart, totalPrice } = useCartContext();

   /*  const total = cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0) */

    const [datos, setDatos] = useState({
        Name: "",
        Surname: "",
        DNI: "",
        NameCard: "",
        NumberCard: "",
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const buy = (e) => {
        const ventasCollection = collection(db, "ventas");

        addDoc(ventasCollection, {
            comprador: datos,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice,
        })
        .then((res) => {
            console.log(res.id);
            clearCart(); 
            })
            .catch(e => {
                console.log('ups error')
                console.error(e)
            })
    }

    return (

        <div>
            <Fragment>
                <h1>Form</h1>
                <form >
                    <div className="container-form">
                        <div>
                            <input type="text" placeholder="Name" className="form" name="Name" onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Surname" className="form" name="Surname" onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <input type="Number" placeholder="DNI" className="form" name="DNI" onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <input type="Text" placeholder="Name-Card" className="form" name="Name-Card" onChange={handleInputChange}></input>
                        </div>
                        <div>
                            <input type="Number" placeholder="Number-Card" className="form" name="Number-Card" onChange={handleInputChange}></input>
                        </div>
                    </div>
                </form>
                <div className="container-button">
                    <button type="Submit" className="button" onClick={buy}>Submit</button>
                    <Link className="Link-Home" to="/">Cancel</Link>
                </div>
            </Fragment>

        </div>
    )
}

export default Form

