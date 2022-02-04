import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-center sticky p-5 top-0 backdrop-blur-lg">
      <div className="flex md:w-7/12 w-10/12 justify-between">
        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-200">
            rexulec.
          </p>
        </div>
        <div className="flex items-center text-gray-300">
          <a href="" className="mr-3">
            Projects
          </a>
          <a href="" className="px-5 p-2 rounded-full bg-gray-600">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
