import { useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const sampleFeatures = [
    {
      name: 'Feature 1',
      description: 'Description 1',
      weight: 1,
    },
    {
      name: 'Feature 2',
      description: 'Description 2',
      weight: 2,
    },
  ]

  const sampleProducts = [
    {
      name: 'Product 1',
      description: 'Description 1',
      url: 'https://www.google.com',
      price: 100,
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      url: 'https://www.google.com',
      price: 200,
    },
  ]

const [features, setFeatures] = useState(sampleFeatures)
const [products, setProducts] = useState(sampleProducts)

  return (
    <>
    <header>
      <h1>
        <span>
          <img src="" alt="" />
        </span>
        Feature Compare
      </h1>
    </header>
    <main>
      <section>
        <h2>
          Features
        </h2>
        <Table />
        {features.map((feature) => {
          return (
            <div key={feature.name}>
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
              <p>{feature.weight}</p>
            </div>
          )
        })}
        {products.map((product) => {
          return (
            <div key={product.name}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.url}</p>
              <p>{product.price}</p>
            </div>
          )
        })}
      </section>
    </main>
    </>
  )
}

export default App
