import { Footer, Header, Hero, Service } from "./components";

function App() {
    return (
        <>
            <div className="w-full flex flex-col">
                <Header />
                <Hero />
                <Service />
                <Footer />
            </div>
        </>
    );
}

export default App;
