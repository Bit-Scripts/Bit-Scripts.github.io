import CardsWrapper from "./components/CardsWrapper";
import Header from "./components/Header";
import Info from "./components/Info";
import GlobalProvider from "../context/GlobalProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
          <Info />
          <CardsWrapper />
        </main>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
