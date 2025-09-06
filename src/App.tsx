import { Verified } from "lucide-react";
import Nav from "./components";

function App() {
  return (
    <div id="container" className="md:max-w-3xl border-2 border-t-0 mx-auto">
      <Nav />
      <div className="flex items-center gap-0.5">
        <h1
          className="text-4xl font-['Bungee'] p-5 border-r
            diagonal-lines"
        >
          YN
        </h1>

        <p className="text-3xl font-bold pl-2">Yash Nagrale</p>
        <Verified className="w-6 h-6 text-white dark:text-black fill-blue-500 relative top-[2px]" />
      </div>
    </div>
  );
}

export default App;
