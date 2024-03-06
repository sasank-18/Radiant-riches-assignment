import tick from "../assert/icons/tick.svg";
import { Products } from "../constant";
const Product = () => {
  return (
    <div className="h-auto">
      {Products.map((product) => {
        return (
          <>
            <div className="flex shadow-lg lg:flex-row lg:justify-between lg:items-center lg:gap-x-10 flex-col  items-center  h-auto w-[100%] my-8 rounded-md px-5 md:px-10 py-5 lg:py-2 ">
              <div className=" w-100%  lg:w-[24%]  my-4 lg:py-12 rounded-md lg:px-10 px-8 ">
                <img className="w-80 " src={product?.img} />
                <h4 className="text-center py-4 text-lg lg:text-xl font-bold">
                  {product.BuilderName}
                </h4>
              </div>

              <div className="lg:w-[48%]">
                <h3 className="font-bold text-start text-sm md:text-lg">
                  {product?.productName}
                  {" : "}
                  <span className="font-normal ">
                    {product?.productDescription}
                  </span>
                </h3>
                <div className="text-sm md:text-lg">
                  <h3 className="font-bold pb-1 pt-2">{product?.highlights}</h3>
                  <div>
                    {typeof product.highlightsDescription === "string" && (
                      <h3 className="pl-3">{product.highlightsDescription}</h3>
                    )}
                  </div>
                  <div className="my-1 " >
                    {typeof product.highlightsDescription === "object" &&
                      product.highlightsDescription.map((hlights) => (
                        <>
                          <div className="flex lg:w-[30vw] justify-start items-center   bg-orange-100 px-3 py-2 text-sm  ml-3 gap-x-2">
                            <h4 className="text-blue-600 rounded-md  px-2  bg-slate-300 py-1">
                              {hlights.rating}
                            </h4>
                            <h4 className="text-slate-600">
                              {hlights.feature}
                            </h4>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
                <div>
                  {product.extraFeature && (
                    <h4 className="text-sm md:text-lg py-1 font-medium">why we Love it</h4>
                  )}
                  <ul className="text-sm md:text-lg">
                    {product.extraFeature &&
                      product.extraFeature.map((feature) => {
                        return (
                          <>
                            <div className="flex py-1 gap-3">
                              <img className="w-6 lg:w-4" src={tick} />
                              <li>{feature}</li>
                            </div>
                          </>
                        );
                      })}
                  </ul>
                </div>
                <h3 className="text-blue-500 text-sm md:text-lg py-2">Show more</h3>
              </div>


              <div className="w-full  lg:w-[18%] ">
                <div className="flex lg:flex-col lg:justify-end lg:items-center py-4 lg:mb-28 lg:rounded-b-md lg:rounded-t-none  rounded-t-md px-4 md:px-8 bg-blue-50 items-start justify-between">
                  <div>
                    <h2 className="text-start lg:text-center font-bold lg:py-3 lg:text-3xl text-xl">
                      {product.rating}
                    </h2>
                    <h3 className="text-lg lg:text-xl  whitespace-nowrap font-semibold ">
                      {product.performance}
                    </h3>
                  </div>
                  <div className="lg:py-2">
                    {" "}
                    <span className="md:text-sm text-xs">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-center font-semibold rounded-b-md text-xl lg:rounded  ">
                  <button className=" text-white px-4 py-2">View</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
