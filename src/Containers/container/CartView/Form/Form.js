import React, { Fragment } from 'react'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import '../Form/form.css'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../../../Context/CartContext.jsx';
import { db } from "../../../../firebase/firebase"

const Form = (props) => {
    const { cart, clearCart, totalPrice } = useCartContext();

    const [datos, setDatos] = useState({
        Name: "",
        Surname: "",
        DNI: "",
        NameCard: "",
        NumberCard: "",
    })

    const [ventaID, setVentaID] = useState('')


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const buy = (e) => {
        e.preventDefault();
        const ventasCollection = collection(db, "ventas");

        addDoc(ventasCollection, {
            comprador: datos,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(),
        })
            .then((res) => {
                console.log(res.id);
                setVentaID(res.id);
                cart.forEach(producto => {
                    actualizarStock(producto);
                });
                clearCart();
            })
            .catch(e => {
                console.log('ups error')
                console.error(e)
            }) 
    }
    const actualizarStock = (producto) => {
        const updateStock = doc(db, "products", producto.id);
        updateDoc(updateStock, { stock: (producto.prod.stock - producto.cantidad) });

    }
    return (

        <div>
            {!ventaID ?
                <Fragment>
                    <h1>Usted debera abonar: $ {totalPrice()}</h1>
                    <h2>Complete los siguientes campos para continuar</h2>
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
                            {/* <div>
                            <input type="Text" placeholder="Name-Card" className="form" name="Name-Card" onChange={handleInputChange}></input>
                        </div> */}
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
                :
                <div className="container-fluid text-center pt-5 mt-5">
                    <h2>Muchas gracias por su compra!</h2>
                    <h4>Su orden de compra es : {ventaID}</h4>
                    <button className="btn btn-outline-dark mt-4"> <Link to='/'>Volver al Inicio</Link> </button>
                </div>
            }

        </div>
    )
}

export default Form

