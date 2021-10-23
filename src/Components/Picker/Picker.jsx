import React from 'react';
import './Picker.css';
import { useState } from 'react';

function Picker({ productos }) {
    
    const [cantidad, setCantidad] = useState(0)

    function botonMas() {
        if (cantidad < productos.stock) {
            setCantidad(cantidad + 1)
        } else {
            alert(`Ups! En este momento no tenemos más que ${productos.stock} unidades en stock`)
        }
    }

    function botonMenos() {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <article id="picker">

            <button className="btn btn-outline-primary">Detalle</button>
            <div id="counter">
                <button className="btn btn-outline-primary" onClick={botonMenos}> - </button>
                <input className="inputContador" value={cantidad} readonly="readonly"/>
                <button className="btn btn-outline-primary" onClick={botonMas}> + </button>
            </div>
            <button className="btn btn-primary">Agregar al Carrito</button>
            
       </article>
    )
}

export default Picker
