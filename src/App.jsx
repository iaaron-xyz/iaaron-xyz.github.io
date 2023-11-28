import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className='flex flex-col items-center min-h-screen dark:bg-slate-900 dark:text-slate-200'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
