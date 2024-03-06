import { navLinks } from "../constant";
import bar from "../assert/icons/bar.svg";
import xmark from "../assert/icons/xmark.svg";
import { useState } from "react";
const Navbar = () => {
  const [toggleSidebar, setTogglesidebar] = useState(false);

  return (
    <header className="bg-black px-8 lg:px-10  h-16 flex justify-between lg:justify-center items-center">
      <input
        className="py-1 rounded-lg pl-4 outline-none relative  text-lg font-medium lg:w-[40vw]  w-[100%]"
        type="text"
      />

      <div className="ml-8 hidden max-lg:block ">
        <img
          onClick={() => {
            setTogglesidebar(!toggleSidebar);
          }}
          className="w-12  relative"
          src={toggleSidebar ? `${xmark}` : `${bar}`}
        />
        {toggleSidebar && (
          <ul className=" absolute h-auto w-56 flex flex-col rounded-bl-lg justify-center items-start px-4 py-4 gap-3 sm:gap-6 bg-white shadow-lg top-16 right-0 ">
            {navLinks.map((nav) => {
              return (
                <>
                  <li className="font-bold text-lg p-2 px-2 rounded-md hover:bg-slate-200 ">
                    {nav.label}
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </div>
      <ul className=" max-lg:hidden flex justify-center px-2 items-center gap-2 ">
        {navLinks.map((nav) => {
          return (
            <>
              <li className="font-semibold text-xl px-3 py-1 hover:border  hover:border-gray-50   rounded-md text-white">
                {nav.label}
              </li>
            </>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
