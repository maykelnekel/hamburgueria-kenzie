

function Product({ handleClick, products, saleDetails, total, filteredProducts }) {
    return (
        <div className='Products-container'>
            <div className='Products-List'>
                {
                    filteredProducts.length > 0
                    ?
                    (filteredProducts.map((element, index) =>
                    <div className='Product' key={index}>
                                {console.log(filteredProducts.length)}
                                {console.log(element)}
                                <h4 className = 'Element-name'>{element.name}</h4>
                                <p className = 'Element-category'>{element.category}</p>
                                <p className = 'Element-price'>R$ {element.price}</p>
                                <button onClick={() => handleClick(element.id)}>Adicionar</button>
                            </div>
                        ))
                        :
                        (products.map((element) =>
                            <div className='Product' key={element.id}>
                                <h4 className = 'Element-name' >{element.name}</h4>
                                <p className = 'Element-category'>{element.category}</p>
                                <p className = 'Element-price'>R$ {element.price}</p>
                                <button onClick={() => handleClick(element.id)}>Adicionar</button>
                            </div>
                        ))
                }

            </div>
            <div className='Cart'>
                {/* <h2>
                   Produtos no carrinho:
                </h2> */}
                <h2 className = 'Products-total'>
                    Valor total da compra: <strong>R$ {total.toFixed(2)}</strong>
                </h2>
                <div className='Products-Cart'>
                    {saleDetails.map((element) =>
                        <div className='Product-inCart' key={element.id}>
                            <h1 className = 'Element-name'>{element.name}</h1>
                            <p className = 'Element-category'>{element.category}</p>
                            <p className = 'Element-price'>R$ {element.price}</p>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default Product