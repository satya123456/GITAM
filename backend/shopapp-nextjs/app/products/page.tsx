import ProductCard from "@/components/products/ProductCard";
import Product from "@/models/Product";

// Server Side Components
export default async function Products() {
    console.log("Products Rendered!!!");
    // no need for useEffect
    const res = await fetch("https://fakestoreapi.com/products?limit=6");
    const products: Product[] = await res.json();

    return (
        <div className="container">
            <div className="row">
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}