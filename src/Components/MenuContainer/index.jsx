import Product from '../Product'


function MenuContainer({ products, filteredProducts, currentSale }) {


    return (
        <section className='products'>
               
            <div>
                { products.map((item, index) => 
                <div>
                    <Product 
                        key = {index}
                        products = {item} 
                    />
                </div>
                
                )}
            </div>
        </section>
    )
}

export default MenuContainer