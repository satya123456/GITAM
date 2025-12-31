import Link from "next/link";

export default function NavbarComponents() {
    return <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/">
                ACME SHOP
            </Link>
            <div className="hidden md:flex space-x-6">
                <Link href="/products">
                    Products
                </Link>
                <Link href="/cart">
                    Cart
                </Link>
            </div>
        </div>
    </nav>
}