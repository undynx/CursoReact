import React from 'react';
import './ItemDetail.css';

function ItemDetail({item}) {

    return (
        <div id="detail-container">

            <div id="detail-card" className="card">
            
            <div id="div-img" className="div-itemdetail">
                {/* <img src={item.foto} alt="" srcset="" /> */}
            </div>
            
                <div id="div-description" className="div-itemdetail">
                    
                {/* <h4>{item.name}</h4>
                <p>{item.descripcion}</p>
                <p>{item.ruedas}</p>
                <h5>{item.precio}</h5> */}
                
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail;

/* <h4>{productos.name}</h4>
    <p>{productos.descripcion}</p>
    <p>{productos.ruedas}</p>
    <h5>{productos.precio}</h5> */
