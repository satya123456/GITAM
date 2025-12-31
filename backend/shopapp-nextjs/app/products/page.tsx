import ProductCard from "@/components/products/ProductCard";
import Product from "@/models/Product";

// Server Side Components
export default async function Products() {
    console.log("Products Rendered!!!");
    // no need for useEffect
    const res = await fetch("http://localhost:3000/api/products");
    const products: Product[] = await res.json();

    return (
        <div className="container">
            <div className="row">
                {
                    products && products.map(product => <ProductCard 
                        key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}