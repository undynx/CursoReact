import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({productos}) {

    return (
        
        <div id="itemList">
            {productos.map(productos => <Item key={productos.id} productos={productos} />)}
        </div>
    )
}

export default ItemList
