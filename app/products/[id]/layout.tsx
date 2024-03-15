const ProductsDetailLayout = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProductsDetailLayout;
