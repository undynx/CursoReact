import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// imágenes //
import twister from './assets/twisteredge.jpg';
import twistertrinity from './assets/twistertrinity.jpg';
import fr1 from './assets/fr1.jpg';
import eagle from './assets/flying.jpg';
import psvelocidad from './assets/ps-trinity-velocidad.jpg'
import powerbladeelite from './assets/powerblade-elite.jpg'
import agressive from './assets/flying-agressive.jpg';
import Header from '../Header/Header';

// array de artículos //
let items = [
  { id: 1, name: "Rollerblade Twister Edge", descripcion: "Patines de bota rígida, muy resistentes y con rulemanes de excelente calidad", ruedas: "85A 80mm", precio: "USD 350", categoria: "freeskate", stock: 8, foto: twister },
  { id: 2, name: "Rollerblade T.Edge Trinity", descripcion: "Patines de bota rígida, ideales para velocidad", ruedas: "85A 110mm", precio: "USD 400", categoria: "freeskate", stock: 2, foto: twistertrinity },
  { id: 3, name: "Seba FR1", descripcion: "Patines de bota rígida, muy cómodos y resistentes", ruedas: "85A 80mm", precio: "USD 350", categoria: "freeskate", stock: 1, foto: fr1},
  { id: 4, name: "Flying Eagle F4 Raven", descripcion: "Bota rígida, rulemanes flying eagle", ruedas: "85A 80mm", precio: "USD 270", categoria: "freeskate", stock: 3, foto: eagle },
  { id: 5, name: "Powerslide R4 Trinity", descripcion: "Bota rígida, patines de velocidad", ruedas: "88A 110mm", precio: "USD 330", categoria: "velocidad", stock: 2, foto: psvelocidad },
  { id: 6, name: "Powerblade Elite 125", descripcion: "Patines de velocidad, bota termomoldeable", ruedas: "85A 125mm", precio: "USD 330", categoria: "velocidad", stock: 5, foto: powerbladeelite },
  { id: 7, name: "Flying Eagle Enkidu Aggressive", descripcion: "Patines de agressive, bota rígida", ruedas: "88A 110mm", precio: "USD 280", categoria: "agressive", stock: 1, foto: agressive }
]

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
            
                <ItemList productos={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer;