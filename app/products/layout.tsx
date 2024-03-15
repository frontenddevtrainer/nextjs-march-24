import ProductsPage from "./page";

const ProductsLayout = ({ children })=>{
    return <div className="flex justify-between">
        <div className="w-2/3">{children}</div>
        <div className="w-1/3">Adveristments</div>
    </div>
}

export default ProductsLayout;


{/* <ProductsLayout>
    <ProductsPage></ProductsPage>
</ProductsLayout> */}
