// App.js
import React, { useState, useEffect } from 'react';
import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';
import { fetchProductIcon, fetchMatchingProducts } from './api';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const [productIdea, setProductIdea] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [matchingProducts, setMatchingProducts] = useState([]);

  const [loading, setLoading] = useState({
    icon: false,
    items: false
  })

  async function handleIdeaSubmit(e) {
    setIconUrl('')
    setLoading({ icon: true, items: true })
    await fetchProductIcon(e.target.value)
      .then(url => setIconUrl(url))
      .catch(error => console.error('Error fetching icon:', error));

    setLoading({ icon: false, items: true })
    await fetchMatchingProducts(productIdea)
      .then(products => setMatchingProducts(products))
      .catch(error => console.error('Error fetching matching products:', error));
    setLoading({ icon: false, items: false })
  }


  const handleProductInputChange = (event) => {
    setProductIdea(event.target.value);
  };


  return (
    <div className="h-screen font-[Arial] w-full p-32 ">
      <div className='w-full text-center mb-24'>
      <span className='text-4xl  font-bold'>Productify</span>
      </div>
      <div className='flex flex-col items-center'>

        <span className='flex justify-between items-center w-full p-4'>
          <ProductInput value={productIdea} onChange={handleProductInputChange} onSubmit={handleIdeaSubmit} />
          {loading.icon && <LoadingSpinner className='h-12 w-12' />}
          {iconUrl && <div className='rounded-md shadow-md'><img src={iconUrl} alt="Product Icon" className='h-16 w-16 rounded-md' /></div>}
        </span>
        <div className='p-4'>
        {!loading.items && <ProductList products={matchingProducts} />}
        {loading.items && <div className='w-full h-[100px]'>
          <LoadingSpinner className='h-12 w-12' />
        </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
