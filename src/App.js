import { useState } from 'react';
import './App.css';
import MenuContainer from './Components/MenuContainer'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState({ total: 0, saleDetails: [] })
  const { total, saleDetails } = currentSale

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
  const handleClick = (productId) => {
    const finded = products.find(item => item.id == productId)
    setCurrentSale({ total: total + finded.price, saleDetails: [...saleDetails, finded] })
  }

  const ShowSale = () => {
   return saleDetails.map(element => 
      <div>
        <h1>{element.name}</h1>
        <p>{element.category}</p>
        <p>{element.price}</p>
      </div>
    )
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>Hamburgueria da Kenzie</h1>
      </header>
      <section className='App-menuContainer'>
        

        <div>
          <MenuContainer
          products={products}
          filteredProducts={filteredProducts}
          currentSale={currentSale}
          handleClick = {handleClick}
          />
        </div>

        <div className='App-totalPrice'>
          <h2>
          Valor total da compra: R$ {total.toFixed(2)}
          </h2>
          <div>
          {ShowSale()}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
