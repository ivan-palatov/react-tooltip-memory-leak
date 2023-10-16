import { useEffect, useState } from "react";
import "./styles.css";

const data = Array.from({ length: 5000 }).map((_, index) => ({
  id: index,
  label: `Node #${index}`
}));

export default function App() {
  const [page, setPage] = useState(0);

  const currentData = data[page];

  useEffect(() => {
    function handle(e) {
      if (e.key === "ArrowLeft" || e.key === "Left") {
        e.preventDefault();
        setPage((page) => Math.max(0, page - 1));
      } else if (e.key === "ArrowRight" || e.key === "Right") {
        e.preventDefault();
        setPage((page) => Math.min(4999, page + 1));
      }
    }

    document.addEventListener("keydown", handle);

    return () => document.removeEventListener("keydown", handle);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 12,
          gap: 12,
          height: 48,
          border: "1px solid black"
        }}
      >
        <div>ID: {currentData.id}</div>
        <div
          data-tooltip-id="tooltip"
          data-tooltip-content={`Label: ${currentData.label}`}
        >
          Label: {currentData.label}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: 12,
          alignItems: "center",
          marginTop: 24
        }}
      >
        <button onClick={() => setPage((page) => Math.max(0, page - 1))}>
          Previous
        </button>
        <button onClick={() => setPage((page) => Math.min(4999, page + 1))}>
          Next
        </button>
      </div>
    </div>
  );
}
