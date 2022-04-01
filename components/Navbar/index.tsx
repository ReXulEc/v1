import { FC } from "react";
import Head from "next/head";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-center sticky p-5 top-0 backdrop-blur-lg">
      <div className="flex md:w-7/12 w-10/12 justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-200">yuricunha.</a>
          </Link>
        </div>
        <div className="flex items-center text-gray-300">
          <Link href="/projects">
            <a className="px-5 p-2 m-1 transition rounded-full hover:bg-[#262626] bg-[#1f1f1f]">
              Projetos
            </a>
          </Link>

          <a
            href="mailto:garotogordo@icloud.com"
            className="px-5 p-2 transition rounded-full hover:bg-[#262626] bg-[#1f1f1f]"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  );
};
