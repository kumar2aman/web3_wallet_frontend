import React from "react";
import { Pencil, Plus, Settings } from "lucide-react";
function SideBar() {
  return (
    <div className="flex flex-col justify-between items-center border-r-2 border-gray-600 w-20 p-2 font-bold font-ubuntu">
      <h3 className="mt-4 underline">Account</h3>
      <div className="flex flex-col justify-between items-center gap-4 border-t-2 pt-7 w-full mb-10">
        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Plus className="text-white group-hover:text-black size-6" />
        </div>

        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Pencil className="text-white group-hover:text-black size-6" />
        </div>

        <div className="p-3 rounded-xl bg-transparent hover:bg-white group cursor-pointer transition-colors duration-200">
          <Settings className="text-white group-hover:text-black size-6" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
