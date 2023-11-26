import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <main className='flex flex-col items-center dark:bg-slate-800 dark:text-slate-100'>
      <Navbar />
      <Homepage />
    </main>
  );
}

export default App;
