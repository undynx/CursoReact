import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'
import Picker from '../Picker/Picker';

function Item({ productos }) {

    return (

            <article id="item">
                <img src={productos.foto} alt="patin"/>
                <h5>{productos.name}</h5>
                <p>{productos.precio}</p>

                <Picker productos={productos} />

                <Link to={`/items/${productos.id}`}>
                    <button className="btn btn-primary" id="detail-button">Detalle</button>
                </Link>
            </article>
    )
}

export default Item;
