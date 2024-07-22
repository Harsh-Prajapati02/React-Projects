import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(null);
  const [order, setOrder] = useState(null);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/products`,{
      params : {
        _page : page,
        _limit : 10,
        type : type,
        _sort : "price",
        _order : order
      } 
    }).then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then((res) => {
      alert("Product Deleted Successfully...");
      getDataFromServer();
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDataFromServer()
  }, [page, type, order])

  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <h1>Watch Shop</h1>
      </div>

      <div className="products p-5 container" style={{ borderBottom: "2px solid #f0f0f0" }}>
        <div className="row">
          <div className='p-5 ps-4 pe-4 d-flex justify-content-between align-items-center'>
            <div className='sort ps-1'>
              <button onClick={() => setOrder("asc")} className='me-3 p-2 ps-5 pe-5 lowToHigh'>Price Low To High</button>
              <button onClick={() => setOrder("desc")} className='ms-3 p-2 ps-5 pe-5 highToLow'>Price High To Low</button>
            </div>
            <div className='filter pe-1'>
              <select onChange={(e) => setType(e.target.value)} className='p-2 ps-3 pe-3' name="Filter" id="">
                <option className='mt-2' value="type">Type</option>
                <option value="analog">Analog</option>
                <option value="digital">Digital</option>
                <option value="ana-digi">Ana-Digi</option>
              </select>
            </div>
          </div>
          {data.map((el) => (
            <div key={el.id} className="product p-0 text-center mb-4 col-3 h-100-block">
              <Link to={`/description/${el.id}`}>
                <img className='product-img mb-4' src={el.image} height={370} alt="" />
              </Link>
              <h3 className='mb-2'>{el.title}</h3>
              <p>$ {el.price}</p>
              <div className='d-flex justify-content-center align-items-center'>
                <button className='edit-btn me-2'><Link className='edit-link' to={`/edit/${el.id}`}>Edit</Link></button>
                <button onClick={() => deleteProduct(el.id)} className='delete-btn ms-2'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <button onClick={() => setPage(page - 1)} disabled={page == 1} className='pagination-btn me-4'>Prev</button>
          <span className='pagination-page-count'>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={page == 6} className='pagination-btn ms-4'>Next</button>
        </div>
      </div>
    </>
  )

}

export default Products
