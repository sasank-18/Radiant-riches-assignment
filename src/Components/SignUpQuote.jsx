import { signupTag } from "../constant"
const SignUpQuote = () => {
  return (
    <div className="flex justify-between py-4">
       
     
            <div className="text-[3vw] lg:text-[1.5vw]  whitespace-nowrap bg-slate-100 px-3 py-2 w- rounded-l-md w-[80%] ">{signupTag[0]}</div>
            <div className="text-[3vw] lg:text-[1.5vw]  whitespace-nowrap px-2 py-2 bg-blue-500 text-center font-semibold rounded-r-md w-[20%]">{signupTag[1]}</div>
       
        </div>
  )
}

export default SignUpQuote