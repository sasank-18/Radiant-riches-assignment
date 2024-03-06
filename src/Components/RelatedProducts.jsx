import { relatedProduct } from "../constant";
const RelatedProducts = () => {
  return (
    <div className="my-3">
      <h1 className="text-2xl md:text-3xl py-12 font-semibold">Related Deals you might like for </h1>
      <div className="md:flex lg:justify-center  md:justify-start md:overflow-x-scroll scrollbar   md:gap-14">
        {relatedProduct.map((product) => {
          return (
            <>
              <div className="mb-8 min-w-56 lg:w-72   h-auto shadow-md rounded-md">
                <div className="p-4 flex justify-center">
                  <img src={product.img} />
                </div>
                <div className="flex justify-start gap-3 px-4 py-2  items-start">
                  <span className="bg-slate-200 text-blue-500 px-2 rounded-md   ">
                    {product.discount}
                  </span>
                  <span className="bg-slate-200 text-blue-500 px-2 rounded-md ">
                    {product.timeOffer}
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="text-center font-bold py-1">
                    {product.ProductName}
                  </h3>
                  <h3 className=" py-1">{product.Description}</h3>
                  <div className="flex gap-2  justify-start items-end py-1 pb-3">
                    <h3 className="font-semibold text-lg">
                      {product.discountPrice}
                    </h3>
                    <h3 className="font-light text-sm">
                      {product.actualPrice}
                    </h3>
                    <h3 className="font-light text-red-600  text-sm">
                      ({product.discount})
                    </h3>
                  </div>
                </div>
                <div className="bg-blue-600 text-center font-semibold rounded-b-md text-xl lg:rounded  ">
                  <button className=" text-white px-4 py-2">View Deal</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
