import Product from '../Product'


function MenuContainer({ products, filteredProducts, currentSale, handleClick }) {
    return (
        <section className='products'>
            <div>
                <div>
                    {products.map((element) => 
                        <div key={element.id}>
                            <h4>{element.name}</h4>
                            <p>{element.category} </p>
                            <p>{element.price} </p>
                            <button onClick={() => handleClick(element.id)}>Adicionar</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MenuContainer