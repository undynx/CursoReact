import './ItemListContainer.css';
import { items } from '../../data/items';
import ItemList from '../ItemList/ItemList.jsx';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header/Header';

// promesa simulando llamada a backend //
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(items)
        reject('error')
    }, 3000);
});


function ItemListContainer({ greeting }) {
    // useParams para filtrado //
    const { category } = useParams();


    /*el useEffect llama a la promesa y luego de que se resuelva
    setea los items en productos para podes usar el retraso 
    de 3sec, si no se setea así no quedan los 3sec */
    const [productos, setProductos] = useState([])

    useEffect(() => {
        promesa.then(resolve => setProductos(resolve))

        promesa.then((resolve) => {
        category ? setProductos(resolve.filter((i) => i.categoria === category))
        : setProductos(resolve);
        })

    }, [category])

    return (
        <>
            <div>
                <Header title='Artículos'/>
            
                <p className="greeting">
                    {greeting}
                </p>
            
                <ItemList productos={productos} />
                <ItemDetailContainer />
                
            </div>
        </>
    )
}

export default ItemListContainer;