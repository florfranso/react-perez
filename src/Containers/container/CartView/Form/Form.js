import React from 'react';
import { db } from '../../../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { useCartContext } from '../../../../Context/CartContext';
import { useState } from 'react'
import '../Form/form.css';
import { Link } from 'react-router-dom';
//import React, {Fragment} from 'react';



const Form = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    /*     const total = cart.reduce((acc, item) => {
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

        const finalizarCompra = () => {
            const ventasCollection = collection(db, "ventas");
            addDoc(ventasCollection, {
                comprador: datos,
                items: cart,
                time: serverTimestamp(),
                total: totalPrice,
            })
                .then(result => {
                    console.log(result.id);
                    clearCart()
                })
        }

        /*   const actualizarStock = () =>{
              const updateStock = doc (db, "products", producto.id);
              updateDoc (updateStock, { stock : (producto.product.stock - producto.cantidad)});
          }
       */



        return (

            <div>
                {/* <Fragment> */}
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
                    <button type="Submit" className="button" onClick={finalizarCompra}>Submit</button>
                    {/* <button  className="button" onClick={handleClickToHome}>Cancel</button> */}
                    <Link className="Link-Home" to="/">Cancel</Link>
                </div>
                {/*  </Fragment> */}

            </div>
        )

    }
}
export default Form
