import { Header } from "@components/Header";
import { Navbar } from "@components/Navbar";
import { CONFIG } from "@lib/config";

const index = function(){
  return (
    <div className="">
    <Header title="Projects"/>
        <Navbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 py-2">
            {CONFIG.PROJECTS.map((r) => (
                <div className="transition hover:scale-105 border-2 border-[#1f1f1f] group hover:border-[#242424] hover:bg-[#1f1f1f] rounded-xl text-gray-200">
                <div className="border-b-2 border-[#1f1f1f] group-hover:border-[#242424] rounded-t-xl p-4 text-gray-200">
                    <img src={r.img} alt="ReponseLogo" className="w-1/4 rounded-3xl"/>
                    <div className="mt-2">
                        <p className="font-semibold text-xl">{r.title}</p>
                        <p className="text-gray-600">{r.description}</p>
                    </div>
                </div>
                <div className="p-4 py-6">
                    <div>
                        <p className="font-bold text-xl">Role</p>
                        <p className="">{r.role}</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-xl">What</p>
                        <p className="">{r.what}</p>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default index;
