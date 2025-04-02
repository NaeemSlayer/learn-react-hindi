import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#E6E6FA")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#E6E6FA" }}
          >
            Soft Lavender
          </button>
          <button
            onClick={() => setColor("#98FB98")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#98FB98" }}
          >
            Mint Green
          </button>
          <button
            onClick={() => setColor("#FFDAB9")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#FFDAB9" }}
          >
            Peach
          </button>
          <button
            onClick={() => setColor("#FF6F61")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#FF6F61" }}
          >
            Coral
          </button>
          <button
            onClick={() => setColor("#AEC6CF")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#AEC6CF" }}
          >
            Pastel Blue
          </button>
          <button
            onClick={() => setColor("#FFB6C1")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#FFB6C1" }}
          >
            Blush Pink
          </button>
          <button
            onClick={() => setColor("#008080")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#008080" }}
          >
            Deep Teal
          </button>
          <button
            onClick={() => setColor("#FD5E53")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#FD5E53" }}
          >
            Sunset Orange
          </button>
          <button
            onClick={() => setColor("#CCFF00")}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-md"
            style={{ backgroundColor: "#CCFF00" }}
          >
            Electric Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
IMPORTANT TAKE AWAY FROM VIDEO
The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
Refresh karne pe olive is lie aa rah a kyun ke useState() ki default value olive di hai hamne
*/
