import { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import { Header } from '@components/Header';

const Custom404Page:NextPage = () => {
    return (
     <div className="">
         <div>
            <Navbar/>
         </div>
         <div className='flex h-screen items-center justify-center'>
            <p>Not found.. im still making this page lol.</p>
         </div>
        <Header title='Not Found!'/>
     </div>
    );
};

export default Custom404Page;