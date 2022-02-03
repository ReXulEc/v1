import { FC } from "react";

export const Main: FC = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="md:w-7/12 w-10/12 mt-5">
        <div className="md:flex">
          <div className="mb-5 md:mb-0">
            <img src="/icon.png" className="rounded-full border-4 border-gray-800 md:w-auto w-1/2" alt="" />
          </div>
            <div className="md:ml-5">
            <p className="text-5xl font-bold text-gray-100">Mert Doğu</p>
              <p className=" text-fuchsia-400 text-opacity-70 text-xl font-medium">
                Full Stack Developer
              </p>
              <div className="mt-2 flex text-xl text-gray-400 font-semibold">
              <p className="">I'm a full stack developer with over { new Date().getFullYear() - 2019 } years of experience<br/>
              And a student who spends most all of his free time doing open source projects/websites/softwares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
