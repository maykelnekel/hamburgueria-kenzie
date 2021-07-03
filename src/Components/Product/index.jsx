function Product({ handleClick, products, saleDetails, total, filteredProducts }) {
    return (
        <div>
            <div className='Products-List'>
                {
                // console.log(filteredProducts)
                filteredProducts.length > 0
                ?
                filteredProducts.map((element, index) =>
                    <div key={index}>
                        <h4>{element.name}</h4>
                        <p>{element.category} </p>
                        <p>{element.price} </p>
                        <button onClick={() => handleClick(element.id)}>Adicionar</button>
                    </div>
                )
                :
                products.map((element) =>
                    <div key={element.id}>
                        <h4>{element.name}</h4>
                        <p>{element.category} </p>
                        <p>{element.price} </p>
                        <button onClick={() => handleClick(element.id)}>Adicionar</button>
                    </div>
                   
                )
                }
            </div>
            <div className = 'Cart'>
                <h2>
                    Valor total da compra: R$ {total.toFixed(2)}
                </h2>
                <div className='Products-Cart'>
                    {saleDetails.map((element )=>
                        <div key={element.id}>
                            <h1>{element.name}</h1>
                            <p>{element.category}</p>
                            <p>{element.price}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product