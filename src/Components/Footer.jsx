import { footer } from "../constant"
const Footer = () => {
  return (
    <div className="flex  flex-wrap justify-between lg:justify-center lg:gap-x-52 gap-x-10 gap-y-10 mt-6  items-start py-10 px-16 bg-slate-950 text-white ">
     {footer.map((data)=>{
      return <>
      <div>
      <div className="font-bold text-lg lg:text-xl mb-3"> {data.Category}</div>
    {data.CategoriesDAta.map((data)=>{
       if(data.Category==='') return ;
       return <>
        <div className="mb-2 px-2 py-1 hover:bg-white hover:font-semibold rounded-md cursor-pointer active:bg-slate-300  hover:text-black text-lg lg:text-sm">{data}</div>
       </>
      })}
      </div>
      </>
     })}
    </div>
  )
}

export default Footer