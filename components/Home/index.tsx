import { Main } from "@components/Main";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export const HomePage = function () {
    return(
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    ); 
}
