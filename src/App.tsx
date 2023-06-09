/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jml-product-card';

const product = {
  id: '1',
  title: 'Coffee Mug - Sin Imagen',
  img: './coffee-mug.png',

}

function App() {

  return (
    <>
      <div className="card">
      <ProductCard
          product = { product }
          initialValues={{
          count: 4,
          maxCount: 10
          }}
          >
          {
              ( { count, reset, increaseBy, maxCount, isMaxCountReached  } ) => (
              <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />
                  
              </>
              )
          }
              
      </ProductCard>

      </div>
      
    </>
  )
}

export default App
