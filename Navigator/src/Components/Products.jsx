import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/products?_page=${page}&_limit=10`).then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getDataFromServer()
  }, [page])

  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <h1>Watch Shop</h1>
      </div>
      <div className="products p-5 container" style={{borderBottom:"2px solid #f0f0f0"}}>
        <div className="row">
          {data.map((el) => (
            <div key={el.id} className="product p-0 text-center mb-3 col-3 h-100-block">
              <Link to={`/description/${el.id}`}>
              <img className='product-img mb-4' src={el.image} height={370} alt="" />
              </Link>
              <h3 className='mb-2'>{el.title}</h3>
              <p>$ {el.price}</p>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <button onClick={() => setPage(page - 1)} disabled={page == 1} className='pagination-btn me-4'>Prev</button>
          <span className='pagination-page-count'>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={page == 5} className='pagination-btn ms-4'>Next</button>
        </div>
      </div>
    </>
  )

}

export default Products
