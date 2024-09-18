import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader";
import Home from "./Home";

function SingleProductPage() {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const singleData = () => {
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then((res) => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }

    useEffect(() => {
        singleData()
    }, [])

    const { brand, img, category, details, price } = data

    return loading ? <Loader /> : (
        <>
            <Home />
            <div className="p-5 d-flex justify-content-center" data-testid="products-container">
                <div className="description-page col-5 p-4">
                    <div className="brand text-center">
                        <h2 data-testid="product-brand">{brand}</h2>
                    </div>
                    <div className="image text-center">
                        <img data-testid="product-image" src={img} height={350} alt={brand} />
                    </div>
                    <div className="category mb-2" data-testid="product-category">
                        {category}
                    </div>

                    <div className="details mb-2" data-testid="product-details">
                        {details}
                    </div>
                    <div className="price" data-testid="product-price">
                        {price}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProductPage