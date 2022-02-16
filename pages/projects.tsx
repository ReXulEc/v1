import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@components/Header";
import { Navbar } from "@components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
    <Header title="Projects"/>
        <Navbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
                <div className="border-2 border-[#101010] rounded-xl p-4 flex text-gray-200">
                    <div className="border-2 border-[#101010] rounded-xl p-4 flex text-gray-200">
                        <img src="/projects/reponse.png" alt="ReponseLogo" className="w-1/4 rounded-3xl"/>
                        <p className="ml-2 font-semibold text-xl">Reponse App</p>
                    </div>
                    <p>gsbshhs</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
