import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AppRouter } from "./router";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
