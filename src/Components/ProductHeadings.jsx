import { tagLine } from "../constant";
import { topRelevant } from "../constant";
import { productType } from "../constant";
import { path } from "../constant";

const ProductHeadings = () => {
  
  return (
    <div className=" h-auto w-full py-4 pt-6 font-semibold text-2xl md:text-3xl lg:text-4xl">
      <div className="py-2">{tagLine}</div>
      <hr className="h-px my-1 bg-gray-100 border-0 dark:bg-gray-300" />
      <div className="scrollbar flex justify-between  items-center gap-x-2  text-sm whitespace-nowrap  overflow-x-scroll  text-gray-600 md:text-sm">
        <div className="flex  justify-start  items-center gap-x-3 md:gap-x-6 ">
          {topRelevant.map((data) => (
            <>
              <div className="flex px-3 justify-center  items-center gap-x-2">
                <img className="w-5 h-10 " src={data.imgURL} />
                <p className="text-sm">{data.txt}</p>
              </div>
            </>
          ))}
        </div>
        <div>
          <select className="px-6">
            <option>Top Releavance</option>
          </select>
        </div>
      </div>
      <hr className="h-[0.5px] my-1 bg-gray-200 border-0 dark:bg-gray-300" />
      <div className="flex py-2   justify-start  items-center gap-x-2  text-xs whitespace-nowrap  overflow-x-scroll scrollbar text-gray-600 md:text-sm">
        {productType.map((product) => (
          <>
            <div className="px-2 bg-slate-200 py-1 rounded-md">{product}</div>
          </>
        ))}
      </div>
      <div className="flex py-2   justify-start  items-center gap-x-2  text-xs whitespace-nowrap  overflow-x-scroll scrollbar text-gray-500 md:text-sm">
        {path.map((pah, index) => (
          <>
            <div>
              {pah} {index <= path.length - 2 ? "≻" : ""}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductHeadings;
