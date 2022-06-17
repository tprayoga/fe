import React from "react";
import { FaReact } from "react-icons/fa";

const DetailProjecct = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* button */}
        <div className="flex justify-end mt-2">
          <button className="py-1.5 px-4 rounded  font-medium text-sm tracking-tighter bg-black text-white border border-black hover:bg-white hover:text-black ease-in-out  duration-150">Add Service</button>
        </div>
        <div>
          <div className="flex items-center py-4 border rounded px-4 my-4 justify-between md:justify-start">
            <button className="font-semibold text-lg tracking-tighter hover:opacity-80">Frontend</button>
            <p className="text-center text-sm flex items-center md:w-full md:justify-center text-slate-600">
              React <FaReact className="ml-2" />
            </p>
          </div>
          <div className="flex items-center py-4 border rounded px-4 my-4 justify-between md:justify-start">
            <button className="font-semibold text-lg tracking-tighter hover:opacity-80">Backend</button>
            <p className="text-center text-sm flex items-center md:w-full md:justify-center text-slate-600">
              Node Js <FaReact className="ml-2" />
            </p>
          </div>
          <div className="flex items-center py-4 border rounded px-4 my-4 justify-between md:justify-start">
            <button className="font-semibold text-lg tracking-tighter hover:opacity-80">Database</button>
            <p className="text-center text-sm flex items-center md:w-full md:justify-center text-slate-600">
              Monggo <FaReact className="ml-2" />
            </p>
          </div>
        </div>

        {/* list */}
      </div>
    </div>
  );
};

export default DetailProjecct;
