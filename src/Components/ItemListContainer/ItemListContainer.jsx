import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
    return (
        <p className="greeting">
            {greeting}
        </p>
    )
}

export default ItemListContainer;