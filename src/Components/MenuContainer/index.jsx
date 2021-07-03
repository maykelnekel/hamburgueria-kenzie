import Product from '../Product'


function MenuContainer({ products, filteredProducts, setFilteredProducts,userInput, setUserInput }) {
    const showProducts = (value) => {
        const filtered = products.filter(
          item =>
            item.name == value
            ||
            item.category == value
            ||
            item.price == value
        )
        setFilteredProducts([filtered])
      }
    return (
        <section>
                <input
                placeholder = 'Filtre seu produto'
                type="text"
                value = {userInput}
                onChange = {(event) => setUserInput(event.target.value)}
                />
                <button 
                onClick = {() => 
                   showProducts(userInput)
                }
                >Filtrar
                </button>
        </section>
    )
}

export default MenuContainer