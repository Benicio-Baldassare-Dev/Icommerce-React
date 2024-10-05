import { NavBar } from './Componentes/NavBar/NavBar'
import { Footer } from './componentes/Footer/Footer'
import { ItemListConteiner } from './componentes/ItemListConteiner/ItemListConteiner'
import { ItemDetailConteiner } from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { Cart } from './componentes/Cart/Cart'
import { Checkout } from './Componentes/Checkout/Checkout'
import { Error } from './componentes/Error/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { CartServiceContext } from './Componentes/CartServiceContext/CartServiceContext'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "item"), where("precio", "<=", 200));

    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size === 0) {
          
      }

      setProducts(querySnapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() }
      )))
    });

  }, []);

  return (
    <>
    
    <CartServiceContext>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/" element={<ItemListConteiner />} />

          <Route path="/category/:categoryId" element={<ItemListConteiner />} />

          <Route path='/item/:id' element={<ItemDetailConteiner />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/checkout' element={<Checkout />} />

          <Route path='*' element={<Error />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    
      </CartServiceContext>
    </>
  )
}

export default App
