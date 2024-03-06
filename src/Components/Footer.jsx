import { footer } from "../constant"
const Footer = () => {
  return (
    <div className="flex  flex-wrap justify-between lg:justify-center lg:gap-x-52 gap-x-8 gap-y-6 mt-6  items-start py-10 px-16 bg-slate-950 text-white ">
     {footer.map((data)=>{
      return <>
      <div>
      <div className="font-bold text-sm lg:text-lg mb-3"> {data.Category}</div>
    {data.CategoriesDAta.map((data)=>{
       if(data.Category==='') return ;
       return <>
        <div className="mb-1 px-2 py-1 hover:bg-white hover:font-semibold rounded-md cursor-pointer active:bg-slate-300  hover:text-black text-sm text-slate-300 lg:text-lg">{data}</div>
       </>
      })}
      </div>
      </>
     })}
    </div>
  )
}

export default Footer