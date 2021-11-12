import React from 'react';
import { items } from '../../data/items';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const promesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
                reject('error')
            }, 3000);
        });
        
        promesaDetail.then((resolve) => 
            setItem(resolve.find(i => (i.id.toString() === itemId)))
    );
    }, [itemId])

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
