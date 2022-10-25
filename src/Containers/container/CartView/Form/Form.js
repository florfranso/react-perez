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
                setVentaID(res.id);
                cart.forEach(producto => {
                    actualizarStock(producto);
                });
                clearCart();
            })
    }
    const actualizarStock = (producto) => {
        const updateStock = doc(db, "products", producto.id);
        updateDoc(updateStock, { stock: (producto.product.stock - producto.cantidad) });
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
                                <input type="text" placeholder="Nombre" className="form" name="Name" onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Apellido" className="form" name="Surname" onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <input type="Number" placeholder="DNI" className="form" name="DNI" onChange={handleInputChange}></input>
                            </div>
                            <div>
                                <input type="Number" placeholder="Numero de Contacto" className="form" name="Number-Card" onChange={handleInputChange}></input>
                            </div>
                        </div>
                    </form>
                    <div className="container-button">
                        <button type="Submit" className="button" onClick={buy}>Enviar</button>
                        <Link className="Link-Home" to="/">Cancelar</Link>
                    </div>
                </Fragment>
                :
                <div className='contenedorFinal'>
                    <h1>Muchas gracias por su compra!</h1>
                    <h2>Su orden de compra es : {ventaID}</h2>
                    <Link to='/'><button className='volver'>Volver al Inicio </button></Link>

                </div>
            }

        </div>
    )
}

export default Form

