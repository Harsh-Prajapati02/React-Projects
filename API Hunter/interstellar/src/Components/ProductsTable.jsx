import ProductCard from "./ProductCard"

function ProductsTable({ data }) {
    return (
        <table className="table table-hover table-bordered" border="1px">
            <thead>
                <tr className="table-dark">
                    <th scope="col">Sno</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {/* map through the data */}
                {data.map((el, index) => (
                    <ProductCard
                        key={el.id}
                        id={el.id}
                        brand={el.brand}
                        category={el.category}
                        price={el.price}
                        index={index + 1}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable