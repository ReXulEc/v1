import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@components/Header";
import { Navbar } from "@components/Navbar";
const index​ = function​(​)​{
  return (
    <div className="">
    <Header title="Projects"/>
        <Navbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12">

                <div className="border-2 border-[#1f1f1f] rounded-xl text-gray-200">
                    <div className="border-b-2 border-[#1f1f1f] rounded-t-xl p-4 text-gray-200">
                        <img src="/projects/reponse.png" alt="ReponseLogo" className="w-1/4 rounded-3xl"/>
                        <div className="mt-2">
                            <p className="font-semibold text-xl">Reponse App</p>
                            <p className="text-gray-600">A new way to chat with your communities and friends.</p>
                        </div>
                    </div>
                    <div className="p-4 py-6">
                        <div>
                            <p className="font-bold text-xl">Role</p>
                            <p className="">Founder & Creator</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-xl">What</p>
                            <p className="">I founded Reponse back in 2021 to make comminication more easier than ever!</p>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-[#1f1f1f] rounded-xl text-gray-200">
                    <div className="border-b-2 border-[#1f1f1f] rounded-t-xl p-4 text-gray-200">
                        <img src="/projects/reponse.png" alt="ReponseLogo" className="w-1/4 rounded-3xl"/>
                        <div className="mt-2">
                            <p className="font-semibold text-xl">Reponse App</p>
                            <p className="text-gray-600">A new way to chat with your communities and friends.</p>
                        </div>
                    </div>
                    <div className="p-4 py-6">
                        <div>
                            <p className="font-bold text-xl">Role</p>
                            <p className="">Founder & Creator</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-xl">What</p>
                            <p className="">I founded Reponse back in 2021 to make comminication more easier than ever!</p>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-[#1f1f1f] rounded-xl text-gray-200">
                    <div className="border-b-2 border-[#1f1f1f] rounded-t-xl p-4 text-gray-200">
                        <img src="/projects/reponse.png" alt="ReponseLogo" className="w-1/4 rounded-3xl"/>
                        <div className="mt-2">
                            <p className="font-semibold text-xl">Reponse App</p>
                            <p className="text-gray-600">A new way to chat with your communities and friends.</p>
                        </div>
                    </div>
                    <div className="p-4 py-6">
                        <div>
                            <p className="font-bold text-xl">Role</p>
                            <p className="">Founder & Creator</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-xl">What</p>
                            <p className="">I founded Reponse back in 2021 to make comminication more easier than ever!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default index;
