import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer({ productos }) {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const promesaDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
                reject('error')
            }, 3000);
        });
        
        promesaDetail.then((resolve) => {
            setItem(resolve.find((i) => (i.id === itemId)))
    });
    }, [itemId])

    return (
        <div>
            <ItemDetail productos={item} />
        </div>
    )
}

export default ItemDetailContainer
