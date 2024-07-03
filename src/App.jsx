import {
    Footer,
    Header,
    Hero,
    Service,
    Sponsor,
    TopDestination,
} from "./pages";
import Ellipse24 from "./assets/Ellipse_24.png";
import Ellipse23 from "./assets/Ellipse_23.png";

function App() {
    return (
        <>
            <div className="w-full flex items-center justify-center relative">
                <img src={Ellipse23} alt="" className="absolute top-0 left-0" />
                <img
                    src={Ellipse24}
                    alt=""
                    className="absolute top-56 right-0"
                />
                <div className="w-full flex flex-col gap-y-8 lg:gap-y-16 relative px-2 md:px-6 lg:px-10 2xl:px-0 2xl:max-w-3xl ">
                    <Header />
                    <Hero />
                    <Sponsor />
                    <Service />
                    <TopDestination />
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
}

export default App;
