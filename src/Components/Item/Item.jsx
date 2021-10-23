import React from 'react'
import './Item.css'
import Picker from '../Picker/Picker';

function Item({ productos }) {

    return (
        <article id="item">
            <img src={productos.foto} alt="patin"/>
            <h5>{productos.name}</h5>
            <p>{productos.precio}</p>

            <Picker productos={productos} />
        </article>
    )
}

export default Item;
